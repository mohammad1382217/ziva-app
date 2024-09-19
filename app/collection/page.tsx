import BoxDescription from "../components/BoxDescription";
import { DangerSquare } from 'solar-icon-set'
import CarouselCollection from "../components/CarouselCollection/CarouselCollection";
import ImageSampel from '../assests/RectangleLoginPage.webp'
import '../css/CarouselEmblaHome.css'
import '../css/Carouel.css'
import { EmblaOptionsType } from "embla-carousel";

const Collection = () => {
    
    const SLIDES = [
        { src: ImageSampel, alt: 'استخر' },
        { src: ImageSampel, alt: 'استخر' },
        { src: ImageSampel, alt: 'استخر' },
        { src: ImageSampel, alt: 'استخر' },
        { src: ImageSampel, alt: 'استخر' },
        { src: ImageSampel, alt: 'استخر' },
    ];
    const OPTIONS: EmblaOptionsType = { align: 'center', direction: 'rtl', loop: true }

    return (
        <div className="overflow-hidden w-full h-full p-0 md-min:p-10 gap-32 bg-gray-50">
            <div className="container">

                <div className="flex w-full rounded-3xl justify-between bg-white">
                    <div className="bg-zinc-700">
                        df
                    </div>
                    <div className="w-96">

                    <CarouselCollection options={OPTIONS} slides={SLIDES} />
                    </div>
                </div>
            </div>
            {/* <BoxDescription name="اطلاعیه ها" Icon={DangerSquare}>
                <h1 className="text-right text-orange-300">استخر به دلیل تعمیرات، از تاریخ 00 / 00 / 0 0 تا تاریخ 00 / 00 / 0 0 تعطیل می‌باشد</h1>
            </BoxDescription> */}
        </div>);
}

export default Collection;