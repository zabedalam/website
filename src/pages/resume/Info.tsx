
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core';


const styles = makeStyles((theme) => ({
    container: {
        textAlign: 'center',
    },
    info: {
        color: '#878787',
        fontSize: 20,
        fontWeight: 500,
        lineHeight: 1.8,
        textAlign: 'center',
        marginBottom: 30
    },
    button: {
        margin: theme.spacing(4),
        padding: 15,
        paddingLeft: 30,
        paddingRight: 30,
        color: '#525252',
        textTransform: 'uppercase'
    }
}))

const content = "Hello! I am Hugo Researcher. Full Stack Developer specializing in web, desktop, mobile design and development, I maintain a healthy balance between functionality and visual impact in all my work. I believe every piece of design can be a work of art. ";

export default function info() {
    const classes = styles();
    return (
        <div className={classes.container}>
        <Button variant="outlined"
                className={classes.button}
               // onClick={this._openTab.bind(this, `${process.env.PUBLIC_URL}/Durgaprasad_Budhwani.pdf`)}
         >
            Download Resume
        </Button>
        <p className={classes.info}>
            {content}
        </p>
    </div>
    )
}


