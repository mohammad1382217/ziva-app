'use client'
import React, { useEffect, useState } from 'react'
import EmblaCarousel from './src/js/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import DividerCards from '../DividerCards'
import Link from 'next/link'
import { Reply2 } from 'solar-icon-set'
import { CardType } from '../Card'
interface BoxMuliCarouselType {
    SLIDES: CardType[],
    DivderName: string,
    DividerNavigate?: string,
    Verticalable?: boolean

}
const BoxMuliCarousel: React.FC<BoxMuliCarouselType> = ({ SLIDES, DivderName, DividerNavigate,Verticalable }) => {

    const OPTIONS: EmblaOptionsType = { align: 'center', direction: 'rtl', dragFree: true ,loop:false}

    const [isVerticalable, setIsVerticalable] = useState(Verticalable);
    useEffect(() => {
      const handleResize = () => {
        setIsVerticalable(window.innerWidth >= 540);
      };
      handleResize()
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [Verticalable]);
    return (
        <div className='p-0 lg-min:px-40'>
            <div>
                <DividerCards name={DivderName} navigate={DividerNavigate} />
            </div>
            <EmblaCarousel isChangeVerticalable={isVerticalable} Verticalable={Verticalable} slides={SLIDES} options={OPTIONS} />
            {DividerNavigate ? <Link href={DividerNavigate} className="flex sm-min:hidden my-3 flex-row justify-center items-center gap-2" >
                <span className="text-gray-700 font-semibold text-lg">مشاهده بیشتر</span>
                <Reply2 color="#FF5400" size={20} />
            </Link> : null}

        </div>);
}

export default BoxMuliCarousel;