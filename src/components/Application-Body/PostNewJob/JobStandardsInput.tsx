import * as React from 'react';

import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Checkbox from '@material-ui/core/Checkbox/Checkbox';
// import CircleChecked from '@material-ui/icons/CheckCircleOutline';
import CircleCheckedFilled from '@material-ui/icons/CheckCircleOutline';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';

import styles from './PostNewJobStyles';
import { Standard, STANDARD_DISPLAYS } from '../../../types/Standard';

interface JobStandardsInputProps {
    standards: Standard[];
    setStandards: (standard: Standard[]) => void;
}

const JobStandardsInput: React.FC<JobStandardsInputProps> = (props): JSX.Element => {
    const { standards, setStandards } = props;

    const classes = styles({});

    const standardCheckboxes: JSX.Element[] = STANDARD_DISPLAYS.map(standard => 
        <div className={classes.checkboxField} key={standard}>
            <Checkbox 
                className={classes.checkbox}
                icon={<CircleUnchecked className={classes.checkboxIcon} />} 
                checkedIcon={<CircleCheckedFilled className={classes.checkboxIcon} />}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => 
                    setStandards(
                        event.target.checked 
                            ? [...standards, standard]
                            : standards.filter(selectedStandard => selectedStandard !== standard)
                    )
                } />
            <Typography
                variant='subtitle1'
            >
                {standard}
            </Typography>
        </div>
    );
    
    return (
        <div className={classes.standardFields}>
            <InputLabel
                required={true}
            >
                תקן
            </InputLabel>
            <div
                className={classes.jobRequirementsMargin}
            >
                {standardCheckboxes}
            </div>
        </div>
    );    
}

export default JobStandardsInput;