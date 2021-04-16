import { Grid, Typography, isWidthUp, withWidth, withStyles, Box } from '@material-ui/core';
import classNames from 'classnames';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import SecurityIcon from '@material-ui/icons/Security';
import SettingsIcon from '@material-ui/icons/Settings';
import AssessmentIcon from '@material-ui/icons/Assessment';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import CloudIcon from '@material-ui/icons/Cloud';

import CalculateSpacing from './CalculateSpacing';
import FeatureCard from './FeatureCard';

const styles = (theme: any) => ({
    featureStyle: {
        padding: theme.spacing(15),
    },

    wrapper: {
        marginLeft: theme.spacing(3),
    },
});

const iconSize = 70;

const features = [
    {
        color: '#3f51b5',
        headline: '24/7 IT Support',
        text: 'World class Service Desk with 85% of tickets solved on first response.',
        icon: <ContactPhoneIcon style={{ fontSize: iconSize }} />,
        mdDelay: '0',
        smDelay: '0',
    },
    {
        color: '#3f51b5',
        headline: 'Strategic IT Partner',
        text: 'IT strategy and roadmap development using industry leading consultancy processes.',
        icon: <AssessmentIcon style={{ fontSize: iconSize }} />,
        mdDelay: '200',
        smDelay: '200',
    },
    {
        color: '#3f51b5',
        headline: 'Highly accredited',
        text: 'ISO 27001 and Cyber Essentials plus certified.',
        icon: <SettingsIcon style={{ fontSize: iconSize }} />,
        mdDelay: '400',
        smDelay: '0',
    },
    {
        color: '#3f51b5',
        headline: 'Cyber Security',
        text: 'Next generation Cyber Security managed services delivered by our 24/7 Security Operations Centre.',
        icon: <SecurityIcon style={{ fontSize: iconSize }} />,
        mdDelay: '0',
        smDelay: '200',
    },
    {
        color: '#3f51b5',
        headline: 'Office 365 and Azure',
        text: 'Experts in driving businesses to the Modern Workplace.',
        icon: <CloudIcon style={{ fontSize: iconSize }} />,
        mdDelay: '200',
        smDelay: '0',
    },

    {
        color: '#3f51b5',
        headline: 'Digital Transformation',
        text: 'Delivering competitive advantage through the use of technology.',
        icon: <BeenhereIcon style={{ fontSize: iconSize }} />,
        mdDelay: '0',
        smDelay: '0',
    },
];

function FeatureSection(props: any) {
    const { width, classes } = props;
    return (
        <div style={{ backgroundColor: '#FFFFFF' }}>
            <div className="container-fluid lg-p-top">
                <Typography variant="h3" align="center" className={classes.featureStyle}>
                    <Box color="primary.main" fontStyle="italic">
                        Why work with us
                    </Box>
                </Typography>
                <div className={classNames('container-fluid', classes.wrapper)}>
                    <Grid container spacing={CalculateSpacing(width)}>
                        {features.map((element) => (
                            <Grid
                                item
                                xs={6}
                                md={4}
                                data-aos="zoom-in-up"
                                data-aos-delay={isWidthUp('md', width) ? element.mdDelay : element.smDelay}
                                key={element.headline}
                            >
                                <FeatureCard
                                    Icon={element.icon}
                                    color={element.color}
                                    headline={element.headline}
                                    text={element.text}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>
        </div>
    );
}

export default withWidth()(withStyles(styles, { withTheme: true })(FeatureSection));
