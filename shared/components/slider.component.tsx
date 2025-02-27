'use client';

import { useRef } from "react";
import { InstagramIcon } from "../assets/icons/instagram.icon";

export const SliderComponent = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: string) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const images = [
    'images/image1.jpg',
    'images/image2.jpeg',
    'images/image3.jpg',
    'images/image4.jpg',
    'images/image5.jpg',
    'images/image6.jpg',
    'images/image7.jpg',
    'images/image8.jpg',
    'images/image9.jpg',
  ];


  return (
    <div className="flex flex-col w-full items-center p-4 md:p-0">
      <div ref={scrollRef} className="flex overflow-x-auto space-x-4 py-4 scroll-smooth no-scrollbar">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Gallery Image ${index + 1}`} className="h-[540px] object-contain w-rounded-lg shadow-md" />
        ))}
      </div>

      <div id='controls' className="flex max-w-7xl w-full sm:p-10 justify-between items-center max">
        <button onClick={() => scroll("left")}>←</button>
        <p className="text-lg flex"><InstagramIcon className="my-auto mr-4" />dse_detailing</p>
        <button onClick={() => scroll("right")}>→</button>
      </div>
    </div>
  );
};
