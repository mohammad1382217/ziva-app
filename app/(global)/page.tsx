import Image from "next/image";
import Banner from "../components/Banner";
import { EmblaOptionsType } from "embla-carousel";
import ImageSampel from "../../public/blue-swimming-pool-rippled-water-detail.webp";
import ImageSampel1 from "../../public/Ferdos/ferdos_1_800_400.png";
import ImageSampel2 from "../../public/Ghadir/ghadir_1_800_400.jpg";
import EmblaCarouselHome from "../components/CarouselHome/EmblaCarouselHome";
import BoxMuliCarousel from "../components/BoxMulitiCarousel/BoxMuliCarousel";
import "../styles/CarouselEmblaHome.css";

const Home: React.FC = () => {
  const OPTIONS: EmblaOptionsType = { align: "center", direction: "rtl", loop: true };

  const SLIDES = [
    { src: ImageSampel2, alt: "استخر" },
    { src: ImageSampel, alt: "استخر" },
    { src: ImageSampel1, alt: "استخر" },
    { src: ImageSampel2, alt: "استخر" },
    { src: ImageSampel, alt: "استخر" },
    { src: ImageSampel2, alt: "استخر" },
  ];

  const slideCard = [
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
  ];

  const slideTopic = [
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
    //   name: "استخر ۳",
    //   discount: "20",
    //   like: true,
    //   location: "اصفهان میدان نقش جهان",
    //   navigate: "collection/poll",
    //   price: "12000",
    //   rate: 3.5,
    // },
  ];

  return (
    <section className="gap-[120px] md-max:gap-[56px] flex flex-col w-full h-full py-12 sm-max:py-8 bg-[#F9FAFB] overflow-hidden">
      <div className="flex containerZiva flex-col md-min:flex-row md-max:gap-0 gap-6 justify-between h-96 sm-max:h-72 xs-max:h-44 md-max:h-80 xl-max:h-96 3xl-max:h-[30rem] 3xl-min:h-[60vh]">
        {/* <div className="w-full md-min:w-7/12 h-full  mb-4 md-min:mb-0"> */}
        <div className="w-full h-full  mb-4 md-min:mb-0">
          <EmblaCarouselHome slides={SLIDES} options={OPTIONS} />
        </div>
        {/* <div className="w-full md-min:w-5/12 h-full  md-max:h-1/2 overflow-hidden">
          <div className="flex flex-col md-max:flex-row md-max:gap-2 w-full h-full gap-6">
            <div className="h-1/2 md-max:h-full  w-full relative">
              <Image src={ImageSampel} alt={"استخر"} fill className="rounded-2xl" />
            </div>
            <div className="h-1/2 md-max:h-full  w-full relative">
              <Image src={ImageSampel} alt={"استخر"} fill className="rounded-2xl" />
            </div>
          </div>
        </div> */}
      </div>
      <div className="containerZiva">
        <BoxMuliCarousel
          Verticalable={true}
          slides={slideTopic}
          DividerName="مجموعه های برگزیده"
        />
      </div>
      {/* <div className="flex h-[104px] md-max:h-[128px] sm-max:flex-col justify-between w-full my-32 gap-6 lg-max:gap-4 lg-min:px-40">
          <Banner className="w-1/2" />
          <Banner className="w-1/2" />
        </div> */}
      <div className="containerZiva flex !h-[104px] justify-between w-full ">
        <Banner className="w-full" />
      </div>
      <div className="containerZiva">
        <BoxMuliCarousel
          slides={slideCard}
          DividerName="تخفیف‌های شگفت‌انگیز"
          DividerNavigate="/collection"
        />
        {/* <BoxMuliCarousel
            SLIDES={slideCard}
            DivderName="محبوب‌ترین ها"
            DividerNavigate="/collection"
          />
          <BoxMuliCarousel
            slides={slideCard}
            DividerName="به‌صرفه‌ترین انتخاب"
            DividerNavigate="/collection"
          /> */}
      </div>

      {/* <div className="flex h-[104px] md-max:h-[128px] sm-max:flex-col justify-between w-full my-32 gap-6 lg-max:gap-4 lg-min:px-40">
          <Banner className="w-1/3" />
          <Banner className="w-1/3" />
          <Banner className="w-1/3 md-min:flex md-max:hidden" />
        </div>
        <div className="p-0 lg-min:px-40">
          <BoxMuliCarousel
            slides={slideCard}
            DividerName="پرفروش های زیوا"
            DividerNavigate="/collection"
          />
        </div> */}
      {/* <div className="flex h-[104px] justify-between w-full my-32 gap-6 lg-min:px-40">
          <Banner className="w-full" />
        </div> */}
    </section>
  );
};

export default Home;