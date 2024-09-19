import EmblaCarouselHome from '../components/CarouselHome/EmblaCarouselHome';
import { EmblaOptionsType } from "embla-carousel";
import ImageSampel from '../assests/RectangleLoginPage.webp'
import Image from 'next/image';
import DividerCards from '../components/DividerCards';
import BoxMuliCarousel from '../components/BoxMulitiCarousel/BoxMuliCarousel';

const Home = () => {

    const OPTIONS: EmblaOptionsType = { align: 'center', direction: 'rtl',loop:true }
    const SLIDES = [
        { src: ImageSampel, alt: 'استخر' },
        { src: ImageSampel, alt: 'استخر' },
        { src: ImageSampel, alt: 'استخر' },
        { src: ImageSampel, alt: 'استخر' },
        { src: ImageSampel, alt: 'استخر' },
        { src: ImageSampel, alt: 'استخر' },
    ];
    const slideCard = [
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
    const slideTopic = [
        { name: "استخر ۱", discount: "10", like: true, location: "قم بلوار فردوسی", navigate: 'collection/poll', price: "10000", rate: 0.5 },
        { name: "استخر ۲", discount: "15", like: false, location: "تهران خیابان انقلاب", navigate: 'collection/poll', price: "15000", rate: 4.0 },
        { name: "استخر ۳", discount: "20", like: true, location: "اصفهان میدان نقش جهان", navigate: 'collection/poll', price: "12000", rate: 3.5 },
    ];

    return (
        <section className='gap-32 flex flex-col w-full h-full p-6 bg-[#F9FAFB] overflow-hidden'>
            <div className='flex lg-min:px-40 flex-col md-min:flex-row md-max:gap-0 gap-6 justify-between h-96 xs-max:h-80 md-max:h-[30rem]  lg-max:h-80 xl-max:h-96 3xl-max:h-[30rem] 3xl-min:h-[60vh]'>
                <div className='w-full md-min:w-7/12 h-full  mb-4 md-min:mb-0'>
                    <EmblaCarouselHome slides={SLIDES} options={OPTIONS} />
                </div>
                <div className='w-full md-min:w-5/12 h-full overflow-hidden'>
                    <div className='flex flex-col md-max:flex-row md-max:gap-2 w-full h-full gap-6'>
                        <div className='h-1/2  w-full relative'>
                            <Image
                                src={ImageSampel}
                                alt={'استخر'}
                                fill
                                className="rounded-2xl"
                            />
                        </div>
                        <div className='h-1/2  w-full relative'>
                            <Image
                                src={ImageSampel}
                                alt={'استخر'}
                                fill
                                className="rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <BoxMuliCarousel Verticalable={true} SLIDES={slideTopic} DivderName='مجموعه های برگزیده' />
                <BoxMuliCarousel SLIDES={slideCard} DivderName='تخفیف‌های شگفت‌انگیز' DividerNavigate='/collection' />
            </div>
        </section>
    );
}

export default Home;