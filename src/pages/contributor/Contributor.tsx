import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 300,
        boxShadow: theme.shadows[5],
        marginTop: theme.spacing(3),
        padding: 20,
    },
    media: {
        height: 300,
        width: '100%',
    },
}));

export default function Contributor(props: any) {
    const { id, name, img, desc } = props.contributor;
    console.log(props.contributor);
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia className={classes.media} image={img} title={name} />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {desc}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link to={`/profile/${id}`}>Profile</Link>
                </CardActions>
            </Card>
        </div>
    );
}
