'use client'
import React from 'react'
import EmblaCarousel from './src/js/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import DividerCards from '../DividerCards'

const BoxMuliCarousel = () => {
    const OPTIONS: EmblaOptionsType = { align: 'center',direction:'rtl' }
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
        <div className=' p-5'>
            <div>
                <DividerCards name="محصولات" navigate={'collection/poll'} />
            </div>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>);
}

export default BoxMuliCarousel;