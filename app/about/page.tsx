import Image from "next/image";
import ImageIntroduction from '@/app/assests/Group 146.png'
import ImageIntroductio2 from '@/app/assests/Group 152.png'
import ZivaProperty from "../components/ZivaProperty";
import { CSSProperties } from "react";
import { Collapse, CollapseProps } from "antd";
import { MinusSquare, VerifiedCheck } from "solar-icon-set";
import CollapseZiva from "../components/CollabpseZiva";
const AboutPage = () => {
  const text = `
لورم  ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از  طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و  سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای  متنوع با هدف بهبود ابزارهای کاربردی می 
`;

  const getItems: (panelStyle: CSSProperties) => CollapseProps['items'] = (panelStyle) => [
    {
      key: '1',
      headerClass: '!items-center',
      label: 'چطور میتوانم به زیوا اعتماد کنم؟',
      children: <div className="flex flex-row gap-[10px] px-2 py-3 text-gray-500 font-normal text-sm pr-16 md-max:pr-6">
        <div className="w-[1px] bg-orange-500">
        </div>
        {text}
      </div>,
      style: panelStyle,
    },
    {
      key: '2',
      headerClass: '!items-center',
      label: 'چطور میتوانم امتیاز بگیرم؟',
      children: <div className="flex flex-row gap-[10px] px-2 py-3 text-gray-500 font-normal text-sm pr-16 md-max:pr-6">
        <div className="w-[1px] bg-orange-500">
        </div>
        {text}
      </div>,
      style: panelStyle,
    },
    {
      key: '3',
      headerClass: '!items-center',
      label: 'چگونه میتوانم با پشتیبانی ارتباط داشته باشم؟',
      children: <div className="flex flex-row gap-[10px] px-2 py-3 text-gray-500 font-normal text-sm pr-16 md-max:pr-6">
        <div className="w-[1px] bg-orange-500">
        </div>
        {text}
      </div>,
      style: panelStyle,
    },
    {
      key: '4',
      headerClass: '!items-center',
      label: 'بازگشت پول به حسابم به چه صورت است؟',
      children: <div className="flex flex-row gap-[10px] px-2 py-3 text-gray-500 font-normal text-sm pr-16 md-max:pr-6">
        <div className="w-[1px] bg-orange-500">
        </div>
        {text}
      </div>,
      style: panelStyle,
    },
  ];
  const panelStyle: React.CSSProperties = {
    marginBottom: 24,
    background: '#FFFFFF',
    borderRadius: 21,
    border: 'none',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 4,
    padding: "12px 16px 12px 16px",
    fontSize: 20,
    fontWeight: 700,

  };


  return <div className="bg-[#FCFCFD] flex flex-col sm-max:gap-[60px] ">
    <section className="flex flex-row lg-max:flex-col sm-max:px-0 pr-[77px] pl-40">

      <Image className=" relative sm-max:hidden" src={ImageIntroduction} alt={"معرفی زیوا"} />
      <div className="flex flex-col w-1/2 sm-max:w-full sm-max:px-6 gap-8 justify-center items-start">
        <h1 className="text-32 font-bold text-orange-500">معرفی زیوا</h1>
        <p className="text-lg font-normal text-black">
          در دنیای شلوغ و پرهیاهوی امروز، تفریح و سرگرمی بخش  مهمی از زندگی روزمره ماست. ما در زیوا به این نیاز پاسخ می‌دهیم و  به شما کمک می‌کنیم تا لحظات به یادماندنی را با بهترین قیمت تجربه کنید.
          هدف ما ایجاد یک پل ارتباطی قوی بین کاربران و مراکز تفریحی است. ما با  مراکز معتبر و شناخته‌شده همکاری می‌کنیم و با مذاکره و انعقاد قراردادهای  مناسب، بلیط‌های این مراکز را با تخفیف‌های ویژه و جذاب عرضه می‌نماییم افتخار داریم که به شما  این امکان را می‌دهیم تا با صرفه‌جویی در هزینه‌ها، از سرگرمی‌های متنوع و  لذت‌بخش بهره‌مند شوید
        </p>
      </div>
    </section>
    <section className="containerZiva !gap-5 flex !flex-row md-max:!flex-col sm-max:px-6 justify-between sm-max:gap-9 ">
      <ZivaProperty property="ویژگی برتر زیوا" icon="" description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ  و با استفاده از طراحان گرافیک است" />
      <ZivaProperty property="ویژگی برتر زیوا" icon="" description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ  و با استفاده از طراحان گرافیک است" />
      <ZivaProperty property="ویژگی برتر زیوا" icon="" description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ  و با استفاده از طراحان گرافیک است" />
    </section>
    <section className="flex flex-row-reverse pl-[77px] pr-40">
      <Image width={602} height={610} src={ImageIntroductio2} alt={"معرفی زیوا"} className="" />
      <div className="flex flex-col gap-8 justify-center items-start">
        <h1 className="text-32 font-bold text-orange-500">معرفی زیوا</h1>
        <div className="flex flex-col gap-6">

          <div className="flex gap-2 items-center">
            <div className="w-6">

              <VerifiedCheck color="#ff5400" size={24} />
            </div>
            <p className="font-normal text-lg text-black">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-6">

              <VerifiedCheck color="#ff5400" size={24} />
            </div>
            <p className="font-normal text-lg text-black">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-6">

              <VerifiedCheck color="#ff5400" size={24} />
            </div>
            <p className="font-normal text-lg text-black">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="containerZiva flex flex-col gap-6">
      <div className="flex justify-center text-center text-32 font-bold text-[#151618]">
        سوالات متداول
      </div>
      <CollapseZiva items={getItems(panelStyle)} />

    </section>
  </div>
};

export default AboutPage;