import { makeStyles } from "@material-ui/core"

const styles=makeStyles((theme)=>({
    sectionTitle: {
        color: '#3d4451',
        fontSize: 34,
        lineHeight: 1.2,
        fontWeight: 600,
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 30,
      },
}))

type titleProps = {
    title: string,
  }

export default function SectionTitle({title}:titleProps) {
    const classes=styles();
    return (
        <span className={classes.sectionTitle}>{title}</span>
    )
}
