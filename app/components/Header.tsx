import Link from "next/link";
import ButtonZiva from "./ButtonZiva";
import { Magnifer, UserCircle } from "solar-icon-set";
import { Input } from "@nextui-org/react";
import HamburgerMenuHeader from "./HamburgerMenuHeader";
import InputZiva from "./InputZiva";

const Header = () => {
  const menuItems = [
    ["مشاهده استخر ها", "/search"],
    ["درباره ما", "/about"],
    ["ارتباط با ما", "/about"],
    ["قوانین و مقررات", "/about"],
  ];

  return (
    <div className="h-20 flex items-center justify-between fixed top-0 z-40 px-[156px] 1200-max:px-20 768-max:px-5 w-full bg-gradient-to-r from-white/80 to-white/90 backdrop-blur-sm !select-none">
      <div className="flex gap-14 1200-max:gap-12">
        <Link href={"/"} className="flex justify-center items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-slate-600"></div>
          <span className="text-2xl font-black text-black">زیوا</span>
        </Link>
        <div className="flex 768-max:hidden items-center gap-10 1200-max:gap-8 text-slate-700 text-sm font-medium">
          {menuItems.map((menuItem, index) => (
            <Link key={index} href={menuItem[1]}>
              {menuItem[0]}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex 768-max:hidden flex-row gap-4">
        <Input
          type="text"
          id="search"
          name="search"
          disabled
          variant="bordered"
          placeholder="جستجو"
          labelPlacement="inside"
          endContent={
            <button
              type="button"
              className="flex justify-center items-center"
            >
              <Magnifer color="#A1A1AA" size={20} iconStyle="Outline" />
            </button>
          }
        />
        {/* <Link href="/Dashboard"> */}
        <ButtonZiva
          disabled
          className="h-10 w-40 min-w-max text-lg font-semibold text-white"
          type="button"
          buttonText="پنل کاربری"
          leftIcon={<UserCircle size={20} />}
          theme="orange"
        />
        {/* </Link> */}
      </div>
      <div className="768-min:hidden">
        <HamburgerMenuHeader menuItems={menuItems} />
      </div>
    </div>
  );
};

export default Header;
