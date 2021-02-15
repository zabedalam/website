import { makeStyles } from '@material-ui/core';
import {Grid, Box,IconButton,Paper}from '@material-ui/core';
import SocialIcons from '../../components/common/SocialIcons';
import Bubble from '../../components/common/Bubble';
const styles = makeStyles((theme) => ({
    container: {
        [theme.breakpoints.up('sm')]: {
            marginTop: 20
        },
        [theme.breakpoints.down('md')]: {
            marginTop: 150
        },
    },
    profile: {
        padding: '57px 50px 15px 50px',
        [theme.breakpoints.down('lg')]: {
            padding: '50px 40px 15px 40px',
        },
        [theme.breakpoints.down('md')]: {
            padding: '30px 20px 15px 20px'
        },
        [theme.breakpoints.down('sm')]: {
            padding: '30px 20px 15px 20px'
        },
        marginBottom: 10
    },
    profilePhoto: {
        maxWidth: '40%'
    },
    profileInfo: {
        color: '#3d4451',
        paddingBottom: 25,
        marginBottom: 25,
        borderBottom: '1px solid #dedede',
        [theme.breakpoints.down('md')]: {
            borderBottom: '0px'
        },
    },
    greeting: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 700,
        lineHeight: 1.1,
        display: 'inline-block',
        padding: '7px 12px',
        textTransform: 'uppercase',
        position: 'relative',
      
        
        '&:before': {
            content: '""',
            width: 0,
            height: 0,
            top: '100%',
            left: 5,
            display: 'block',
            position: 'absolute',
            borderStyle: 'solid',
            borderWidth: '0 0 8px 8px',
            borderColor: 'transparent',
          
        }
    },
    profileTitle: {
        fontSize: 32,
        lineHeight: 1.1,
        fontWeight: 700,
        marginBottom: 5,
        [theme.breakpoints.down('md')]: {
            fontSize: 20
        },
    },
    profileTitleStart: {
        fontWeight: 200,
    },
    profilePosition: {
        fontSize: 18,
        [theme.breakpoints.down('md')]: {
            fontSize: 16
        },
        fontWeight: 400,
        lineHeight: 1.1,
        marginBottom: 10,
    },

    profileListItem: {
        //color: '#333333',
        fontSize: 22,
        fontWeight: 700,
        //textTransform: 'uppercase',
        textAlign: 'left',
        margin: 0,
        paddingTop: 5
    },
    profileListItemValue: {
        color: '#9da0a7',
        fontSize: 15,
        textAlign: 'left',
        marginTop: -3,
        padding: 0
    },
   
}))

const infoItems={
  address:"Test Address",
  email :"abc@abc.com",
  phone:"+123456789"
}



function profile() {
    const classes = styles();
    return (
        <Paper className={classes.container}>
            <Grid>
                <Grid item  container direction="column" spacing={0}>
                    <Grid item className={classes.profile} container spacing={0}>
                            <Grid item lg={6} xs={12}>
                                <img src="profile.jpg"
                                    alt="profile"
                                    className={classes.profilePhoto}/>
                            </Grid>
                    {/* <Grid item  xs={1} />                        */}
                            <Grid item lg={6} xs={12} className={classes.profileInfo} >
                                <div><Bubble content="Hello"/></div>
                                <h1 className={classes.profileTitle}>
                                    <span className={classes.profileTitleStart}>I'm</span> Hugo Researcher
                                </h1>
                                <h3 className={classes.profileListItem}>Address : <span className={classes.profileListItemValue}>{infoItems.address}</span> </h3>
                                <h3 className={classes.profileListItem}>Email : <span className={classes.profileListItemValue}>{infoItems.email}</span> </h3>
                                <h3 className={classes.profileListItem}>Phone : <span className={classes.profileListItemValue}>{infoItems.phone}</span> </h3>
                                <h2 className={classes.profilePosition}>Full Stack Developer</h2>
                                
                               <SocialIcons/>
                            </Grid>
                        </Grid>
                    </Grid>
                    
                </Grid>
            </Paper>
    )
}

export default profile
