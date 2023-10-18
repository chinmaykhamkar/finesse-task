import { Fragment, useState } from 'react'
import './navBar.css'
import logo from '../../assets/logo.jpg'
import productImg from '../../assets/img1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCartShopping, faBars, faXmark, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
const NavBar = () => {
    const [searchExpand, setSearchExpand] = useState(false);
    const [productNav, setProductNav] = useState(false);
    const [collectionsNav, setCollectionsNav] = useState(false);
    const [productDropdown, setProductDropdown] = useState(false);
    const [collectionsDropdown, setCollectionsDropdown] = useState(false);
    const [ocassionsDropdown, setOcassionsDropdown] = useState(false);
    const [categoryDropdown, setcatergoryDropdown] = useState(false);

    const [state, setState] = useState({
        left: false,
    });


    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
        if (open == false) {
            if (productDropdown) {
                setProductDropdown(!productDropdown);
            }
            if (collectionsDropdown) {
                setCollectionsDropdown(!collectionsDropdown);
            }
            if (ocassionsDropdown) {
                setOcassionsDropdown(!ocassionsDropdown);
            }
            if (categoryDropdown) {
                setcatergoryDropdown(!categoryDropdown);
            }
        }
    };

    const toggleProductDropDown = () => {
        setProductDropdown(!productDropdown);
    }

    const toggleCollectionsDropDown = () => {
        setCollectionsDropdown(!collectionsDropdown);
    }
    const toggleOcassionsDropDown = () => {
        setOcassionsDropdown(!ocassionsDropdown);
    }

    const toggleCategoryDropDown = () => {
        setcatergoryDropdown(!categoryDropdown);
    }




    const list = (anchor) => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            //   onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className='drawer-cross'>
                <FontAwesomeIcon icon={faXmark} onClick={toggleDrawer(anchor, false)} />
            </div>
            <div className='drawer-list'>
                Home
            </div>
            <div className='drawer-list'>
                <div className='drawer-list-name'>Products</div>
                <FontAwesomeIcon className='nav-dropdown' onClick={toggleProductDropDown} icon={productDropdown ? faChevronUp : faChevronDown} />
            </div>
            {productDropdown && (
                <div className='products-nav-dropdown'>
                    <div className='drawer-list drawer-sublist'>
                        Shop All
                    </div>
                    <div className='drawer-list drawer-sublist'>
                        New Arrivals
                    </div>
                    <div className='drawer-list drawer-sublist'>
                        Best Sellers
                    </div>
                    <div className='drawer-list drawer-sublist'>
                        <div className='drawer-list-name sub-sub-list'>Shop by Category</div>
                        <FontAwesomeIcon className='nav-dropdown dropdown-sublist' onClick={toggleCategoryDropDown} icon={categoryDropdown ? faChevronUp : faChevronDown} />
                    </div>
                    {categoryDropdown && (
                        <div className='products-nav-dropdown-sub'>
                            <div className='drawer-list drawer-sub-sublist'>
                                Sets
                            </div>
                            <div className='drawer-list drawer-sub-sublist'>
                                Tops
                            </div>
                            <div className='drawer-list drawer-sub-sublist'>
                                Bottoms
                            </div>
                            <div className='drawer-list drawer-sub-sublist'>
                                Dresses
                            </div>
                        </div>
                    )}

                </div>
            )}
            <div className='drawer-list'>
                <div className='drawer-list-name'>Collections</div>
                <FontAwesomeIcon className='nav-dropdown' onClick={toggleCollectionsDropDown} icon={collectionsDropdown ? faChevronUp : faChevronDown} />
            </div>
            {collectionsDropdown && (
                <div className='products-nav-dropdown'>
                    <div className='drawer-list drawer-sublist'>
                        Shop All
                    </div>
                    <div className='drawer-list drawer-sublist'>
                        Roseate
                    </div>
                    <div className='drawer-list drawer-sublist'>
                        Chroma
                    </div>
                    <div className='drawer-list drawer-sublist'>
                        Fantasia
                    </div>
                    <div className='drawer-list drawer-sublist'>
                        Whimsical
                    </div>
                    <div className='drawer-list drawer-sublist'>
                        Blanc
                    </div>
                    <div className='drawer-list drawer-sublist'>
                        Enchanted
                    </div>
                    <div className='drawer-list drawer-sublist'>
                        Atelier
                    </div>
                    <div className='drawer-list drawer-sublist'>
                        Allure
                    </div>
                </div>
            )}
            <div className='drawer-list'>
                <div className='drawer-list-name'>Ocassions</div>
                <FontAwesomeIcon className='nav-dropdown' onClick={toggleOcassionsDropDown} icon={ocassionsDropdown ? faChevronUp : faChevronDown} />
            </div>
            {ocassionsDropdown && (
                <div className='products-nav-dropdown'>
                    <div className='drawer-list drawer-sublist'>
                        Haloween
                    </div>
                    <div className='drawer-list drawer-sublist'>
                        Roman Empire
                    </div>
                    <div className='drawer-list drawer-sublist'>
                        Going Out
                    </div>
                    <div className='drawer-list drawer-sublist'>
                        Date Night
                    </div>
                    <div className='drawer-list drawer-sublist'>
                        Homecoming
                    </div>
                    <div className='drawer-list drawer-sublist'>
                        Back to School
                    </div>
                    <div className='drawer-list drawer-sublist'>
                        Maliboo
                    </div>
                </div>
            )}
            <div className='drawer-list'>
                About
            </div>
            <div className='drawer-list'>
                Help & FAQ
            </div>
            <div className='drawer-list'>
                Track Your Order
            </div>
            <div className='drawer-list'>
                Start a Return or Exchange
            </div>
        </Box>
    );



    const toggleSearch = () => {
        console.log("first")
    }
    return (
        <Fragment>
            <div className='navbar'>
                <div className='navbar-left'>
                    <img className='logo' src={logo} />
                    {['left'].map((anchor) => (
                        <Fragment key={anchor}>
                            <FontAwesomeIcon onClick={toggleDrawer(anchor, true)} className='nav-sidebar' icon={faBars} />
                            <Drawer
                                anchor={anchor}
                                open={state[anchor]}
                                onClose={toggleDrawer(anchor, false)}
                            >
                                {list(anchor)}
                            </Drawer>
                        </Fragment>
                    ))}


                </div>
                <div className='navbar-center'>
                    <img className='logo-mobile' src={logo} />
                    <div className='navbar-linkzone'>
                        <div className='navbar-links'>
                            Home
                        </div>
                        <div onMouseEnter={() => setProductNav(true)}
                            onMouseLeave={() => setProductNav(false)}
                            className='navbar-links navbar-hover'>
                            Products
                        </div>
                        <div onMouseEnter={() => setCollectionsNav(true)}
                            onMouseLeave={() => setCollectionsNav(false)}
                            className='navbar-links navbar-hover'>
                            Collections
                        </div>
                        <div className='navbar-links'>
                            About
                        </div>
                        <div className='navbar-links'>
                            Help & FAQ
                        </div>
                    </div>
                </div>
                <div className='navbar-right'>
                    <FontAwesomeIcon onClick={toggleSearch} className='search' icon={faMagnifyingGlass} />
                    <FontAwesomeIcon icon={faCartShopping} />
                </div>
            </div>
            {productNav && (<div className='product-dropdown'>
                <div className='product-left'>
                    <div className='product-details'>
                        <div className='product-featured'>
                            <div className='product-name'>
                                Featured
                            </div>
                            <div className='product-sublinks'>Shop All</div>
                            <div className='product-sublinks'>New Arrivals</div>
                            <div className='product-sublinks'>Best Sellers</div>
                        </div>
                        <div className='product-category'>
                            <div className='product-name'>
                                Shop by Category
                            </div>
                            <div className='product-sublinks'>Sets</div>
                            <div className='product-sublinks'>Tops</div>
                            <div className='product-sublinks'>Bottoms</div>
                            <div className='product-sublinks'>Dresses</div>
                            <div className='product-sublinks'>Jumpsuits & Rompers</div>
                            <div className='product-sublinks'>Outerwear</div>
                            <div className='product-sublinks'>Accessories</div>
                            <div className='product-sublinks'>Swimsuits</div>
                        </div>
                    </div>
                </div>
                <div className='product-right'>
                    <img className='product-img' src={productImg} />
                    <button className='product-btn'>Shop Now</button>
                    <div className='product-right-text'>Roseate Collection</div>
                </div>
            </div>)}
            {collectionsNav && (<div className='product-dropdown'>
                <div className='product-left'>
                    <div className='product-details'>
                        <div className='product-featured'>
                            <div className='product-name'>
                                Featured
                            </div>
                            <div className='product-sublinks'>Shop All</div>
                            <div className='product-sublinks'>Roseate</div>
                            <div className='product-sublinks'>Sedusa</div>
                            <div className='product-sublinks'>Avalon</div>
                            <div className='product-sublinks'>Luma</div>
                            <div className='product-sublinks'>Sonora</div>
                            <div className='product-sublinks'>Omnia</div>
                            <div className='product-sublinks'>Terra</div>
                            <div className='product-sublinks'>Nirvana</div>
                            <div className='product-sublinks'>Chroma</div>
                            <div className='product-sublinks'>Fantasia</div>
                            <div className='product-sublinks'>Whimsical</div>
                            <div className='product-sublinks'>Blanc</div>
                        </div>
                        <div className='product-category'>
                            <div className='product-name'>
                                Shop by Category
                            </div>
                            <div className='product-sublinks'>Haloween</div>
                            <div className='product-sublinks'>Roman Empire</div>
                            <div className='product-sublinks'>Going Out</div>
                            <div className='product-sublinks'>Date Night</div>
                            <div className='product-sublinks'>Back to School</div>
                            <div className='product-sublinks'>Basics</div>
                            <div className='product-sublinks'>Homecoming</div>
                            <div className='product-sublinks'>Resort</div>
                            <div className='product-sublinks'>Prom Queen</div>
                            <div className='product-sublinks'>Festival</div>
                            <div className='product-sublinks'>Phaith's Faves</div>
                            <div className='product-sublinks'>Maliboo</div>
                            <div className='product-sublinks'>Metallic</div>
                            <div className='product-sublinks'>Mesh</div>
                            <div className='product-sublinks'>Rhinestone</div>
                        </div>
                    </div>
                </div>
                <div className='product-right'>
                    <img className='product-img' src={productImg} />
                    <button className='product-btn'>Shop Now</button>
                    <div className='product-right-text'>Roseate Collection</div>
                </div>
            </div>)}

            <div className='product'>
                product
            </div>

        </Fragment>
    );
}

export default NavBar;