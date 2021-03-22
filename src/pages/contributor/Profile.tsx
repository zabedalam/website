import React from 'react';
import data from '../../components/dummy_data/data.json';
import { Container, makeStyles, Box, Theme, Typography, Grid, Avatar, IconButton } from '@material-ui/core';
const contributors = data.Contributor;
import RoomIcon from '@material-ui/icons/Room';
import EmailIcon from '@material-ui/icons/Email';
import WebAssetIcon from '@material-ui/icons/WebAsset';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIcon from '@material-ui/icons/Phone';
const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100vw',
        height: '100vh',
        paddingTop: theme.spacing(5),
    },
    textColor: {
        color: theme.palette.grey[500],
    },
    iconWrapper: {
        backgroundColor: theme.palette.background.default,
    },
    midColumn: {
        [theme.breakpoints.up('md')]: {
            paddingLeft: theme.spacing(4),
        },
    },
    avatar: {
        width: theme.spacing(12),
        height: theme.spacing(12),
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: theme.spacing(2),
    },
    text: {
        textAlign: 'center',
    },
}));
const Profile = (props: any) => {
    const id = props.match.params.id;
    // eslint-disable-next-line eqeqeq
    const profiles = contributors.find((p) => p.id == id);
    console.log(profiles);
    const classes = useStyles();
    return (
        <section>
            <Container maxWidth="lg">
                <Box py={10}>
                    <Box mb={9} textAlign="center">
                        <Container maxWidth="sm">
                            <Typography variant="h6" component="h2" gutterBottom={true}>
                                {profiles?.name}
                            </Typography>
                            <Typography variant="h3" color="primary" component="h2" gutterBottom={true}>
                                {profiles?.desc}
                            </Typography>
                            <Typography variant="h5" color="secondary" component="h2" gutterBottom={true}>
                                {profiles?.skills}
                            </Typography>
                        </Container>
                    </Box>
                    <Grid container spacing={6}>
                        <Grid item xs={12} md={4}>
                            <Avatar alt="" src={profiles?.img} className={classes.avatar} />
                            <Typography variant="body2" color="textSecondary" className={classes.text}>
                                Member Status : {profiles?.isActive ? 'Active' : 'InActive'}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <div className={classes.midColumn}>
                                <Box display="flex" mb={3}>
                                    <div>
                                        <Avatar className={classes.iconWrapper}>
                                            <RoomIcon color="primary" fontSize="small" />
                                        </Avatar>
                                    </div>
                                    <Box ml={2}>
                                        <Typography variant="h6" gutterBottom={true}>
                                            Address
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            {profiles?.Address}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box display="flex">
                                    <div>
                                        <Avatar className={classes.iconWrapper}>
                                            <EmailIcon color="primary" fontSize="small" />
                                        </Avatar>
                                    </div>
                                    <Box ml={2}>
                                        <Typography variant="h6" gutterBottom={true}>
                                            Email
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            {profiles?.email}
                                        </Typography>
                                    </Box>
                                </Box>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Box display="flex" mb={3}>
                                <div>
                                    <Avatar className={classes.iconWrapper}>
                                        <WebAssetIcon color="primary" fontSize="small" />
                                    </Avatar>
                                </div>
                                <Box ml={2}>
                                    <Typography variant="h6" gutterBottom={true}>
                                        Social Media
                                    </Typography>
                                    <IconButton href="#" color="inherit">
                                        <FacebookIcon />
                                    </IconButton>
                                    <IconButton href="#" color="inherit">
                                        <TwitterIcon />
                                    </IconButton>
                                    <IconButton href="#" color="inherit">
                                        <LinkedInIcon />
                                    </IconButton>
                                </Box>
                            </Box>
                            <Box display="flex">
                                <div>
                                    <Avatar className={classes.iconWrapper}>
                                        <PhoneIcon color="primary" fontSize="small" />
                                    </Avatar>
                                </div>
                                <Box ml={2}>
                                    <Typography variant="h6" gutterBottom={true}>
                                        Phone
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {profiles?.tel}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </section>
    );
};
export default Profile;
