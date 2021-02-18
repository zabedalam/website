import { makeStyles } from '@material-ui/core'



const styles=makeStyles((theme)=>({
    container: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 700,
        lineHeight: 1.1,
        display: 'inline-block',
        padding: '7px 12px',
        textTransform: 'uppercase',
        position: 'relative',
        backgroundColor: theme.palette.secondary.main,
        borderLeftColor: theme.palette.secondary.main,
        
        '&:before': {
            content: '""',
            width: 0,
            height: 0,
            top: '100%',
            left: 5,
            display: 'block',
            position: 'absolute',
            borderStyle: 'solid',
            borderWidth: '0 0 8px 8px',
            borderColor: 'transparent',
            borderLeftColor: theme.palette.secondary.main,
        }
        
    },
}))

type bubbleProps = {
    content: string,
  }
export default function Bubble({content}:bubbleProps) {
    const classes=styles();
    return (
        <span className={classes.container}>{content}</span>
    )
}
