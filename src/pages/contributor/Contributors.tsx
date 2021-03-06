import React from 'react';
import data from '../../components/dummy_data/data.json';
import { Grid, makeStyles } from '@material-ui/core';
import SectionTitle from '../../components/common/SectionTitle';
import Contributor from './Contributor';

const contributors = data.Contributor;
const useStyles = makeStyles((theme) => ({
    container: {
        alignItems: 'stretch',
        justifyItems: 'center',
        [theme.breakpoints.down('md')]: {
            alignItems: 'stretch',
            justifyItems: 'space-evenly',
        },
        marginRight: 20,
    },
    root: {
        maxWidth: 345,
    },
    media: {
        height: 240,
    },
    containerGrid: {
        paddingLeft: '4%',
        marginBottom: 20,
    },
    itemImage: {
        transition: 'opacity 1s, transform 1s',

        '&:hover': {
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.19), 0 6px 10px rgba(0, 0, 0, 0.23)',
        },
    },
}));

export default function Contributors() {
    const classes = useStyles();
    return (
        <Grid container item xs={12} spacing={0} className={classes.container} direction="column" justify="center">
            <SectionTitle title="Contributors" />
            <Grid container className={classes.containerGrid}>
                {contributors.map((contributor) => (
                    <Grid item xs={6} md={4} key={contributor.id}>
                        <Contributor contributor={contributor} />
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
}
