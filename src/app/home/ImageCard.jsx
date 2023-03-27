"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const ImageCard = ({ large, title, price, image, productId }) => {
    const imageWidth = large ? 400 : 100;
    const imageHeight = large ? 200 : 100;
    const titleStyle =
        `inline-block min-w-0 font-bold capitalize ${large ? "m-6 text-4xl" : "m-2 text-xl" }`;
    const topPriceStyle = large ? "hidden" : "";
    const bottomPriceStyle = large ? "mb-6" : "hidden";
    const buttonStyle = `p-2 cursor-pointer ${
        large ? " bg-yellow-200" : "inline-block border-b-2 border-b-black"
    }`;

    return (
        <div className="flex flex-row items-center justify-center bg-slate-50 p-5 h-full" key={productId}>
            <div className=" flex-col items-center justify-center text-center">
                <div className={topPriceStyle}>Starting from ${price}</div>
                <div className={titleStyle}><span className="line-clamp-1">{title}</span></div>
                <div className={bottomPriceStyle}>From ${price}</div>
                <div className="mt-2">
                    <span className={buttonStyle}>Shop Now</span>
                </div>
            </div>
            <div className="">
                <Image
                    src={`/images/${image}`}
                    width={imageWidth}
                    height={imageHeight}
                    alt={image}
                />
            </div>
        </div>
    );
};

export default ImageCard;
