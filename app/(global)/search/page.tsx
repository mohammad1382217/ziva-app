'use client'
import { ClockCircle, Magnifer, Tag, Tuning2, UserHands, Widget } from "solar-icon-set";
import Card from "../../components/Card";
import DividerCards from "../../components/DividerCards";
import FilterBox from "../../components/FilterBox";
import { Button, Checkbox, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input } from "@nextui-org/react";
import Link from "next/link";
import ButtonZiva from "@/app/components/ButtonZiva";

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
    <div className="containerZiva py-12 mt-20 bg-gray-50 gap-6 flex lg-max:flex-col-reverse justify-between flex-row-reverse">
      <div className="flex flex-col gap-6">
        <div className="flex gap-6 md-max:flex-col md-max:items-start justify-between items-center w-full">
          <DividerCards className="flex md-max:hidden" textClassName="text-lg" name="نتایج جستجو برای “کلمه مورد نظر”" />
          <div className="flex md-min:hidden">
            <Link href="/" className="font-bold text-sm text-gray-800">
              مشاهده همه استخر ها
            </Link>
          </div>
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="bordered"
              >
                Open Menu
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="new">New file</DropdownItem>
              <DropdownItem key="copy">Copy link</DropdownItem>
              <DropdownItem key="edit">Edit file</DropdownItem>
              <DropdownItem key="delete" className="text-danger" color="danger">
                Delete file
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          {/* <div className="text-nowrap md-max:self-end">ترتیب نمایش بر اساس مرتبط ترین</div> */}
        </div>

        <div className="flex flex-wrap justify-between gap-4">
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
        <FilterBox name="فیلتر های فعال" Icon={<Tuning2 />}>
          <div>
            <Checkbox defaultSelected>استخر کودکان</Checkbox>
          </div>
        </FilterBox>
        <FilterBox name="جستجو" Icon={<Magnifer />}>
          <Input variant="bordered" className="bg-white" color="default" type="text" label="نام استخر" placeholder="“نام استخر”" />
          <ButtonZiva color="warning" className="h-10" type="button" buttonText="ثبت نظر" />

        </FilterBox>
        <FilterBox name="امکانات" Icon={<Widget />}>
          <div>
            <Checkbox defaultSelected>استخر کودکان</Checkbox>
          </div>
        </FilterBox>
        <FilterBox name="محدوده قیمت" Icon={<Tag />}>
          <div>
            <Checkbox defaultSelected>استخر کودکان</Checkbox>
          </div>
        </FilterBox>
        <FilterBox name="جنسیت" Icon={<UserHands />}>
          <div>
            <Checkbox defaultSelected>استخر کودکان</Checkbox>
          </div>
        </FilterBox>
        <FilterBox name="محدوده زمان سانس" Icon={<ClockCircle />}>
          <div>
            <Checkbox defaultSelected>استخر کودکان</Checkbox>
          </div>
        </FilterBox>
      </div>
    </div>
  );
};

export default SearchPage;