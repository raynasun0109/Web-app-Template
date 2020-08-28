import React,{useState,useEffect} from "react";
import { Carousel, WingBlank } from 'antd-mobile';


export default function LiveBanner() {
    const [banner,setBanner]=useState(['1', '2', '3']);

    async function fetchBanner() {
        const res=await fetch("http://h5sm.com/flutter/api/lolbanner");
        const {imgPreView}=await res.json()
        setBanner(state=>imgPreView)

    }

    useEffect(()=>{
        fetchBanner()
    },[])


    return(
        <WingBlank>
            <div className="live-banner">

                <Carousel
                    autoplay={true}
                    infinite
                    // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    // afterChange={index => console.log('slide to', index)}
                >
                    {banner.map((item,index) => (
                        <img
                            src={item}
                            key={index}
                            alt={index}
                        />
                    ))}
                </Carousel>

            </div>
        </WingBlank>
    )
}
