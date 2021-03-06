import React from 'react';
import data from '../../components/dummy_data/data.json';
import { Container, makeStyles, Box, Theme, Typography } from '@material-ui/core';
const contributors = data.Contributor;
const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100vw',
        height: '100vh',
        paddingTop: theme.spacing(5),
    },
    textColor: {
        color: theme.palette.grey[500],
    },
}));
const Profile = (props: any) => {
    const id = props.match.params.id;
    // eslint-disable-next-line eqeqeq
    const profiles = contributors.find((p) => p.id == id);
    console.log(profiles);
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <Box color="secondary" width="50%" mx="auto" p={4} boxShadow={3}>
                <Typography variant="h3" color="secondary">
                    Name : {profiles?.name}
                </Typography>
                <Typography variant="h4" color="primary">
                    Position : {profiles?.desc}
                </Typography>
                <Typography variant="h5" className={classes.textColor}>
                    Skills : {profiles?.skills}
                </Typography>
                <Typography variant="h6" className={classes.textColor}>
                    Address : {profiles?.Address}
                </Typography>
                <Typography variant="h6" className={classes.textColor}>
                    Tel : {profiles?.tel}
                </Typography>
                <Typography variant="h6">Member Status : {profiles?.isActive ? 'Active' : 'InActive'}</Typography>
            </Box>
        </Container>
    );
};
export default Profile;
