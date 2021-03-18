import HeadImage from '../../assets/images/bannerImage.jpg';
import classNames from 'classnames';
import { Grid, Typography, Card, Button, Hidden, Box, isWidthUp, Theme, useTheme } from '@material-ui/core';
import WaveBorder from '../../shared/components/WaveBorder';
import ZoomImage from '../../shared/components/ZoomImage';
import { headSectionStyles } from './headSectionStyles';

function HeadSection(props: any) {
    const { width } = props;
    const theme = useTheme<Theme>();
    const classes = headSectionStyles(theme);
    return (
        <>
            <div className={classNames('lg-p-top', classes.wrapper)}>
                <div className={classNames('container-fluid', classes.container)}>
                    <Box display="flex" justifyContent="center" className="row">
                        <Card className={classes.card} data-aos-delay="200" data-aos="zoom-in">
                            <div className={classNames(classes.containerFix, 'container')}>
                                <Box display="flex" justifyContent="space-between" className="row">
                                    <Grid item xs={12} md={5}>
                                        <Box
                                            display="flex"
                                            flexDirection="column"
                                            justifyContent="space-between"
                                            height="100%"
                                        >
                                            <Box mb={4}>
                                                <Typography variant={isWidthUp('lg', width) ? 'h3' : 'h4'}>
                                                    Free Template for building an SaaS app using Material-UI
                                                </Typography>
                                            </Box>
                                            <div>
                                                <Box mb={2}>
                                                    <Typography
                                                        variant={isWidthUp('lg', width) ? 'h6' : 'body1'}
                                                        color="textSecondary"
                                                    >
                                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                                        diam nonumy eirmod tempor invidunt
                                                    </Typography>
                                                </Box>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    fullWidth
                                                    className={classes.extraLargeButton}
                                                    classes={{ label: classes.extraLargeButtonLabel }}
                                                    href="https://github.com/opendiy/website"
                                                >
                                                    Download from GitHub
                                                </Button>
                                            </div>
                                        </Box>
                                    </Grid>
                                    <Hidden smDown>
                                        <Grid item md={6}>
                                            <ZoomImage src={HeadImage} className={classes.image} alt="header example" />
                                        </Grid>
                                    </Hidden>
                                </Box>
                            </div>
                        </Card>
                    </Box>
                </div>
            </div>
            <WaveBorder
                upperColor={theme.palette.primary.main}
                lowerColor="#FFFFFF"
                className={classes.waveBorder}
                animationNegativeDelay={2}
            />
        </>
    );
}

export default HeadSection;
