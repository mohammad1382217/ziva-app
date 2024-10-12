'use client'

import Image, { StaticImageData } from 'next/image'
import '../../styles/CarouselEmblaHome.css'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './EmblaCarouselDotButtonHome'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtonsHome'
import useEmblaCarousel from 'embla-carousel-react'

interface ImageData {
  src: StaticImageData;
  alt: string;
}
type PropType = {
  slides: ImageData[],
  options?: EmblaOptionsType
}

const EmblaCarouselHome: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla h-full relative">
      <div className="embla__viewport h-full" ref={emblaRef}>
        <div className="embla__container h-full">
          {slides.map(({ src, alt }, index) => (
            <div className="embla__slide w-full h-full" key={index}>
              <div className="embla__slide w-full h-full overflow-hidden" key={index}>
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

      <div className=" absolute bottom-3 w-full flex flex-col justify-center items-center">
        <div className="embla__buttons mb-3">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarouselHome