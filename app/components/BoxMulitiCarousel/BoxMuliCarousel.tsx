'use client'
import React from 'react'
import EmblaCarousel from './src/js/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import DividerCards from '../DividerCards'
import Link from 'next/link'
import { Reply2 } from 'solar-icon-set'
import '../../css/BoxMuliCarouseleEmbla.css'

const BoxMuliCarousel = () => {
    const OPTIONS: EmblaOptionsType = { align: 'center', direction: 'rtl', dragFree: true }
    
    const SLIDES = [
        { name: "استخر ۱", discount: "10", like: true, location: "قم بلوار فردوسی", navigate: 'collection/poll', price: "10000", rate: 0.5 },
        { name: "استخر ۲", discount: "15", like: false, location: "تهران خیابان انقلاب", navigate: 'collection/poll', price: "15000", rate: 4.0 },
        { name: "استخر ۳", discount: "20", like: true, location: "اصفهان میدان نقش جهان", navigate: 'collection/poll', price: "12000", rate: 3.5 },
        { name: "استخر ۴", discount: "5", like: false, location: "مشهد امام رضا", navigate: 'collection/poll', price: "8000", rate: 2.0 },
        { name: "استخر ۵", discount: "25", like: true, location: "شیراز حافظیه", navigate: 'collection/poll', price: "20000", rate: 4.5 },
        { name: "استخر 6", discount: "10", like: true, location: "قم بلوار فردوسی", navigate: 'collection/poll', price: "10000", rate: 0.5 },
        { name: "استخر 7", discount: "15", like: false, location: "تهران خیابان انقلاب", navigate: 'collection/poll', price: "15000", rate: 4.0 },
        { name: "استخر 8", discount: "20", like: true, location: "اصفهان میدان نقش جهان", navigate: 'collection/poll', price: "12000", rate: 3.5 },
        { name: "استخر 9", discount: "5", like: false, location: "مشهد امام رضا", navigate: 'collection/poll', price: "8000", rate: 2.0 },
        { name: "استخر 10", discount: "25", like: true, location: "شیراز حافظیه", navigate: 'collection/poll', price: "20000", rate: 4.5 },
    ];

    return (
        <div className='p-0 sm-min:p-5'>
            <div>
                <DividerCards name="محصولات"  />
            </div>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />

            <Link href={'navigate'} className="flex sm-min:hidden my-3 flex-row justify-center items-center gap-2" >
                <span className="text-gray-700 font-semibold text-lg">مشاهده بیشتر</span>
                <Reply2 color="#FF5400" size={20} />
            </Link>
        </div>);
}

export default BoxMuliCarousel;