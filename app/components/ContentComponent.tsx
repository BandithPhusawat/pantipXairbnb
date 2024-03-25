"use client";

import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Image } from "@nextui-org/react";

interface ContentInterfaceProp {
    title: string;
    detail: string;
}

const ContentComponent: React.FC<ContentInterfaceProp> = ({title, detail}) => {
    return (
        <div className="p-2">
            <div className="flex justify-center items-center ">
                <div className='flex flex-col'>
                    <p className="text-wrap text-red-500 font-bold">Announce</p>
                    <Image src="https://ptcdn.info/doodle/2024/5d07273900d01f33da0f618c_kltlxiu7k8.png" alt="logo banner" />
                </div>
            </div>
            <div className="flex justify-center items-center top-10">
               
                <div className='flex flex-col'>
                    <p className='text-wrap text-red-500 font-bold pl-10 pt-10 pb-0'>เลือกห้อง</p>
                    <Carousel className='pr-10 pl-10'> 
                        <div>
                            <Image src="/images/image_1.png" alt="image 1" />
                        </div>
                        <div>
                            <Image src="/images/image_2.png" alt="image 2" />
                        </div>
                    </Carousel>
                </div>
            </div>
            <div className="flex justify-center items-center py-3">
                <div>
                    <div className='flex flex-col'>
                        <p className="text-red-500 font-bold pl-10 pt-10 pb-0">Highlight</p>
                        <Carousel className='pr-10 pl-10'> 
                            <div>
                                <Image src="/images/image_1.png" alt="image 1" />
                            </div>
                            <div>
                                <Image src="/images/image_2.png" alt="image 2" />
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center py-3">Pantip Realtime</div>
            <div className="flex justify-center items-center py-3">Pantip Pick</div>
            <div className="flex justify-center items-center py-3">Pantip Hitz</div>
            <div className="flex justify-center items-center py-3">สินธร</div>
            <div className="flex justify-center items-center py-3">เรตติ้งละคร</div>
            <div className="flex justify-center items-center py-3">The Impossible Heir (ซีรีส์เกาหลี)</div>
            <div className="flex justify-center items-center py-3">ก้นครัว</div>
            <div className="flex justify-center items-center py-3">วันพีซ One piece</div>
        </div>
    )
}

export default ContentComponent;