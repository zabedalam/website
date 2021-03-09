import { Button, withStyles, withWidth } from '@material-ui/core';

const styles = (theme: any) => ({
    button: {
        background: '#1865f2' as const,
        color: theme.palette.common.white,
    },
});

const AddPayButton = (props: any) => {
    const { classes } = props;
    return (
        <Button className={classes.button} onClick={props.addPay} disableElevation>
            Give by credit card is just
        </Button>
    );
};

export default withWidth()(withStyles(styles, { withTheme: true })(AddPayButton));
