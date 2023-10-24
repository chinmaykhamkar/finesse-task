import { Fragment, useState } from 'react'
import './navBar.css'
import logo from '../../assets/logo.jpg'
import productImg from '../../assets/img1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCartShopping, faBars, faXmark, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Product from '../product/product'
const NavBar = () => {
    const [searchExpand, setSearchExpand] = useState(false);
    const [productNav, setProductNav] = useState(false);
    const [collectionsNav, setCollectionsNav] = useState(false);
    const [productDropdown, setProductDropdown] = useState(false);
    const [collectionsDropdown, setCollectionsDropdown] = useState(false);
    const [ocassionsDropdown, setOcassionsDropdown] = useState(false);
    const [categoryDropdown, setcatergoryDropdown] = useState(false);

    const featured = ['Shop All', 'New Arrivals', 'Best Sellers']
    const categories = ['Sets', 'Tops', 'Bottoms', 'Dresses', 'Jumpsuits & Rompers', 'Outerwear', 'Accessories', 'Swimsuits']
    const featuredCollections = ['Shop All', 'Roseate', 'Sedusa', 'Avalon', 'Luma', 'Sonora', 'Omnia', 'Terra', 'Nirvana', 'Chroma', 'Fantasia', 'Whimsical', 'Blanc']
    const ocassions = ['Haloween', 'Roman Empire', 'Going Out', 'Date Night', 'Back to School', 'Basics', 'Homecoming', 'Resort', 'Prom Queen', 'Festival', "Paith's Faves", 'Maliboo', 'Metallic', 'Mesh', 'Rhinestone']
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

    const catergoryListMobile = categories.map((ele) => {
        return (
            <div key={ele} className='drawer-list drawer-sub-sublist'>{ele}</div>
        )
    })

    const catergoryList = categories.map((ele) => {
        return (
            <div key={ele} className='product-sublinks'>{ele}</div>
        )
    })


    const featuredListMobile = featured.map((ele) => {
        return (
            <div key={ele} className="drawer-list drawer-sublist">{ele}</div>
        )
    })

    const featuredList = featured.map((ele) => {
        return (
            <div key={ele} className="product-sublinks">{ele}</div>
        )
    })

    const featuredCollectionsListMobile = featuredCollections.map((ele) => {
        return (
            <div key={ele} className='drawer-list drawer-sublist'>{ele}</div>
        )
    })

    const featuredCollectionsList = featuredCollections.map((ele) => {
        return (
            <div key={ele} className='product-sublinks'>{ele}</div>
        )
    })


    const featuredOcassionsListMobile = ocassions.map((ele) => {
        return (
            <div key={ele} className='drawer-list drawer-sublist'>{ele}</div>
        )
    })

    const featuredOcassionsList = ocassions.map((ele) => {
        return (
            <div key={ele} className='product-sublinks'>{ele}</div>
        )
    })

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
                    {featuredListMobile}                    
                    <div className='drawer-list drawer-sublist'>
                        <div className='drawer-list-name sub-sub-list'>Shop by Category</div>
                        <FontAwesomeIcon className='nav-dropdown dropdown-sublist' onClick={toggleCategoryDropDown} icon={categoryDropdown ? faChevronUp : faChevronDown} />
                    </div>
                    {categoryDropdown && (
                        <div className='products-nav-dropdown-sub'>
                            {catergoryListMobile}
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
                    {featuredCollectionsListMobile}
                </div>
            )}
            <div className='drawer-list'>
                <div className='drawer-list-name'>Ocassions</div>
                <FontAwesomeIcon className='nav-dropdown' onClick={toggleOcassionsDropDown} icon={ocassionsDropdown ? faChevronUp : faChevronDown} />
            </div>
            {ocassionsDropdown && (
                <div className='products-nav-dropdown'>
                    {featuredOcassionsListMobile}                      
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
                        <div onMouseEnter={() => {setProductNav(true); setCollectionsNav(false)}}                             
                            id='navbarLinks'
                            className='navbar-links navbar-hover'>
                            Products
                        </div>
                        <div onMouseEnter={() => {setCollectionsNav(true); setProductNav(false)}}                            
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
            {productNav && (<div onMouseEnter={() => setProductNav(true)}
                                 onMouseLeave={() => setProductNav(false)}
                                 className='product-dropdown' id="productDropdown">
                <div className='product-left'>
                    <div className='product-details'>
                        <div className='product-featured'>
                            <div className='product-name'>
                                Featured
                            </div>
                            {featuredList}
                        </div>
                        <div className='product-category'>
                            <div className='product-name'>
                                Shop by Category
                            </div>
                            {catergoryList}                          
                        </div>
                    </div>
                </div>
                <div className='product-right'>
                    <img className='product-img' src={productImg} />
                    <button className='product-btn'>Shop Now</button>
                    <div className='product-right-text'>Roseate Collection</div>
                </div>
            </div>)}
            {collectionsNav && (<div onMouseEnter={() => setCollectionsNav(true)}
                                     onMouseLeave={() => setCollectionsNav(false)}
                                     className='product-dropdown'>
                <div className='product-left'>
                    <div className='product-details'>
                        <div className='product-featured'>
                            <div className='product-name'>
                            Shop by Collections
                            </div>
                            {featuredCollectionsList}
                        </div>
                        <div className='product-category'>
                            <div className='product-name'>
                                Shop by Ocassions
                            </div>
                            {featuredOcassionsList}                            
                        </div>
                    </div>
                </div>
                <div className='product-right'>
                    <img className='product-img' src={productImg} />
                    <button className='product-btn'>Shop Now</button>
                    <div className='product-right-text'>Roseate Collection</div>
                </div>
            </div>)}
           
        </Fragment>
    );
}

export default NavBar;