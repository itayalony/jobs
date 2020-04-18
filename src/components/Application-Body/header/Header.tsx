import * as React from 'react';
import { useState, useEffect, useRef } from 'react';

import Button from '@material-ui/core/Button';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

import styles from './HeaderStyle';
import PostNewJob from './PostNewJob/PostNewJob';

import { getAllSelectOptions } from '../../../server/ads';
import { AllSelectOptions } from '../../../types/AllSelectOptions';

interface HeaderOwnProps {
    fetchAllAdsAfterPost: () => void;
    searchValue: string;
    onSearchValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Header: React.FC<HeaderOwnProps> = (props): JSX.Element => {
    const { fetchAllAdsAfterPost, onSearchValueChange, searchValue } = props;
    const classes = styles({});

    const [allSelectOptions, setAllSelectOptions] = useState<AllSelectOptions | null>(null);
    const [openAddDialog, setOpenAddDialog] = useState<boolean>(false/*TODO:false*/);
    const addButtonRef = useRef(null);

    // when closing dialog - blur the add button
    useEffect(() => {
        if (!openAddDialog && addButtonRef) {
            // @ts-ignore
            addButtonRef.current.blur();
        }
    }, [openAddDialog]);

    useEffect(() => {
        if (openAddDialog) {
            getAllSelectOptions()
              .then(allSelectOptions => setAllSelectOptions(allSelectOptions));
        }
    }, [openAddDialog]);
    

    const onCloseDialog = (): void => {
        setOpenAddDialog(false);
    }

    return (
        <div className={classes.root}>
            <OutlinedInput 
                placeholder="תראו לי ג'ובים לפי...."
                className={classes.searchBar}
                classes={{
                    input: classes.searchBarText
                }}
                startAdornment={
                    <InputAdornment position='start'>
                        <FontAwesomeIcon icon={faFilter}/>
                    </InputAdornment>
                }
                onChange={onSearchValueChange}
                value={searchValue}
            />
                
            <Button
                className={classes.addNewPostButton}
                variant="contained"
                onClick={() => setOpenAddDialog(true)}
                ref={addButtonRef}
            >
                <Typography
                    variant='h5'
                >
                    + פרסום תפקיד חדש
                </Typography>
            </Button>
            { openAddDialog && allSelectOptions && <PostNewJob 
                allSelectOptions={allSelectOptions}
                fetchAllAdsAfterPost={fetchAllAdsAfterPost}
                closeDialog={onCloseDialog} />}
            </div>
    );
}

export default Header;