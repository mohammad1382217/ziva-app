"use client";

import React, { useState, useEffect, useCallback } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "./EmblaCarouselThumbsButton";
import Image, { StaticImageData } from "next/image";
import "../../css/Carouel.css";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "../CarouselHome/EmblaCarouselArrowButtonsHome";
interface ImageData {
  src: StaticImageData;
  alt: string;
}
type PropType = {
  slides: ImageData[];
  options?: EmblaOptionsType;
};

const CarouselCollection: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
    loop: true,
    direction: "rtl",
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaMainApi);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();

    emblaMainApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className="embla flex flex-col justify-between w-full h-full relative">
      <div className="embla__viewport w-full h-80" ref={emblaMainRef}>
        <div className="embla__container w-full h-80">
          {slides.map(({ src, alt }, index) => (
            <div className="embla__slide mx-1  w-full h-80" key={index}>
              {/* <div className="embla__slide__number">{index + 1}</div> */}
              <div className="embla__slide  w-full h-80">
                <Image src={src} alt={alt} className="rounded-2xl" fill />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls absolute top-[17rem] w-full flex flex-col justify-center items-center">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>

      <div className="embla-thumbs">
        <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
          <div className="embla-thumbs__container">
            {slides.map(({ src, alt }, index) => (
              <Thumb
                key={index}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                src={src}
                alt={alt}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselCollection;