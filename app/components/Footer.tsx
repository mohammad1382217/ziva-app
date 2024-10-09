import Image from "next/image";
import Logo from "./Logo";
import ZarinPay from "@/app/assests/Vector.png";
import Link from "next/link";
import ButtonZiva from "./ButtonZiva";
import { Letter } from "solar-icon-set";

const Footer = () => {
  return (
    <footer className="!select-none">
      <div className="flex justify-between gap-32 xl-max:gap-16 lg-max:8 sm-max:flex-col-reverse bg-slate-50 flex-row containerZiva py-16">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col justify-end items-start gap-6">
            <Logo />
            <p className="text-[14px] text-slate-600 font-normal">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
              طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
              لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
              ابزارهای کاربردی می باشد
            </p>
          </div>
          <div className="flex flex-row sm-max:justify-center  gap-6">
            <Image className="p-2 bg-white rounded-xl" src={ZarinPay} alt="زرین پال" />
            <Image className="p-2 bg-white rounded-xl" src={ZarinPay} alt="زرین پال" />
            <Image className="p-2 bg-white rounded-xl" src={ZarinPay} alt="زرین پال" />
          </div>
        </div>
        <div className="flex flex-row  gap-20">
          <div className="flex flex-col gap-10">
            <div className="text-slate-800 font-bold text-lg">زیوا</div>
            <div className="flex flex-col gap-8 text-nowrap text-xs font-normal text-slate-600">
              <Link href={"/"}>ارتباط با ما</Link>
              <Link href={"/"}>قوانین و مقررات</Link>
              <Link href={"/"}>درباره ما </Link>
              <Link href={"/"}>سوالات متداول</Link>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="text-slate-800 font-bold text-lg">لینک ها</div>
            <div className="flex flex-col gap-8 text-nowrap text-xs font-normal text-slate-600">
              <Link href={"/"}>بیشترین تخفیف</Link>
              <Link href={"/"}>محبوب‌ترین ها</Link>
              <Link href={"/"}>همه استخر ها </Link>
              <Link href={"/"}>پرفروش‌ترین ها</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-orange-500 flex flex-row md-max:flex-col md-max:gap-6 md-max:justify-center justify-between items-center containerZiva !py-6">
        <div className="flex flex-row-reverse lg-max:flex-col items-center gap-4">
          <ButtonZiva
            className="h-10 w-auto rounded-full bg-transparent hover:bg-transparent text-[14px] font-semibold border border-whitetext-white "
            buttonText="پست الکترونیکی:  info@zivaticket.ir"
            variant="bordered"
            type="submit"
            rightIcon={<Letter size={17} color="white" />}
          />
          <ButtonZiva
            className="h-10 w-auto rounded-full bg-transparent hover:bg-transparent text-[14px] font-semibold border border-whitetext-white "
            buttonText="شماره تماس پشتیبانی:  0912 345 6789"
            variant="bordered"
            type="submit"
            rightIcon={<Letter size={17} color="white" />}
          />
        </div>
        <div className="flex gap-4">
          <ButtonZiva
            className="h-10 min-w-5 w-10 rounded-full bg-transparent hover:bg-transparent text-[14px] font-semibold border border-whitetext-white "
            iconOnly={true}
            variant="bordered"
            type="submit"
            rightIcon={<Letter size={17} color="white" />}
          />
          <ButtonZiva
            className="h-10 min-w-5 w-10 rounded-full bg-transparent hover:bg-transparent text-[14px] font-semibold border border-whitetext-white "
            iconOnly={true}
            variant="bordered"
            type="submit"
            rightIcon={<Letter size={17} color="white" />}
          />
          <ButtonZiva
            className="h-10 min-w-5 w-10 rounded-full bg-transparent hover:bg-transparent text-[14px] font-semibold border border-whitetext-white "
            iconOnly={true}
            variant="bordered"
            type="submit"
            rightIcon={<Letter size={17} color="white" />}
          />
          <ButtonZiva
            className="h-10 min-w-5 w-10 rounded-full bg-transparent hover:bg-transparent text-[14px] font-semibold border border-whitetext-white "
            iconOnly={true}
            variant="bordered"
            type="submit"
            rightIcon={<Letter size={17} color="white" />}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
