'use client'
import React, { useState, useEffect, useCallback } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { Thumb } from './EmblaCarouselThumbsButton'
import Image, { StaticImageData } from 'next/image';
import '../../css/CarouselEmblaHome.css'
import '../../css/Carouel.css'
interface ImageData {
    src: StaticImageData;
    alt: string;
}
type PropType = {
    slides: ImageData[],
    options?: EmblaOptionsType
}

const CarouselCollection: React.FC<PropType> = (props) => {
    const { slides, options } = props
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options)
    const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
        containScroll: 'keepSnaps',
        dragFree: true
    })

    const onThumbClick = useCallback(
        (index: number) => {
            if (!emblaMainApi || !emblaThumbsApi) return
            emblaMainApi.scrollTo(index)
        },
        [emblaMainApi, emblaThumbsApi]
    )

    const onSelect = useCallback(() => {
        if (!emblaMainApi || !emblaThumbsApi) return
        setSelectedIndex(emblaMainApi.selectedScrollSnap())
        emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
    }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

    useEffect(() => {
        if (!emblaMainApi) return
        onSelect()

        emblaMainApi.on('select', onSelect).on('reInit', onSelect)
    }, [emblaMainApi, onSelect])

    return (
        <div className="embla w-full h-full">
            <div className="embla__viewport w-full h-full" ref={emblaMainRef}>
                <div className="embla__container w-full h-full">
                    {slides.map(({ src, alt }, index) => (
                        <div className="embla__slide w-full h-full" key={index}>
                            {/* <div className="embla__slide__number">{index + 1}</div> */}
                            <div className='w-full h-full '>

                                <Image
                                    src={src}
                                    alt={alt}
                                    className="rounded-2xl"
                                    fill
                                />
                            </div>
                        </div>
                    ))}
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
    )
}

export default CarouselCollection
