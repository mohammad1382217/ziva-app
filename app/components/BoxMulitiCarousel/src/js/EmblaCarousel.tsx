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
  Verticalable?: boolean,
  isChangeVerticalable?: boolean,
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const {isChangeVerticalable,Verticalable, slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel({...options,loop:Verticalable ?true :false})

  // const { selectedIndex, scrollSnaps, onDotButtonClick } =
    // useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className={`embla sm-max:scale-[0.9]`} >
      <div className={` ${Verticalable ? '!overflow-visible embla__viewport'  : "embla__viewport" } `} ref={emblaRef}>
        <div className="mt-10 embla__container" style={{touchAction: "pan-y pinch-zoom"}}>
          {slides.map(({ rate, like, discount, name, location, navigate, price }, index) => (
            <div className={`${Verticalable &&isChangeVerticalable ? 'w-[556px]' : 'w-[246px]' } mx-2 flex justify-center`} key={index}>
              <Card Verticalable={Verticalable &&isChangeVerticalable} discount={discount} like={like} location={location} name={name} navigate={navigate} price={price} rate={rate} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex mt-6 justify-center items-center w-full">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
      
    </section>
  )
}

export default EmblaCarousel
