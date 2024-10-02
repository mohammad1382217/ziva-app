import Link from "next/link";
import ButtonZiva from "./Button";
import { Magnifer, UserCircle } from "solar-icon-set";
import { Input } from "@nextui-org/react";

const Header = () => {
  return (
    <div className="h-20 flex items-center justify-between fixed top-0 z-40 mb-30 px-32 2xl-max:px-20 xl-max:px-16 w-full bg-gradient-to-r from-white/80 to-white/90 backdrop-blur-sm">
      <section className="flex gap-14">
        <div className="flex justify-center items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-slate-600"></div>
          <span className="text-2xl font-black text-black">زیوا</span>
        </div>
        <div className="flex lg-max:hidden items-center gap-10 text-gray-700 text-sm font-medium">
          <Link href={"/"}>مشاهده استخر ها</Link>
          <Link href={"/"}>درباره ما</Link>
          <Link href={"/"}>ارتباط با ما</Link>
          <Link href={"/"}>قوانین و مقررات</Link>
        </div>
      </section>
      <section className="flex md-max:hidden flex-row gap-4">
        <Input
          type="text"
          id="search"
          name="search"
          // value={Weakness}
          // onChange={(e) => {
          //     setWeakness(e.target.value)
          // }}
          variant="bordered"
          placeholder="جستجو"
          labelPlacement="inside"
          endContent={
            <button type="button" className="flex justify-center items-center">
              <Magnifer color="#A1A1AA" size={20} iconStyle="Outline" />
            </button>
          }
        />
        <ButtonZiva
          className="h-10 w-40 min-w-max text-lg font-semibold text-white"
          type="button"
          buttonText="پنل کاربری"
          leftIcon={<UserCircle size={20} />}
        />
      </section>
    </div>
  );
};

export default Header;