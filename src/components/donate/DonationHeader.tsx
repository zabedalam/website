import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
    Grid,
    Typography,
    withStyles,
    withWidth,
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio,
    Checkbox,
    Button,
} from '@material-ui/core';

const styles = (theme: any) => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        fontWeight: 600,
        fontSize: '20px' as const,
        paddingTop: '80px' as const,
        paddingBottom: '80px' as const,
    },
    info: {
        marginLeft: '7px' as const,
        padding: '20px' as const,
        fontSize: '25px' as const,
    },
    infoGift: {
        padding: '20px 0' as const,
        fontSize: '25px' as const,
    },
    linkStyle: {
        background: '#1865f2' as const,
        color: theme.palette.common.white,
        textDecoration: 'none',
        padding: '10px' as const,
        borderRadius: '10px' as const,
    },
    buttonStyle: {
        justifyContent: 'space-between' as const,
        paddingTop: '15px' as const,
    },
    paper: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(3),
        display: 'flex' as const,
        flexDirection: 'column' as const,
        alignItems: 'center' as const,
    },
    checkedIcon: {
        color: theme.palette.common.white,
        padding: '30px 0' as const,
    },
    radioStyle: {
        visibility: 'hidden' as const,
    },
    labelStyle: {
        border: '2px solid gray' as const,
        borderRadius: '5px' as const,
        padding: '1px' as const,
        display: 'block' as const,
        cursor: 'pointer' as const,
        backgroundColor: theme.palette.primary.main,
        textAlign: 'center' as const,
        paddingRight: '30px' as const,
        '&:hover': {
            backgroundColor: theme.palette.common.white,
            color: 'black' as const,
        },
    },
});

const itemsMonthly: any = [
    { id: '$10', title: '10' },
    { id: '$20', title: '20' },
    { id: '$30', title: '30' },
    { id: '$40', title: '40' },
    { id: '$50', title: '50' },
    { id: 'other', title: 'Other' },
];

const itemsOnetime: any = [
    { id: '$25', title: '25' },
    { id: '$30', title: '30' },
    { id: '$40', title: '40' },
    { id: '$50', title: '50' },
    { id: '$100', title: '100' },
    { id: 'other', title: 'Other' },
];

function DonationHeader(props: any) {
    const [radio, setRadio] = useState('monthly');
    const [radio1, setRadio1] = useState('');
    const [radio2, setRadio2] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const totalDonation = () => {
        if (radio === 'monthly' && radio1 && isChecked === true) {
            return parseInt(radio1) + parseInt(radio1) * 0.04;
        } else if (radio === 'onetime' && radio2 && isChecked === true) {
            return parseInt(radio2) + parseInt(radio2) * 0.04;
        } else {
            return (radio === 'monthly' && radio1) || (radio === 'onetime' && radio2);
        }
    };

    const { classes } = props;

    return (
        <Grid container component="main" className={classes.root}>
            <Grid item xs={12} sm={8} md={5} className={classes.info}>
                <p>Help us do more</p>
                <p>
                    We’ll get right to the point. With the coronavirus (COVID-19) creating mass school closings, demand
                    for DIY Foundation has spiked. Please help us meet this demand. A gift of $10 monthly would make a
                    big difference. We’re a nonprofit that relies on support from people like you. Thank you!
                </p>
            </Grid>

            <Grid item xs={12} sm={12} md={6} className={classes.paper}>
                <div>
                    <Typography component="h1" variant="h5" className={classes.infoGift}>
                        Select gift frequency
                    </Typography>
                    <FormControl>
                        <RadioGroup row>
                            <FormControlLabel
                                defaultValue="monthly"
                                className={classes.labelStyle}
                                control={
                                    <Radio
                                        className={classes.radioStyle}
                                        name="radio"
                                        value="monthly"
                                        checked={radio === 'monthly'}
                                        onClick={() => setRadio('monthly')}
                                    />
                                }
                                label="Monthly"
                            />

                            <FormControlLabel
                                value="onetime"
                                className={classes.labelStyle}
                                control={
                                    <Radio
                                        className={classes.radioStyle}
                                        name="radio"
                                        value="onetime"
                                        checked={radio === 'onetime'}
                                        onClick={() => setRadio('onetime')}
                                    />
                                }
                                label="One time"
                            />
                        </RadioGroup>
                        <Typography component="h1" variant="h5" className={classes.infoGift}>
                            Select amount (in US dollars)
                        </Typography>
                        {radio === 'monthly' && (
                            <RadioGroup row>
                                {itemsMonthly.map((item: any) => (
                                    <FormControlLabel
                                        key={item.id}
                                        value={item.id}
                                        className={classes.labelStyle}
                                        control={
                                            <Radio
                                                value={item.title}
                                                name="radio"
                                                checked={radio1 === item}
                                                onChange={(e) => setRadio1(e.target.value)}
                                                className={classes.radioStyle}
                                            />
                                        }
                                        label={item.id}
                                    />
                                ))}
                            </RadioGroup>
                        )}{' '}
                        {radio === 'onetime' && (
                            <RadioGroup row>
                                {itemsOnetime.map((item: any) => (
                                    <FormControlLabel
                                        key={item.id}
                                        value={item.id}
                                        className={classes.labelStyle}
                                        control={
                                            <Radio
                                                value={item.title}
                                                name="radio"
                                                checked={radio2 === item}
                                                onChange={(e) => setRadio2(e.target.value)}
                                                className={classes.radioStyle}
                                            />
                                        }
                                        label={item.id}
                                    />
                                ))}
                            </RadioGroup>
                        )}
                        <div>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="remember"
                                        checked={isChecked}
                                        onChange={(e) => {
                                            setIsChecked(e.target.checked);
                                        }}
                                        className={classes.checkedIcon}
                                    />
                                }
                                label="Yes, I'll generously add the 0.04% transaction fees so DIY can
              keep 100% of my donation."
                            />
                        </div>
                        <div className={classes.buttonStyle}>
                            <Link to={`/payment`} className={classes.linkStyle}>
                                Pay with card {totalDonation()}
                            </Link>
                        </div>
                    </FormControl>
                </div>
            </Grid>
        </Grid>
    );
}

export default withWidth()(withStyles(styles, { withTheme: true })(DonationHeader));
