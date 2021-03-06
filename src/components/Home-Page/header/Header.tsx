import * as React from 'react';
import { useState, useEffect } from 'react';
import { observer, inject } from 'mobx-react';

import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

import FilterAdsDialog from './filter-ads-dialog/FilterAdsDialog';
import styles from './HeaderStyle';
import { AdsStore } from '../../../store/AdvertisementStore';
import { Role } from '../../../types/Role';

interface HeaderOwnProps {
    searchValue: string;
    onSearchValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    adsStore?: AdsStore;
}

const Header: React.FC<HeaderOwnProps> = (props): JSX.Element => {
    const { onSearchValueChange, searchValue } = props;

    const classes = styles({});

    const [openFilterAdDialog, setOpenFilterAdDialog] = useState<boolean>(false);
    const [activeFilterRoles, setActiveFilterRoles] = useState<string[]>([]);

    const adsStore: AdsStore = props.adsStore!;

    useEffect(() => {
        adsStore.loadAllRoles();
    }, []);

    useEffect(() => {
        adsStore.setActiveFilerRoles(activeFilterRoles);
    }, [activeFilterRoles]);

    const toggleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.target.checked
            ? setActiveFilterRoles([...activeFilterRoles, event.target.name])
            : setActiveFilterRoles(activeFilterRoles.filter((role) => role !== event.target.name));
    };

    return (
        <div className={classes.root}>
            <OutlinedInput
                placeholder="תראו לי ג'ובים לפי...."
                className={classes.searchBar}
                classes={{
                    input: classes.searchBarText,
                }}
                startAdornment={
                    <InputAdornment position="start">
                        <IconButton>
                            <FontAwesomeIcon icon={faFilter} onClick={() => setOpenFilterAdDialog(true)} />
                            {openFilterAdDialog && (
                                <FilterAdsDialog
                                    setOpenFilterAdDialog={setOpenFilterAdDialog}
                                    toggleFilter={toggleFilter}
                                    activeFilterRoles={activeFilterRoles}
                                    allRoles={adsStore.getAllRoles}
                                />
                            )}
                        </IconButton>
                        <div className={classes.activeFilterRolesContainer}>
                            {activeFilterRoles.map((filter) => {
                                return (
                                    <span
                                        className={classes.activeFilterRole}
                                        style={{
                                            backgroundColor: adsStore.getAllRoles.find((role) => role.initials === filter)
                                                ?.color,
                                        }}
                                    >
                                        {filter}
                                    </span>
                                );
                            })}
                        </div>
                    </InputAdornment>
                }
                onChange={onSearchValueChange}
                value={searchValue}
            />
        </div>
    );
};

export default inject('adsStore')(observer(Header));
