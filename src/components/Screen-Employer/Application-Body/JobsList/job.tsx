import * as React from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';

import styles from './jobsListStyle';

import { Advertisement } from '../../../../types/Advertisements';

interface JobsProps {
    ad: Advertisement;
}

const Job: React.FC<JobsProps> = (props): JSX.Element => {
    const classes = styles();
    const { ad } = props;

    return (
        <div className={classes.job}>
            <div className={classes.jobHeader}>
                <div className={classes.jobMainTitles}>
                    <span className={classes.jobTitle}> {ad.name}</span>
                    <Typography 
                        className={classes.tag} 
                        style={{ backgroundColor: ad.role.color }}
                        >
                        {ad.role.initials}
                    </Typography>
                </div>
                <div className={classes.candidates}>
                    <div className={classes.candidate}>
                        <Typography variant='h6'>
                            אדיר סיטון
                        </Typography>
                        <Typography variant='h6'>
                            1234567
                        </Typography>
                        <Typography variant='h6'>
                            052-1111111
                        </Typography>
                        <Button className={classes.viewJobBtn} startIcon={<VisibilityOutlinedIcon className={classes.btnIcon} />}>
                            לצפייה ברזומה
                        </Button>
                    </div>
                    <div className={classes.candidate}>
                        <Typography variant='h6'>
                            בן בביוף
                        </Typography>
                        <Typography variant='h6'>
                            1234867
                        </Typography>
                        <Typography variant='h6'>
                            052-2222222
                        </Typography>
                        <Button className={classes.viewJobBtn} startIcon={<VisibilityOutlinedIcon className={classes.btnIcon} />}>
                            לצפייה ברזומה
                        </Button>
                    </div>
                    <div className={classes.candidate}>
                        <Typography variant='h6'>
                            ישראל ישראלי
                        </Typography>
                        <Typography variant='h6'>
                            7654321
                        </Typography>
                        <Typography variant='h6'>
                            052-3333333
                        </Typography>
                        <Button className={classes.viewJobBtn} startIcon={<VisibilityOutlinedIcon className={classes.btnIcon} />}>
                            לצפייה ברזומה
                        </Button>
                    </div>
                </div>
            </div>
            <div className={classes.jobContent} />
            <div className={classes.jobFooter}>
                <Button className={classes.jobBtn} startIcon={<EditRoundedIcon className={classes.btnIcon} />}>עריכה</Button>
                <Button className={classes.jobBtn} startIcon={<CancelPresentationIcon className={classes.btnIcon} />}>סגירת תפקיד</Button>
            </div>
        </div>
    );
}

export default Job;
