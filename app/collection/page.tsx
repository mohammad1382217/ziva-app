import BoxDescription from "../components/BoxDescription";
import { DangerSquare } from 'solar-icon-set'
import Card from "../components/Card";
import BoxMuliCarousel from "../components/BoxMulitiCarousel/BoxMuliCarousel";
const Collection = () => {
    return (<div className="overflow-hidden w-full h-full p-0 md-min:p-10 gap-20 bg-gray-50">
        <BoxDescription name="اطلاعیه ها" Icon={DangerSquare}>
            <h1 className="text-right text-orange-300">استخر به دلیل تعمیرات، از تاریخ 00 / 00 / 0 0 تا تاریخ 00 / 00 / 0 0 تعطیل می‌باشد</h1>
        </BoxDescription>
        <Card Verticalable={true} discount="10" like={true} location="قم بلوار فردوسی" name="نام استخر" navigate={'collection/poll'} price="10000" rate={0.5}/>
        {/* <BoxMuliCarousel /> */}
    </div>);
}

export default Collection;