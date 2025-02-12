"use client";

import { ClockCircle, Magnifer, Tag, Tuning2, UserHands, Widget } from "solar-icon-set";
import Card from "../../components/Card";
import DividerCards from "../../components/DividerCards";
import FilterBox from "../../components/FilterBox";
import {
  Checkbox,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
} from "@nextui-org/react";
import Link from "next/link";
import ButtonZiva from "@/app/components/ButtonZiva";
import RadioGroupZiva from "@/app/components/RadioGroup";
import { Tag as AntdTag, Slider } from "antd";

const SearchPage = () => {
  const SearchCards = [
    {
      name: "استخر مجلل فردوس",
      discount: "73",
      like: false,
      location: "قم ، بلوار جمهوری ، ابتدای بلوار شهیدان محمود نژاد ، کوچه ۱۲",
      navigate: "/collection/Ferdos",
      price: "95,000",
      rate: 0.0,
    },
    {
      name: "استخر غدیر",
      discount: "63",
      like: false,
      location: "قم ، بلوار شهید نواب صفوی ، کوچه ۱۴",
      navigate: "/collection/Ghadir",
      price: "75,000",
      rate: 0.0,
    },
    // {
    //   name: "استخر ۱",
    //   discount: "10",
    //   like: true,
    //   location: "قم بلوار فردوسی",
    //   navigate: "collection/poll",
    //   price: "10000",
    //   rate: 0.5,
    // },
    // {
    //   name: "استخر ۲",
    //   discount: "15",
    //   like: false,
    //   location: "تهران خیابان انقلاب",
    //   navigate: "collection/poll",
    //   price: "15000",
    //   rate: 4.0,
    // },
    // {
    //   name: "استخر ۳",
    //   discount: "20",
    //   like: true,
    //   location: "اصفهان میدان نقش جهان",
    //   navigate: "collection/poll",
    //   price: "12000",
    //   rate: 3.5,
    // },
    // {
    //   name: "استخر ۴",
    //   discount: "5",
    //   like: false,
    //   location: "مشهد امام رضا",
    //   navigate: "collection/poll",
    //   price: "8000",
    //   rate: 2.0,
    // },
    // {
    //   name: "استخر ۵",
    //   discount: "25",
    //   like: true,
    //   location: "شیراز حافظیه",
    //   navigate: "collection/poll",
    //   price: "20000",
    //   rate: 4.5,
    // },
    // {
    //   name: "استخر 6",
    //   discount: "10",
    //   like: true,
    //   location: "قم بلوار فردوسی",
    //   navigate: "collection/poll",
    //   price: "10000",
    //   rate: 0.5,
    // },
    // {
    //   name: "استخر 7",
    //   discount: "15",
    //   like: false,
    //   location: "تهران خیابان انقلاب",
    //   navigate: "collection/poll",
    //   price: "15000",
    //   rate: 4.0,
    // },
    // {
    //   name: "استخر 8",
    //   discount: "20",
    //   like: true,
    //   location: "اصفهان میدان نقش جهان",
    //   navigate: "collection/poll",
    //   price: "12000",
    //   rate: 3.5,
    // },
    // {
    //   name: "استخر 9",
    //   discount: "5",
    //   like: false,
    //   location: "مشهد امام رضا",
    //   navigate: "collection/poll",
    //   price: "8000",
    //   rate: 2.0,
    // },
    // {
    //   name: "استخر 10",
    //   discount: "25",
    //   like: true,
    //   location: "شیراز حافظیه",
    //   navigate: "collection/poll",
    //   price: "20000",
    //   rate: 4.5,
    // },
  ];
  return (
    <div className="containerZiva !py-12 sm-max:!py-8 mt-20 bg-slate-50 gap-6 flex lg-max:flex-col-reverse justify-between flex-row-reverse">
      <div className="flex w-full flex-col gap-6">
        <div className="flex gap-6 md-max:flex-col md-max:items-start justify-between items-center w-full">
          <DividerCards
            className="flex w-full md-max:hidden"
            textClassName="text-lg"
            name="نتایج جستجو برای “کلمه مورد نظر”"
          />
          <div className="flex md-min:hidden">
            <Link href="/" className="font-bold text-sm text-gray-800">
              مشاهده همه استخر ها
            </Link>
          </div>
          {/* <Dropdown>
            <DropdownTrigger>
              <ButtonZiva
                className="p-0 gap-[2px] rounded min-w-auto h-[20px]"
                theme="default"
                buttonTextClassName="text-10 font-semibold text-gray-600"
                variant="flat"
                type="button"
                buttonText="ترتیب نمایش بر اساس مرتبط ترین"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="new">New file</DropdownItem>
            </DropdownMenu>
          </Dropdown> */}
          {/* <div className="text-nowrap md-max:self-end">ترتیب نمایش بر اساس مرتبط ترین</div> */}
        </div>

        <div className="flex flex-wrap sm-max:justify-center gap-4">
          {SearchCards.map(
            ({ rate, like, discount, name, location, navigate, price }, index) => (
              <div className={`w-[246px] flex justify-center`} key={index}>
                <Card
                  discount={discount}
                  like={like}
                  location={location}
                  name={name}
                  navigate={navigate}
                  price={price}
                  rate={rate}
                />
              </div>
            ),
          )}
        </div>
      </div>
      <div className="flex flex-col lg-max:flex-row lg-max:overflow-scroll gap-6">
        <FilterBox isFilter={true} name="فیلتر های فعال" Icon={<Tuning2 />}>
          <div className="gap-2 flex flex-row flex-nowrap">
            <AntdTag
              className="rounded-full flex flex-row-reverse w-fit text-xs font-normal text-[#000000D9] border-1 bg-[#FFF8F4] border-orange-300 px-2 py-[1px] gap-[3px]"
              closable
              color="default"
            >
              {" "}
              <p className="w-full">از 000,000 تا 000,000 تومان</p>
            </AntdTag>
            <AntdTag
              className="rounded-full flex flex-row-reverse w-fit text-xs font-normal text-[#000000D9] border-1 bg-[#FFF8F4] border-orange-300 px-2 py-[1px] gap-[3px]"
              closable
              color="default"
            >
              {" "}
              <p className="w-full">جکوزی</p>
            </AntdTag>
          </div>
        </FilterBox>
        <FilterBox name="جستجو" Icon={<Magnifer />}>
          <Input
            variant="bordered"
            className="bg-white "
            color="default"
            type="text"
            label="نام استخر"
            placeholder="“نام استخر”"
          />
          <ButtonZiva
            theme="orange"
            disabled
            className="h-6 rounded-md text-xs font-semibold"
            type="button"
            buttonText="اعمال"
          />
        </FilterBox>
        <FilterBox name="امکانات" Icon={<Widget />}>
          <div>
            {/* <Checkbox defaultSelected>استخر کودکان</Checkbox> */}
            {/* <Checkbox defaultSelected>استخر کودکان</Checkbox> */}
            <Checkbox defaultSelected>استخر کودکان</Checkbox>
          </div>
          <ButtonZiva
            theme="orange"
            disabled
            className="h-6 rounded-md text-xs font-semibold"
            type="button"
            buttonText="اعمال"
          />
        </FilterBox>
        <FilterBox name="محدوده قیمت" Icon={<Tag />}>
          <Input
            variant="bordered"
            className="bg-white "
            color="default"
            type="text"
            label="از"
            placeholder="شروع قیمت"
          />
          <Input
            variant="bordered"
            className="bg-white "
            color="default"
            type="text"
            label="تا"
            placeholder="پایان قیمت"
          />
          <Slider range defaultValue={[20, 50]} />
          <ButtonZiva
            theme="orange"
            className="h-6 rounded-md text-xs font-semibold"
            type="button"
            buttonText="اعمال"
          />
        </FilterBox>
        <FilterBox name="جنسیت" Icon={<UserHands />}>
          <RadioGroupZiva
            className="w-full flex"
            name="gender"
            options={[
              { label: "اقایان", value: "male" },
              { label: "بانوان", value: "female" },
            ]}
          />
          <ButtonZiva
            theme="orange"
            disabled
            className="h-6 rounded-md text-xs font-semibold"
            type="button"
            buttonText="اعمال"
          />
        </FilterBox>
        <FilterBox name="محدوده زمان سانس" Icon={<ClockCircle />}>
          <Input
            variant="bordered"
            className="bg-white "
            color="default"
            type="text"
            label="از"
            placeholder="شروع زمان"
          />
          <Input
            variant="bordered"
            className="bg-white "
            color="default"
            type="text"
            label="تا"
            placeholder="پایان زمان"
          />
          <Slider range defaultValue={[20, 50]} />
          <ButtonZiva
            disabled
            theme="orange"
            className="h-6 rounded-md text-xs font-semibold"
            type="button"
            buttonText="اعمال"
          />
        </FilterBox>
      </div>
    </div>
  );
};

export default SearchPage;