'use client'
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
// import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import Card, { CardType } from '@/app/components/Card'
type PropType = {
  slides: CardType[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  // const { selectedIndex, scrollSnaps, onDotButtonClick } =
    // useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="emblaMultiCarousel sm-max:scale-[0.9]" >
      <div className="embla__viewport" ref={emblaRef}>
        <div className="flex gap-6" style={{touchAction: "pan-y pinch-zoom"}}>
          {slides.map(({ rate, like, discount, name, location, navigate, price }, index) => (
            <div className=" w-[246px] flex justify-center" key={index}>
              {/* <div className="embla__slide__number"> */}
              <Card discount={discount} like={like} location={location} name={name} navigate={navigate} price={price} rate={rate} />
              {/* </div> */}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center w-full">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        {/* <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div> */}
      </div>
      
    </section>
  )
}

export default EmblaCarousel
