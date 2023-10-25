import { Fragment, React, useContext, useState } from 'react';
import './product.css';
// import { Carousel } from 'react-responsive-carousel';
import { MagnifierContainer, MagnifierPreview, MagnifierZoom, SideBySideMagnifier } from "@vanyapr/react-image-magnifiers";
import Carousel from '../carousel/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Accordon from '../Accordon/Accordon';
import sizeImgxs from '../../assets/xs.png'
import sizeImgs from '../../assets/s.png'
import sizeImgm from '../../assets/m.png'
import sizeImgl from '../../assets/l.png'
import sizeImgxl from '../../assets/xl.png'
import sizeImg1x from '../../assets/1x.png'
import sizeImg2x from '../../assets/2x.png'
import sizeImg3x from '../../assets/3x.png'
const Product = (props) => {

    const [state, setState] = useState({
        bottom: false,
    });
    
    const [className1, setClassName1] = useState('size-selector size-selected');
    const [className2, setClassName2] = useState('size-selector');
    const [className3, setClassName3] = useState('size-selector');
    const [className4, setClassName4] = useState('size-selector');
    const [className5, setClassName5] = useState('size-selector');
    const [className6, setClassName6] = useState('size-selector');
    const [className7, setClassName7] = useState('size-selector');
    const [className8, setClassName8] = useState('size-selector');
    const [sizeGuide, setSizeGuide] = useState('XS (0-2)');
    const [productCount, setProductCount] = useState(1);
    const [sizeImg, setSizeImg] = useState(sizeImgxs)

    const handleCounter = (status) => {
        if (status == 'minus') {
            setProductCount(productCount - 1);
            if (productCount <= 1) {
                setProductCount(1);
            }
        }
        if (status == 'plus') {
            setProductCount(productCount + 1);
        }
    }

    const selectSize = (ele) => {
        if (ele === 'XS') {
            setClassName1('size-selector size-selected');
            setClassName2('size-selector');
            setClassName3('size-selector');
            setClassName4('size-selector');
            setClassName5('size-selector');
            setClassName6('size-selector');
            setClassName7('size-selector');
            setClassName8('size-selector');
            setSizeGuide('XS (0-2)');
            setSizeImg(sizeImgxs);

        }
        if (ele === 'S') {
            setClassName1('size-selector');
            setClassName2('size-selector size-selected');
            setClassName3('size-selector');
            setClassName4('size-selector');
            setClassName5('size-selector');
            setClassName6('size-selector');
            setClassName7('size-selector');
            setClassName8('size-selector');
            setSizeGuide('S (4-6)');
            setSizeImg(sizeImgs);

        }

        if (ele === 'M') {
            console.log("m")
            setClassName1('size-selector');
            setClassName2('size-selector');
            setClassName3('size-selector size-selected');
            setClassName4('size-selector');
            setClassName5('size-selector');
            setClassName6('size-selector');
            setClassName7('size-selector');
            setClassName8('size-selector');
            setSizeGuide('M (8-10)');
            setSizeImg(sizeImgm);

        }
        if (ele === 'L') {
            setClassName1('size-selector');
            setClassName2('size-selector');
            setClassName3('size-selector');
            setClassName4('size-selector size-selected');
            setClassName5('size-selector');
            setClassName6('size-selector');
            setClassName7('size-selector');
            setClassName8('size-selector');
            setSizeGuide('L (12-14)');
            setSizeImg(sizeImgl);
        }
        if (ele === 'XL') {
            setClassName1('size-selector');
            setClassName2('size-selector');
            setClassName3('size-selector');
            setClassName4('size-selector');
            setClassName5('size-selector size-selected');
            setClassName6('size-selector');
            setClassName7('size-selector');
            setClassName8('size-selector');
            setSizeGuide('XL (14-16)');
            setSizeImg(sizeImgxl);
        }
        if (ele === '1X') {
            setClassName1('size-selector');
            setClassName2('size-selector');
            setClassName3('size-selector');
            setClassName4('size-selector');
            setClassName5('size-selector');
            setClassName6('size-selector size-selected');
            setClassName7('size-selector');
            setClassName8('size-selector');
            setSizeGuide('1X (16-18)');
            setSizeImg(sizeImg1x);
        }
        if (ele === '2X') {
            setClassName1('size-selector');
            setClassName2('size-selector');
            setClassName3('size-selector');
            setClassName4('size-selector');
            setClassName5('size-selector');
            setClassName6('size-selector');
            setClassName7('size-selector size-selected');
            setClassName8('size-selector');
            setSizeGuide('2X (18-20)');
            setSizeImg(sizeImg2x);

        }
        if (ele === '3X') {
            setClassName1('size-selector');
            setClassName2('size-selector');
            setClassName3('size-selector');
            setClassName4('size-selector');
            setClassName5('size-selector');
            setClassName6('size-selector');
            setClassName7('size-selector');
            setClassName8('size-selector size-selected');
            setSizeGuide('3X (20-22)');
            setSizeImg(sizeImg3x);
        }

    }


    const openSizeDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    const list = (anchor) => {
        <div>
            test
        </div>
    }

    return (
        <div className='main-product'>
            <div className='product-photos'>
                <Carousel />
            </div>
            <div className='product-detail'>
                <div className='product-wrap'>
                    <div className='product-name-price'>
                        <div className='product-namee'>
                            Emi Pink Bow Mini Dress
                        </div>
                        <div className={`product-price ${props.theme?'':'theme-halo'}`}>
                            $46.00
                        </div>
                    </div>
                    <div className='product-size-quantity'>
                        <div className='product-size'>
                            <div className='product-size-name'>
                                Select Size
                            </div>
                            <div className='product-size-bar'>
                                {/* {sizeCart} */}
                                <div onClick={() => selectSize('XS')} className={className1}>XS</div>
                                <div onClick={() => selectSize('S')} className={className2}>S</div>
                                <div onClick={() => selectSize('M')} className={className3}>M</div>
                                <div onClick={() => selectSize('L')} className={className4}>L</div>
                                <div onClick={() => selectSize('XL')} className={className5}>XL</div>
                                <div onClick={() => selectSize('1X')} className={className6}>1X</div>
                                <div onClick={() => selectSize('2X')} className={className7}>2X</div>
                                <div onClick={() => selectSize('3X')} className={className8}>3X</div>

                            </div>
                        </div>
                        <div className='product-quantity'>
                            <div className='product-counter'>
                                <FontAwesomeIcon className='productCounter' onClick={() => handleCounter('minus')} icon={faMinus} />
                                <div className='product-counter-value'>{productCount}</div>
                                <FontAwesomeIcon className='productCounter' onClick={() => handleCounter('plus')} icon={faPlus} />
                            </div>
                        </div>
                    </div>
                    <div className={`product-sizeguide ${props.theme?'':'theme-halo'}`}>
                        {['bottom'].map((anchor) => (
                            <Fragment key={anchor}>
                                Need help with sizing? View our <a onClick={openSizeDrawer(anchor, true)} className='size-guide'> Size Guide</a>
                                <Drawer
                                    anchor={anchor}
                                    open={state[anchor]}
                                    onClose={openSizeDrawer(anchor, false)}
                                >
                                    <div className='main-sizeguide'>
                                        <div className='sizeguide-top'>
                                            <div className='top-cross'>
                                                <FontAwesomeIcon className='topp-cross' icon={faXmark} onClick={openSizeDrawer(anchor, false)} />
                                            </div>
                                            <div className='top-title'>Size Guide</div>
                                            <div className='top-cross'>

                                            </div>
                                        </div>
                                        <div className='sizeguide-middle'>
                                            <img className='size-img' src={sizeImg}></img>
                                        </div>
                                        <div className='sizeguide-bottom'>
                                            <div className='sizeguide-select'>
                                                <div className='select-text'>
                                                    Select Your Size
                                                </div>
                                                <div className='select-dim'>
                                                    {sizeGuide}
                                                </div>
                                            </div>
                                            <div className='sizeguide-chart'>
                                                <div onClick={() => selectSize('XS')} className={className1}>XS</div>
                                                <div onClick={() => selectSize('S')} className={className2}>S</div>
                                                <div onClick={() => selectSize('M')} className={className3}>M</div>
                                                <div onClick={() => selectSize('L')} className={className4}>L</div>
                                                <div onClick={() => selectSize('XL')} className={className5}>XL</div>
                                                <div onClick={() => selectSize('1X')} className={className6}>1X</div>
                                                <div onClick={() => selectSize('2X')} className={className7}>2X</div>
                                                <div onClick={() => selectSize('3X')} className={className8}>3X</div>
                                            </div>
                                        </div>
                                    </div>
                                </Drawer>
                            </Fragment>
                        ))}
                    </div>
                    <div className='product-addtocart'>
                        <div className='addtocart-btn'>
                            Add to Cart
                        </div>
                    </div>

                </div>
                <div className='product-accordon'>
                    <Accordon />
                </div>
            </div>
        </div>
    );
}
export default Product;
