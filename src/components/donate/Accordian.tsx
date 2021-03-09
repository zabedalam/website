import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        marginLeft: '20px' as const,
        marginTop: '30px' as const,
    },
    heading: {
        fontSize: theme.typography.pxToRem(18),
        flexBasis: '33.33%',
        flexShrink: 0,
        fontWeight: 700,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));

function Accordions() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState();

    const handleChange = (panel: any) => (isExpanded: any) => {
        setExpanded(isExpanded ? panel : false);
    };

    const data = [
        {
            id: 'q1',
            heading: 'Can I send Check?',
            details: `Yes, please send checks to the following address:
      DIY,Copenhagen,Denmark
      
      
      Checks should be made payable to DIY,
       and you should enclose a letter with your name, address, 
       phone number, email address, and donation amount—we want 
       to know who you are so we can show our gratitude for your support!`,
        },
        {
            id: 'q2',
            heading: 'Can I donate stock or make donation by wire transfer?',
            details: `Yes, we accept donations of stock and donations by domestic 
      and international wire transfer. Please email donate@diy.org for
       our wire and stock transfer information.`,
        },
        {
            id: 'q3',
            heading: 'Can I donate stock or make donation by wire transfer?',
            details: `Yes, we accept donations of stock and donations by domestic 
        and international wire transfer. Please email donate@diy.org for
         our wire and stock transfer information.`,
        },
        {
            id: 'q4',
            heading: 'Can I donate stock or make donation by wire transfer?',
            details: `Yes, we accept donations of stock and donations by domestic 
        and international wire transfer. Please email donate@diy.org for
         our wire and stock transfer information.`,
        },
        {
            id: 'q5',
            heading: 'Can I donate stock or make donation by wire transfer?',
            details: `Yes, we accept donations of stock and donations by domestic 
        and international wire transfer. Please email donate@diy.org for
         our wire and stock transfer information.`,
        },
    ];

    return (
        <div className={classes.root}>
            <div>
                <Typography component="h1" variant="h5">
                    Frequently Asked Questions
                </Typography>
            </div>
            {data.map((accordion) => {
                const { id, heading, details } = accordion;
                return (
                    <Accordion expanded={expanded === id} key={id} onChange={handleChange(id)}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography className={classes.heading}>{heading}</Typography>
                            <Typography className={classes.secondaryHeading}></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>{details}</Typography>
                        </AccordionDetails>
                    </Accordion>
                );
            })}
        </div>
    );
}
export default Accordions;
