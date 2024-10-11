import Image from "next/image";
import ImageIntroduction from "../../../public/IntroductionAboutus.svg";
import ImageIntroductio2 from "../../../public/Group 152.svg";
import { CSSProperties } from "react";
import { CollapseProps } from "antd";
import { ChatSquareCheck, ClipboardList, Sale, VerifiedCheck } from "solar-icon-set";
import ZivaProperty from "@/app/components/ZivaProperty";
import CollapseZiva from "@/app/components/CollabpseZiva";

const AboutPage = () => {
  const text = `
لورم  ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از  طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و  سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای  متنوع با هدف بهبود ابزارهای کاربردی می 
`;

  const getItems: (panelStyle: CSSProperties) => CollapseProps["items"] = (
    panelStyle,
  ) => [
      {
        key: "1",
        headerClass: "!items-center",
        label: "چطور میتوانم به زیوا اعتماد کنم؟",
        children: (
          <div className="flex flex-row gap-[10px] px-2 py-3 text-slate-500 font-normal text-sm pr-16 md-max:pr-6">
            <div className="w-[1px] bg-orange-500"></div>
            {text}
          </div>
        ),
        style: panelStyle,
      },
      {
        key: "2",
        headerClass: "!items-center",
        label: "چطور میتوانم امتیاز بگیرم؟",
        children: (
          <div className="flex flex-row gap-[10px] px-2 py-3 text-slate-500 font-normal text-sm pr-16 md-max:pr-6">
            <div className="w-[1px] bg-orange-500"></div>
            {text}
          </div>
        ),
        style: panelStyle,
      },
      {
        key: "3",
        headerClass: "!items-center",
        label: "چگونه میتوانم با پشتیبانی ارتباط داشته باشم؟",
        children: (
          <div className="flex flex-row gap-[10px] px-2 py-3 text-slate-500 font-normal text-sm pr-16 md-max:pr-6">
            <div className="w-[1px] bg-orange-500"></div>
            {text}
          </div>
        ),
        style: panelStyle,
      },
      {
        key: "4",
        headerClass: "!items-center",
        label: "بازگشت پول به حسابم به چه صورت است؟",
        children: (
          <div className="flex flex-row gap-[10px] px-2 py-3 text-slate-500 font-normal text-sm pr-16 md-max:pr-6">
            <div className="w-[1px] bg-orange-500"></div>
            {text}
          </div>
        ),
        style: panelStyle,
      },
    ];
  const panelStyle: React.CSSProperties = {
    marginBottom: 24,
    background: "#FFFFFF",
    borderRadius: 21,
    border: "none",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: 4,
    padding: "12px 16px 12px 16px",
    fontSize: 20,
    fontWeight: 700,
  };

  return (
    <div className="bg-[#FCFCFD] mt-20 flex flex-col gap-20 sm-max:gap-[60px] !py-12 sm-max:!py-8 containerZiva">
      <section className="flex flex-row gap-6 md-max:flex-col">
        <Image
          className="w-[46%] md-max:w-full relative"
          src={ImageIntroduction}
          alt={"معرفی زیوا"}
        />
        <div className="flex flex-col w-1/2 xl-max:w-4/5 md-max:w-full gap-8 justify-center items-start">
          <h1 className="text-4xl font-black text-orange-500">معرفی زیوا</h1>
          <p className="text-lg font-normal text-gray-800">
            زیوا تیکت، یک سامانه جامع رزرو بلیط‌ اینترنتی، برای مراکز و مجموعه‌های فرهنگی و تفریحی است که با هدف تسهیل در دغدغه‌های همیشگی مردم یعنی خرید «بر حسب نیاز»، «به صرفه» و مهمتر از همه «آگاهانه» به وجود آمده است.
            <br />
            <br />

            کار اصلی سامانه زیوا ایجاد یک پل ارتباطی قوی بین کاربران و مراکز تفریحی است. ما با همکاری و معرفی مراکز معتبر و شناخته‌شده، بلیط‌های این مراکز را به همراه تخفیف‌های ویژه و جذاب عرضه می‌نماییم. افتخار داریم که به شما این امکان را می‌دهیم تا با صرفه‌جویی در هزینه‌ها، از سرگرمی‌های متنوع و لذت‌بخش بهره‌مند شوید.
          </p>
        </div>
      </section>
      <section className="gap-5 flex flex-row md-max:flex-col justify-between sm-max:gap-9 ">
        <ZivaProperty
          property="عرضۀ با تخفیف خدمات"
          classNameIcon="bg-Folly-500"
          icon={<Sale iconStyle="Bold" color="#FFFFFF" size={26} />}
          description="تمام قیمت‌های وارد شده در سایت تخفیف خورده و از قیمت بازار پایینتر هستند. علاوه‌بر آن می‌توانید با شرکت در چالش‌های زیوایی و انجام آن‌ها، از هدایا و تخفیف‌های بیشتر ما بهره‌مند شوید."
        />
        <ZivaProperty
          property="مجموعه‌های بهتر رو بشناس!"
          classNameIcon="bg-[#9E0059]"
          icon={<ChatSquareCheck iconStyle="Bold" color="#FFFFFF" size={26} />}
          description="تیم زیوا بر اساس فرم نظرسنجی خود و بر اساس نمرات کاربران به صورت ماهانه مجموعه‌های برتر را معرفی می‌کند."
        />
        <ZivaProperty
          property="باهاتیم تا بهتر تصمیم بگیری!"
          classNameIcon="bg-[#390099]"
          icon={<ClipboardList iconStyle="Bold" color="#FFFFFF" size={26} />}
          description="ما تمام مجموعه‌هایی که در سامانه زیوا تیکت ثبت شده‌اند را برای شما به صورت کامل معرفی کرده و اطلاعات کافی را در اختیارتان قراردادیم."
        />
      </section>
      <section className="font-normal text-lg text-gray-800">
        زیوا حاصل دست به دست هم دادن بیش از یک دهه تخصص، تبحر، تجربه و موفقیت در زمینه مدیریت مستقیم انواع مراکز تفریحی، گردشگری، فرهنگی، هنری و ورزشی با یک تیم خلاق، با استعداد، با تجربه و متخصص در زمینه طراحی و ساخت پلتفرم‌های آنلاین همچون سایت و اپلیکیشن است.
        <br /><br />
        ما بستری فراهم کردیم تا کاربرانمان از با کیفیت‌ترین خدمات مجموعه‌های طرف قرارداد زیوا، با صرف کمترین هزینه ممکن استفاده کنند.
      </section>
      <section className="flex flex-row-reverse gap-6 md-max:flex-col">
        <Image
          className="w-[46%] md-max:w-full relative"
          src={ImageIntroductio2}
          alt={"معرفی زیوا"}
        />
        <div className="flex flex-col w-1/2 xl-max:w-4/5 md-max:w-full gap-8 justify-center items-start">
          <h1 className="text-lg font-bold text-orange-500">
            در زیوا تیکت، همه چیز ارزانتر است!
          </h1>
          <div className="text-gray-800 text-lg font-normal">
            قیمت‌هایی که از طرف مجموعه‌های طرف قرارداد داخل سایت به عنوان هزینه وارد شده، به خودی خود از قیمت اصلی بلیط آن مجموعه در بازار ارزانتر است. این یعنی تمام خریدهای کاربران از زیوا دارای تخفیف بوده و کاربر تجربه یک تفریح اقتصادی و به صرفه را خواهد داشت.
            <br /><br />
            زمانی که کاربر زیوا باشید، گرفتن تخفیف‌های تکی و شخصی روی قیمت کاهش یافته مجموعه‌های ما برایتان یک امر طبیعی و روتین خواهد شد.
            <br /><br />

            هدف ما آسودگی کاربران و افزایش سطح کیفیت تفریح در عین هزینه منطقی و اقتصادی است؛ پس از هیچ تلاشی فروگذار نخواهیم کرد.
          </div>
          {/* <div className="flex flex-col gap-6">
            <div className="flex gap-2 items-center">
              <div className="w-6">
                <VerifiedCheck color="#ff5400" size={24} />
              </div>
              <p className="font-normal text-lg text-black">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-6">
                <VerifiedCheck color="#ff5400" size={24} />
              </div>
              <p className="font-normal text-lg text-black">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-6">
                <VerifiedCheck color="#ff5400" size={24} />
              </div>
              <p className="font-normal text-lg text-black">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
              </p>
            </div>
          </div> */}
        </div >
      </section >
      <section className=" flex flex-col gap-6">
        <div className="flex justify-center text-center text-32 font-bold text-[#151618]">
          سوالات متداول
        </div>
        <CollapseZiva items={getItems(panelStyle)} />
      </section>
      <section className=" flex flex-col gap-6">
        <div className="flex justify-center text-center text-32 font-bold text-[#151618]">
          قوانین و مقررات
        </div>
        <CollapseZiva items={getItems(panelStyle)} />
      </section>
    </div >
  );
};

export default AboutPage;
