import React from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useZoomImageClick } from "@zoom-image/react"

import './Carousel.css';
export default () => {

    const imgArr = ["https://finesse.us/cdn/shop/files/1_f02e4da1-2077-4c28-9e14-0413c74340f8.jpg?v=1697620821&width=823",
        "https://finesse.us/cdn/shop/files/2_e71cc6e4-65ab-45f4-a416-d48750ca3ef8.jpg?v=1697620821&width=823",
        "https://finesse.us/cdn/shop/files/3_109b5dfe-21f2-45fc-ae69-1182def10f52.jpg?v=1697620820&width=823"]

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
                <div className='test'>
                    <img className='carousel-img' alt="" src="https://finesse.us/cdn/shop/files/1_f02e4da1-2077-4c28-9e14-0413c74340f8.jpg?v=1697620821&width=823" />

                </div>
                <div className='test'>
                    <img className='carousel-img' alt="" src="https://finesse.us/cdn/shop/files/2_e71cc6e4-65ab-45f4-a416-d48750ca3ef8.jpg?v=1697620821&width=823" />

                </div>
                <div className='test'>
                    <img className='carousel-img' alt="" src="https://finesse.us/cdn/shop/files/3_109b5dfe-21f2-45fc-ae69-1182def10f52.jpg?v=1697620820&width=823" />

                </div>
            </Carousel>
        </div>
    );
}
