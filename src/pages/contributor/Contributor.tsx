import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Typography, makeStyles, Avatar, Box, Button } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './Contributor.css';

const useStyles = makeStyles((theme) => ({
    snip: {
        position: 'relative',
        overflow: 'hidden',
        margin: '10px',
        minWidth: '230px',
        maxWidth: '315px',
        width: '100%',
    },
    avatar: {
        width: theme.spacing(12),
        height: theme.spacing(12),
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: theme.spacing(2),
    },
}));

export default function Contributor(props: any) {
    const { id, name, img, desc } = props.contributor;
    console.log(props.contributor);
    const classes = useStyles();
    const history = useHistory();
    const profileDetails = (id: any) => {
        const url = `/profile/${id}`;
        history.push(url);
    };

    return (
        <figure className="snip1336">
            <img
                src="https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1269&q=80"
                alt="sample87"
            />
            <figcaption>
                <Avatar alt="" src={img} className={classes.avatar} />
                <h2>{name}</h2>
                <p>{desc}</p>
                <Button
                    variant="contained"
                    color="primary"
                    endIcon={<ArrowForwardIosIcon />}
                    onClick={() => profileDetails(id)}
                >
                    Explore
                </Button>
            </figcaption>
        </figure>
    );
}
