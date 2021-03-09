import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, makeStyles, Avatar, Box } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const useStyles = makeStyles((theme) => ({
    avatar: {
        width: '100%',
        height: '256px',
        marginBottom: theme.spacing(2),
    },
}));

export default function Contributor(props: any) {
    const { id, name, img, desc } = props.contributor;
    console.log(props.contributor);
    const classes = useStyles();
    return (
        <div>
            <Avatar alt="" variant="rounded" src={img} className={classes.avatar} />
            <Box display="flex" justifyContent="space-between">
                <Typography variant="h6" component="h6" gutterBottom={true}>
                    {name}
                </Typography>
                <Link to={`/profile/${id}`}>
                    <ArrowRightAltIcon />
                </Link>
            </Box>
            <Typography variant="body1" color="textSecondary" component="span">
                {desc}
            </Typography>
        </div>
    );
}
