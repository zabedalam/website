import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography,makeStyles } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
   
    
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
    
}));


export default function Project(props:any) {
    const { name,image,desc } = props;
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={image}
                        title={name}
                        />
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
                        <Button size="small" color="primary">
                        Share
                        </Button>
                        <Button size="small" color="primary">
                        Learn More
                        </Button>
                    </CardActions>
                    </Card>
            
        </div>
    )
}
