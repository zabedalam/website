import { Grid, makeStyles} from '@material-ui/core';
import SectionTitle from "../../components/common/SectionTitle";
import Project from "./Project";

const useStyles = makeStyles(theme => ({
   
      container: {
        alignItems: 'stretch',
        justifyItems: 'center',
        [theme.breakpoints.down('md')]: {
            alignItems: 'stretch',
            justifyItems: 'space-evenly',
        },
        marginRight:20
      },
      root: {
        maxWidth: 345,
      },
      media: {
        height: 140,
      },
      containerGrid: {
        paddingLeft:'4%',
        marginBottom:20
    },
    itemImage: {
        transition: 'opacity 1s, transform 1s',
        
        '&:hover': {
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.19), 0 6px 10px rgba(0, 0, 0, 0.23)',
        }
    },
        
  }));

  const projects = [
    {
      id:1,
      name: "Projects1",
      desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe debitis dolores nostrum qui architecto! Explicabo facilis dignissimos quo dolores aliquam.",
      img:"p1.png"        
    },
    {
        id:2,
        name: "Projects2",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe debitis dolores nostrum qui architecto! Explicabo facilis dignissimos quo dolores aliquam.",
        img:"p2.png"         
    },
    {
        id:3,
        name: "Projects3",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe debitis dolores nostrum qui architecto! Explicabo facilis dignissimos quo dolores aliquam.",
        img:"p3.png"         
    },
    
  ];

export default function Projects() {
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
                <SectionTitle title='Projects'/>
        <Grid container className={classes.containerGrid}>
        {projects.map((project) => (
              <Grid
                item
                xs={6}
                md={4}               
                key={project.id}
              >
                <Project
                  name={project.name}
                  image={project.img}
                  desc={project.desc}
                />
              </Grid>
            ))}
          </Grid>

        </Grid>
    )
}
