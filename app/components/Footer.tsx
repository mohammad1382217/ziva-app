import Image from "next/image";
import Logo from "./Logo";
import ZarinPay from "../../public/Vector.webp";
import Link from "next/link";
import ButtonZiva from "./ButtonZiva";
import { Letter } from "solar-icon-set";
import Eitaa from '@/public/social_logo/Eitaa.svg';
import Bale from '@/public/social_logo/Bale.svg';
import Rubika from '@/public/social_logo/Rubika.svg';
import Telegram from '@/public/social_logo/Telegram.svg';
import instagram from '@/public/social_logo/instagram.svg';
const Footer = () => {
  return (
    <footer className="!select-none mt-20">
      <div className="flex justify-between gap-32 xl-max:gap-16 lg-max:gap-8 sm-max:flex-col-reverse bg-slate-50 flex-row containerZiva !py-16">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col justify-end items-start gap-6">
            <Logo />
            <p className="text-[14px] text-slate-600 font-normal">
              زیوا تیکت، یک سامانه جامع رزرو بلیط‌ اینترنتی، برای مراکز و مجموعه‌های فرهنگی و تفریحی می‌باشد که کار اصلی آن  ایجاد یک پل ارتباطی قوی بین کاربران و مراکز تفریحی است. ما با همکاری و معرفی مراکز معتبر و شناخته‌شده، بلیط‌های این مراکز را به همراه تخفیف‌های ویژه و جذاب عرضه می‌نماییم. افتخار داریم که به شما این امکان را می‌دهیم تا با صرفه‌جویی در هزینه‌ها، از سرگرمی‌های متنوع و لذت‌بخش بهره‌مند شوید.
            </p>
          </div>
          {/* <div className="flex flex-row sm-max:justify-center  gap-6">
            <Image className="p-2 bg-white rounded-xl" src={ZarinPay} alt="زرین پال" />
            <Image className="p-2 bg-white rounded-xl" src={ZarinPay} alt="زرین پال" />
            <Image className="p-2 bg-white rounded-xl" src={ZarinPay} alt="زرین پال" />
          </div> */}
        </div>
        <div className="flex flex-row  gap-20">
          <div className="flex flex-col gap-10">
            <div className="text-gray-800 font-bold text-lg">زیوا</div>
            <div className="flex flex-col gap-8 text-nowrap text-xs font-normal text-gray-600">
              <Link href={"/about"}>ارتباط با ما</Link>
              <Link href={"/about"}>قوانین و مقررات</Link>
              <Link href={"/about"}>درباره ما </Link>
              <Link href={"/about"}>سوالات متداول</Link>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="text-gray-800 font-bold text-lg">لینک ها</div>
            <div className="flex flex-col gap-8 text-nowrap text-xs font-normal text-gray-600">
              <Link href={"/search"}>بیشترین تخفیف</Link>
              <Link href={"/search"}>محبوب‌ترین ها</Link>
              <Link href={"/search"}>همه استخر ها </Link>
              <Link href={"/search"}>پرفروش‌ترین ها</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-orange-500 flex flex-row md-max:flex-col md-max:gap-6 md-max:justify-center justify-between items-center containerZiva !py-6">
        <div className="flex flex-row-reverse lg-max:w-full lg-max:flex-col items-center gap-4">
          <ButtonZiva
            className="h-10 w-auto rounded-full text-sm font-semibold border border-white text-white"
            buttonText="پست الکترونیکی:  info@zivaticket.ir"
            variant="bordered"
            type="submit"
            rightIcon={<Letter size={17} color="white" />}
            theme="orange"
          />
          <ButtonZiva
            className="h-10 w-auto gradient-f-10-f-2080 rounded-full text-sm font-semibold border border-white text-white"
            buttonText="شماره تماس پشتیبانی:  ---"
            variant="bordered"
            theme="orange"
            type="submit"
            rightIcon={<Letter size={17} color="white" />}
          />
        </div>
        <div className="flex gap-4">
          <ButtonZiva
            disabled
            className="h-10 min-w-5 p-2 w-10 rounded-full bg-transparent hover:bg-transparent text-[14px] font-semibold border border-whitetext-white "
            iconOnly={true}
            variant="bordered"
            theme="orange"
            type="submit"
            rightIcon={<Image width={100} height={100} src={instagram} alt="اینستگرام" />}
          />
          <ButtonZiva
            disabled
            className="h-10 min-w-5 p-2 w-10 rounded-full bg-transparent hover:bg-transparent text-[14px] font-semibold border border-whitetext-white "
            iconOnly={true}
            variant="bordered"
            theme="orange"
            type="submit"
            rightIcon={<Image width={100} height={100} src={Rubika} alt="روبیکا" />}
          />
           <ButtonZiva
            disabled
            className="h-10 min-w-5 p-2 w-10 rounded-full bg-transparent hover:bg-transparent text-[14px] font-semibold border border-whitetext-white "
            iconOnly={true}
            variant="bordered"
            theme="orange"
            type="submit"
            rightIcon={<Image width={100} height={100} src={Telegram} alt="تلگرام" />}
          />
           <ButtonZiva
            disabled
            className="h-10 min-w-5 p-2 w-10 rounded-full bg-transparent hover:bg-transparent text-[14px] font-semibold border border-whitetext-white "
            iconOnly={true}
            variant="bordered"
            theme="orange"
            type="submit"
            rightIcon={<Image width={100} height={100} src={Eitaa} alt="ایتا" />}
          />
           <ButtonZiva
            disabled
            className="h-10 min-w-5 p-2 w-10 rounded-full bg-transparent hover:bg-transparent text-[14px] font-semibold border border-whitetext-white "
            iconOnly={true}
            variant="bordered"
            theme="orange"
            type="submit"
            rightIcon={<Image width={100} height={100} src={Bale} alt="بله" />}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
