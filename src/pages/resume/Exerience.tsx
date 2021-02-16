import { Grid, makeStyles, Typography } from '@material-ui/core';
import SectionTitle from '../../components/common/SectionTitle';


const styles=makeStyles((theme)=>({
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
    title: {
        color: '#ad1457',
        fontSize: 35,
        fontWeight: 500,
        lineHeight: 1.8,        
        marginBottom: 10
    },
    company: {
        color:  '#878787',
        fontSize: 30,
        fontWeight: 400,
        lineHeight: 1.2,        
        marginBottom: 10
    },
    date: {
        color:  '#878787',
        fontSize: 30,
        fontWeight: 400,
        lineHeight: 1.2,        
        marginBottom: 10
    },
    info: {
        color: '#878787',
        fontSize: 20,
        fontWeight: 500,
        lineHeight: 1.8,
        marginBottom: 30
    }
}))
const jobs = [
    {
      title: "Sr .Software Engineer",
      company: "ABC Company",
      date:
        "From 2020 - Now",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi doloribus hic ducimus omnis fuga quis corrupti minima, voluptates quisquam illum tenetur quam dolor voluptatum repellat vero culpa asperiores maiores debitis."
      
    },
    {
      title: "Software Engineer",
      company: "BCE Company",
      date:
        "From 2018 - TO 2020",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi doloribus hic ducimus omnis fuga quis corrupti minima, voluptates quisquam illum tenetur quam dolor voluptatum repellat vero culpa asperiores maiores debitis."
      
    },
    {
      title: "Associate Software Engineer",
      company: "FDG Company",
      date:
        "From 2016 - TO 2020",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi doloribus hic ducimus omnis fuga quis corrupti minima, voluptates quisquam illum tenetur quam dolor voluptatum repellat vero culpa asperiores maiores debitis."
      
    },
   
  ];
export default function Exerience() {
     const classes=styles();
    return (
        <Grid
                container
                item
                xs={12}
                spacing={0}
                className={classes.container}
                direction="column"
                justify="center">
                <SectionTitle title='Work Experience'/>
            <Grid>
            {jobs.map((job) => (
              <Grid 
                item
                className={classes.containerGrid}
                xs={12}
                md={12}                
                key={job.company}
              >
                  
                        <Typography className={classes.title} gutterBottom variant="h4">
                         {job.title}
                        </Typography>
                        <Typography  className={classes.company} variant="h5">
                         {job.company}
                        </Typography>
                        <Typography className={classes.date} variant="h6">
                         {job.date}
                        </Typography>
                       
                        <p className={classes.info}>
                        {job.description}
                        </p>
                    
                
              </Grid>
            ))}
          </Grid>
        </Grid>
        
    )
}
