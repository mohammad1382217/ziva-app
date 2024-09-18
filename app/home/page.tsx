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

    return (
        <section className='gap-32 flex flex-col w-full h-full p-6 bg-[#F9FAFB]'>
            <div className='flex flex-col md-min:flex-row md-max:gap-0 gap-6 justify-between h-96 xs-max:h-80 md-max:h-[30rem]  lg-max:h-80 xl-max:h-96 3xl-max:h-[30rem] 3xl-min:h-[60vh]'>
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
                <DividerCards name='مجموعه های برگزیده' />
                <BoxMuliCarousel />
            </div>
        </section>
    );
}

export default Home;