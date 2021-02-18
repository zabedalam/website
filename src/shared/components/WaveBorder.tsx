import { withStyles } from '@material-ui/core';

const styles = {
    waves: {
        position: 'relative' as const,
        width: '100%' as const,
        marginBottom: -7 as const,
        height: '7vw' as const,
        minHeight: '7vw' as const,
    },
    '@keyframes moveForever': {
        from: { transform: 'translate3d(-90px, 0, 0)' },
        to: { transform: 'translate3d(85px, 0, 0)' },
    },
    parallax: {
        '& > use': {
            animation: '$moveForever 4s cubic-bezier(0.62, 0.5, 0.38, 0.5) infinite',
            animationDelay: (props: any) => `-${props.animationNegativeDelay}s`,
        },
    },
};

/**
 *  https://codepen.io/csspoints/pen/WNeOEqd
 */
function WaveBorder(props: any) {
    const id = String(Math.random());
    const { className, lowerColor, upperColor, classes, animationNegativeDelay, ...rest } = props;
    return (
        <div className={className} style={{ background: upperColor }} {...rest}>
            <svg
                className={classes.waves}
                xmlns="http://www.w3.org/2000/svg"
                xlinkHref="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28"
                preserveAspectRatio="none"
                shapeRendering="auto"
            >
                <defs>
                    <path id={id} d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g className={classes.parallax}>
                    <use href={`#${id}`} x="48" y="0" fill={lowerColor} />
                </g>
            </svg>
        </div>
    );
}

export default withStyles(styles)(WaveBorder);
