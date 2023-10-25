import React from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useZoomImageClick } from "@zoom-image/react"

import './Carousel.css';
export default () => {

    const imgArr = ["https://finesse.us/cdn/shop/products/file_fbe029d5-ce6f-4a4b-ad03-12de748de70c.jpg?v=1674955469&width=1445",
        "https://finesse.us/cdn/shop/products/file_d92bb309-b1c6-44fc-b0f6-b7a33a90d693.jpg?v=1674955469&width=823",
        "https://finesse.us/cdn/shop/products/file_ead9228a-a716-445a-8905-34caea5b18fa.jpg?v=1674955469&width=823",
        "https://finesse.us/cdn/shop/products/file_86ebb7b3-f1ec-4650-a3db-1983b106db83.jpg?v=1674955469&width=800"
    ]

    const list = imgArr.map((ele) => {
        return (
            <div className='test'>
                <img loading='lazy' className='carousel-img' alt="" src={ele} />

            </div>
        )
    })

    // const [tabs, setTabs] = useState([
    //     { name: "Click", href: "#", current: true, value: "click" }
    // ])

    // const zoomType = useMemo(() => tabs.find((tab) => tab.current)?.value, [tabs])
    // const imageClickContainerRef1 = useRef(null);
    // const imageClickContainerRef2 = useRef(null);
    // const imageClickContainerRef3 = useRef(null);
    // const { createZoomImage: createZoomImageClick1 } = useZoomImageClick()
    // const { createZoomImage: createZoomImageClick2 } = useZoomImageClick()
    // const { createZoomImage: createZoomImageClick3 } = useZoomImageClick()

    // useEffect(() => {
    //     if (zoomType === "click") {
    //         const imageContainer1 = imageClickContainerRef1.current
    //         const imageContainer2 = imageClickContainerRef2.current
    //         const imageContainer3 = imageClickContainerRef3.current

    //         createZoomImageClick1(imageContainer1, {
    //             zoomImageSource: "https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg",
    //         })
    //         createZoomImageClick2(imageContainer2, {
    //             zoomImageSource: "https://finesse.us/cdn/shop/files/2_e71cc6e4-65ab-45f4-a416-d48750ca3ef8.jpg?v=1697620821&width=300",
    //         })

    //         createZoomImageClick3(imageContainer3, {
    //             zoomImageSource: "https://finesse.us/cdn/shop/files/3_109b5dfe-21f2-45fc-ae69-1182def10f52.jpg?v=1697620820&width=300",
    //         })
    //     }
    // }, [zoomType])


    return (

        <div className='main-carousel'>
            <Carousel>
                {/* <div ref={imageClickContainerRef1}  className="relative h-[300px] w-[300px] cursor-crosshair overflow-hidden">
                    <img className="h-full w-full" alt="" src="https://finesse.us/cdn/shop/files/1_f02e4da1-2077-4c28-9e14-0413c74340f8.jpg?v=1697620821&width=823" />

                </div>
                <div ref={imageClickContainerRef2}>
                    <img alt="" src="https://finesse.us/cdn/shop/files/2_e71cc6e4-65ab-45f4-a416-d48750ca3ef8.jpg?v=1697620821&width=823" />

                </div>
                <div ref={imageClickContainerRef3}  >
                    <img alt="" src="https://finesse.us/cdn/shop/files/3_109b5dfe-21f2-45fc-ae69-1182def10f52.jpg?v=1697620820&width=823" />

                </div> */}
                {list}
                {/* <div className='test'>
                    <img loading='lazy' className='carousel-img' alt="" src="https://finesse.us/cdn/shop/products/file_fbe029d5-ce6f-4a4b-ad03-12de748de70c.jpg?v=1674955469&width=1445" />

                </div>
                <div className='test'>
                    <img loading='lazy' className='carousel-img' alt="" src="https://finesse.us/cdn/shop/products/file_d92bb309-b1c6-44fc-b0f6-b7a33a90d693.jpg?v=1674955469&width=823" />

                </div>
                <div className='test'>
                    <img loading='lazy' className='carousel-img' alt="" src="https://finesse.us/cdn/shop/products/file_ead9228a-a716-445a-8905-34caea5b18fa.jpg?v=1674955469&width=823" />

                </div>
                <div className='test'>
                    <img loading='lazy' className='carousel-img' alt="" src="https://finesse.us/cdn/shop/products/file_86ebb7b3-f1ec-4650-a3db-1983b106db83.jpg?v=1674955469&width=800" />

                </div> */}

            </Carousel>
        </div>
    );
}
