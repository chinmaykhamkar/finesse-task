import React, { useEffect, useRef } from 'react'
import './Suggestions.css'
import img from '../../assets/logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
const Suggestions = (props) => {

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    useEffect(() => {
        const ele = ref1.current;
        // console.log(ele);
        const ele2 = document.querySelector('.product-list-container');
        const ele3 = document.getElementById('#scrollRight');
        console.log(ele3)
        const scrollRight = document.getElementById("scrollRight");
        const scrollLeft = document.getElementById("scrollLeft");
        const productListContainer = document.querySelector(".product-list-container");

        scrollLeft.addEventListener("click", function () {
            // console.log("Clicked!");
            productListContainer.scrollBy({
                top: 0,
                left: -620,
                behavior: 'smooth'
            });
        });

        scrollRight.addEventListener("click", function () {
            // console.log("Clicked!");
            productListContainer.scrollBy({
                top: 0,
                left: 620,
                behavior: 'smooth'
            });
        });
    }, []);



    function createData(name, price, img, hoverimg) {
        return { name, price, img, hoverimg };
    }

    const rows = [

        createData('Charlize Navy Maxi Skirt', '$32.00', 'https://cdn.shopify.com/s/files/1/0237/3346/9261/files/CHARLIZESKIRT_1.jpg?v=1697410650&width=720', 'https://cdn.shopify.com/s/files/1/0237/3346/9261/files/CHARLIZESKIRT_2.jpg?v=1697410649&width=720'),
        createData('Emily Pink Mini Dress', '$36.00', 'https://cdn.shopify.com/s/files/1/0237/3346/9261/products/3D-Set-Front_adeeb397-ecc1-4854-9a08-6b6fb683cbe7.jpg?v=1674915103&width=720', 'https://cdn.shopify.com/s/files/1/0237/3346/9261/products/DSC00312.jpg?v=1674915116&width=720'),
        createData('Charlize Navy One Shoulder Top', '$28.00', 'https://cdn.shopify.com/s/files/1/0237/3346/9261/files/CHARLIZETOP_2.jpg?v=1697410621&width=720', 'https://cdn.shopify.com/s/files/1/0237/3346/9261/files/CHARLIZETOP_3.jpg?v=1697410623&width=720'),
        createData('Ren Pink Satin Lace Mini Dress', '$36.00', 'https://cdn.shopify.com/s/files/1/0237/3346/9261/files/1_078287e3-6821-463e-ac10-488a92331093.jpg?v=1688161433&width=720', 'https://cdn.shopify.com/s/files/1/0237/3346/9261/files/4_19926b79-eb21-4fe2-829a-e772f734d5ca.jpg?v=1688575893&width=720'),
        createData('Abeni Grey Sweater Mini Dress', '$38.00', 'https://cdn.shopify.com/s/files/1/0237/3346/9261/files/Jocelyn_1.jpg?v=1695267863&width=720', 'https://cdn.shopify.com/s/files/1/0237/3346/9261/files/Jocelyn4.jpg?v=1695267863&width=720'),
        createData('Jocelyn Pink Sequin Mini Dress', '$64.00', 'https://cdn.shopify.com/s/files/1/0237/3346/9261/files/PippiPinkFloralPrintMiniDress_ColorwayA_0.jpg?v=1692630739&width=720', 'https://cdn.shopify.com/s/files/1/0237/3346/9261/files/3D-ECOMM-8_ed498e3d-f4cd-48c2-b67b-b0e9c0930813.jpg?v=1691165860&width=720'),
        createData('Juliana Brown Tiger Print Top', '$27.00', 'https://cdn.shopify.com/s/files/1/0237/3346/9261/files/FLORENCIA_ColorwayA_0.jpg?v=1695602145&width=720', 'https://cdn.shopify.com/s/files/1/0237/3346/9261/files/FLORENCIA_ColorwayA_1.jpg?v=1695602146&width=720'),
        createData('Celine Pink Pattern Knit Mini Dress', '$36.00', 'https://cdn.shopify.com/s/files/1/0237/3346/9261/files/VERONICA1_ColorwayA_0.jpg?v=1695001882&width=720', 'https://cdn.shopify.com/s/files/1/0237/3346/9261/files/1_Veronica-Pink-Jersey-Mini-Dress.jpg?v=1697603959&width=720'),
    ];

    const forYou = rows.map((ele) => {
        return (
            <div key={ele.name} class="product-card">
                <img onMouseEnter={e => (e.currentTarget.src = `${ele.hoverimg}`)}
                    onMouseOut={e => (e.currentTarget.src = `${ele.img}`)}
                    src={ele.img} alt="Product 1 Image" />
                <div className='product-name'>
                    {ele.name}
                </div>
                <div className={`product-pricee ${props.theme?'':'halo-theme'}`}>{ele.price}</div>
            </div>

        )
    });



    return (
        <div className='main-suggestion'>
            <div className='suggestion-title'>
                You May also like...
            </div>
            <div class="section-container">
                <div id="scrollLeft" class="scroll-icon">
                    <FontAwesomeIcon ref={ref3} icon={faChevronLeft} />
                </div>
                <div ref={ref1} class="product-list-container">
                    <div class="product-list">
                        {forYou}

                    </div>
                </div>
                <div id="scrollRight" class="scroll-icon">
                    <FontAwesomeIcon ref={ref2} icon={faChevronRight} />
                </div>
            </div>

        </div>
    )
}

export default Suggestions;