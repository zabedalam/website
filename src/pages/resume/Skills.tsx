import { makeStyles, withStyles,lighten, Typography, Grid } from "@material-ui/core";
import LinearProgress from '@material-ui/core/LinearProgress';
import SectionTitle from "../../components/common/SectionTitle";

const BorderLinearProgress = withStyles({
    root: {
      height: 10,
      width: 600,
      backgroundColor: lighten('#ff6c5c', 0.5),
    },
    bar: {
      borderRadius: 20,
      backgroundColor: '#ff6c5c',
    },
  })(LinearProgress);
const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
      container: {
        alignItems: 'stretch',
        justifyItems: 'center',
        [theme.breakpoints.down('md')]: {
            alignItems: 'stretch',
            justifyItems: 'space-evenly',
        },
      },
        containerGrid: {
          paddingLeft:'4%',
          marginBottom:20
      },
      margin: {
        marginBottom: theme.spacing(2),
      },
  }));
  
  const skills = [
    {
      id:1,
      name: "HTML",
      value:80        
    },
    {
      id:2,
      name: "CSS",
      value:70        
    },
    {
      id:3,
      name: "Javascript",     
      value:85        
    },
    {
      id:4,
      name: "ReactJs",     
      value:75        
    },
    
  ];
export default function Skills() {
    const classes = useStyles();
    return (
      <Grid
                container
                item
                xs={12}
                spacing={0}
                className={classes.container}
                direction="column"
                justify="center">
                <SectionTitle title='Skills'/>
                <Grid>
                {skills.map((skill) => (
              <Grid 
                item
                className={classes.containerGrid}
                xs={12}
                md={12}                
                key={skill.id}
              >
                  
                        <Typography variant="h6">
                         {skill.name}
                        </Typography>
                        <BorderLinearProgress className={classes.margin} variant="determinate"  value={skill.value} /> 
                
              </Grid>
            ))}
          </Grid>
        </Grid>
        
    )
}
