import BoxDescription from "../components/BoxDescription";
import { DangerSquare } from 'solar-icon-set'
const Collection = () => {
    return (<div className="w-full h-screen p-10 bg-gray-50">
        <BoxDescription name="اطلاعیه ها" Icon={DangerSquare}>
            <h1 className="text-right text-orange-300">استخر به دلیل تعمیرات، از تاریخ 00 / 00 / 0 0 تا تاریخ 00 / 00 / 0 0 تعطیل می‌باشد</h1>
        </BoxDescription>
    </div>);
}

export default Collection;