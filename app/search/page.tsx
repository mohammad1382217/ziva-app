import { Widget } from "solar-icon-set";
import Card from "../components/Card";
import DividerCards from "../components/DividerCards";
import FilterBox from "../components/FilterBox";
import { Checkbox } from "@nextui-org/react";

const SearchPage = () => {
    const SearchCards = [
        {
            name: "استخر ۱",
            discount: "10",
            like: true,
            location: "قم بلوار فردوسی",
            navigate: "collection/poll",
            price: "10000",
            rate: 0.5,
        },
        {
            name: "استخر ۲",
            discount: "15",
            like: false,
            location: "تهران خیابان انقلاب",
            navigate: "collection/poll",
            price: "15000",
            rate: 4.0,
        },
        {
            name: "استخر ۳",
            discount: "20",
            like: true,
            location: "اصفهان میدان نقش جهان",
            navigate: "collection/poll",
            price: "12000",
            rate: 3.5,
        },
        {
            name: "استخر ۴",
            discount: "5",
            like: false,
            location: "مشهد امام رضا",
            navigate: "collection/poll",
            price: "8000",
            rate: 2.0,
        },
        {
            name: "استخر ۵",
            discount: "25",
            like: true,
            location: "شیراز حافظیه",
            navigate: "collection/poll",
            price: "20000",
            rate: 4.5,
        },
        {
            name: "استخر 6",
            discount: "10",
            like: true,
            location: "قم بلوار فردوسی",
            navigate: "collection/poll",
            price: "10000",
            rate: 0.5,
        },
        {
            name: "استخر 7",
            discount: "15",
            like: false,
            location: "تهران خیابان انقلاب",
            navigate: "collection/poll",
            price: "15000",
            rate: 4.0,
        },
        {
            name: "استخر 8",
            discount: "20",
            like: true,
            location: "اصفهان میدان نقش جهان",
            navigate: "collection/poll",
            price: "12000",
            rate: 3.5,
        },
        {
            name: "استخر 9",
            discount: "5",
            like: false,
            location: "مشهد امام رضا",
            navigate: "collection/poll",
            price: "8000",
            rate: 2.0,
        },
        {
            name: "استخر 10",
            discount: "25",
            like: true,
            location: "شیراز حافظیه",
            navigate: "collection/poll",
            price: "20000",
            rate: 4.5,
        },
    ];
    return (
        <div className="containerZiva gap-6 flex md-max:flex-col-reverse justify-between flex-row-reverse">
            <div className="flex flex-col gap-6">
                <div className="flex gap-6 justify-between items-center w-full">
                    <DividerCards name="نتایج جستجو برای “کلمه مورد نظر”" />
                    <div className="text-nowrap">
                        مشاهده بیشتر
                    </div>
                </div>
                <div className="flex flex-wrap gap-4">
                    {SearchCards.map(({ rate, like, discount, name, location, navigate, price }, index) => (
                        <div className={`w-[246px] flex justify-center`} key={index}>
                            <Card discount={discount} like={like} location={location} name={name} navigate={navigate} price={price} rate={rate} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-6">
                <FilterBox name="امکانات" Icon={<Widget />} >
                    <div>
                        <Checkbox defaultSelected>استخر کودکان</Checkbox>
                    </div>
                </FilterBox>
            </div>
        </div>
    );
}

export default SearchPage;