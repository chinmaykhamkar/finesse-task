import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Carousel.css';
export default () => {

    const imgArr = ["https://finesse.us/cdn/shop/files/1_f02e4da1-2077-4c28-9e14-0413c74340f8.jpg?v=1697620821&width=823",
                    "https://finesse.us/cdn/shop/files/2_e71cc6e4-65ab-45f4-a416-d48750ca3ef8.jpg?v=1697620821&width=823",
                    "https://finesse.us/cdn/shop/files/3_109b5dfe-21f2-45fc-ae69-1182def10f52.jpg?v=1697620820&width=823"]

    const imgList = imgArr.map((ele) => {

        return (
            <div key={ele}>
                <img alt="" src={ele} />

            </div>
        )
    })


    return (

        <div className='main-carousel'>
            <Carousel>
                {imgList}                
            </Carousel>
        </div>
    );
}
