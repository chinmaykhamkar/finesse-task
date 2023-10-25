import React, { Fragment } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShippingTable from '../ShippingTable/ShippingTable';
import SizeTable from '../SizeTable/SizeTable';

const Accordon = () => {
    const [expanded, setExpanded] = React.useState('panel1');
    const [icon1, setIcon1] = React.useState(<FontAwesomeIcon icon={faMinus} />);
    const [icon2, setIcon2] = React.useState(<FontAwesomeIcon icon={faPlus} />);
    const [icon3, setIcon3] = React.useState(<FontAwesomeIcon icon={faPlus} />);
    const [icon4, setIcon4] = React.useState(<FontAwesomeIcon icon={faPlus} />);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <div className='accordon-div'>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className='accordon-title' sx={{ width: '33%', flexShrink: 0 }}>
                        Description
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className='accordon-text'>
                        Pink, pretty, and precious - this pink bow mini dress will have everyone falling for you 💗
                        Made from poplin fabric and complete with a fit and flare shape, bow details, shirring, and
                        center back invisible zipper 🌟
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography className='accordon-title' sx={{ width: '33%', flexShrink: 0 }}>Model</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className='accordon-text'>
                        Casey is 5'11" and is wearing a size S
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography className='accordon-title' sx={{ width: '33%', flexShrink: 0 }}>Material</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className='accordon-text'>
                        100% Cotton
                        <br></br>
                        Lining: 100% Polyester
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography className='accordon-title' sx={{ width: '33%', flexShrink: 0 }}>
                        Shipping and Returns
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className='shipping-info'>
                        Shipping Info
                    </Typography>
                    <ShippingTable />
                    <br></br>
                    <Typography className='accordon-text'>
                        Subject to availability*
                    </Typography>
                    <Typography className='accordon-text'>
                        Express shipping is currently not available for P.O. addresses
                    </Typography>
                    <br></br>
                    <Typography className='shipping-info'>
                        Free Return & Exchange Shipping
                    </Typography>
                    <Typography className='accordon-text'>
                        Returns and exchanges are easy and are accepted within 45 days of order delivery
                        🙂 We also offer free shipping for returns and exchanges!
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel5bh-content"
                    id="panel5bh-header"
                >
                    <Typography className='accordon-title' sx={{ width: '33%', flexShrink: 0 }}>Size Guide</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <SizeTable />
                    <br></br>
                    <Typography className='accordon-text'>
                        Returns and exchanges are easy and are accepted within 45 days of order delivery
                        🙂 We also offer free shipping for returns and exchanges!
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default Accordon;