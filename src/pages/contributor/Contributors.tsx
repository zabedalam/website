import React from 'react';

import data from '../../components/dummy_data/data.json';
import { Box, Container, Grid, Typography } from '@material-ui/core';

import Contributor from './Contributor';

const contributors = data.Contributor;

export default function Contributors() {
    return (
        <section>
            <Container maxWidth="lg">
                <Box py={8}>
                    <Box mb={9} textAlign="center">
                        <Container maxWidth="sm">
                            <Typography variant="overline" color="textSecondary" paragraph={true}>
                                LOREM IPSUM
                            </Typography>
                            <Typography variant="h3" component="h2" gutterBottom={true}>
                                <Typography variant="h3" component="span" color="primary">
                                    Donec lacinia{' '}
                                </Typography>
                                <Typography variant="h3" component="span">
                                    turpis non sapien lobortis pretium
                                </Typography>
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary" paragraph={true}>
                                Integer feugiat massa sapien, vitae tristique metus suscipit nec.
                            </Typography>
                        </Container>
                    </Box>
                    <Grid container spacing={6}>
                        {contributors.map((contributor) => (
                            <Grid item xs={6} sm={6} md={4} key={contributor.id}>
                                <Contributor contributor={contributor} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </section>
    );
}
