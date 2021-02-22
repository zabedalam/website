import { Theme, makeStyles } from '@material-ui/core';

export const headSectionStyles = makeStyles((theme: Theme) => ({
    extraLargeButtonLabel: {
        fontSize: theme.typography.body1.fontSize,
        [theme.breakpoints.up('sm')]: {
            fontSize: theme.typography.h6.fontSize,
        },
    },
    extraLargeButton: {
        paddingTop: theme.spacing(1.5),
        paddingBottom: theme.spacing(1.5),
        [theme.breakpoints.up('xs')]: {
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1),
        },
        [theme.breakpoints.up('lg')]: {
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2),
        },
    },
    card: {
        boxShadow: theme.shadows[4],
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('xs')]: {
            paddingTop: theme.spacing(3),
            paddingBottom: theme.spacing(3),
        },
        [theme.breakpoints.up('xs')]: {
            paddingTop: theme.spacing(5),
            paddingBottom: theme.spacing(5),
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
        },
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(5),
            paddingBottom: theme.spacing(5),
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
        },
        [theme.breakpoints.up('md')]: {
            paddingTop: theme.spacing(5.5),
            paddingBottom: theme.spacing(5.5),
            paddingLeft: theme.spacing(5),
            paddingRight: theme.spacing(5),
        },
        [theme.breakpoints.up('lg')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
            paddingLeft: theme.spacing(6),
            paddingRight: theme.spacing(6),
        },
        [theme.breakpoints.down('lg')]: {
            width: 'auto' as const,
        },
    },
    wrapper: {
        position: 'relative' as const,
        backgroundColor: theme.palette.primary.main,
        paddingBottom: theme.spacing(2),
    },
    image: {
        maxWidth: '100%' as const,
        verticalAlign: 'middle' as const,
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[4],
    },
    container: {
        paddingTop: theme.spacing(15),
        marginBottom: theme.spacing(12),
        [theme.breakpoints.down('md')]: {
            marginBottom: theme.spacing(9),
        },
        [theme.breakpoints.down('sm')]: {
            marginBottom: theme.spacing(6),
        },
        [theme.breakpoints.down('sm')]: {
            marginBottom: theme.spacing(3),
        },
    },
    containerFix: {
        [theme.breakpoints.up('md')]: {
            maxWidth: 'none !important' as const,
        },
    },
    waveBorder: {
        paddingTop: theme.spacing(4),
    },
}));
