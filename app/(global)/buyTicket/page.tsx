import Card from "@/app/components/Card";
import NotificationList from "@/app/components/NotificationList";
import Rules from "@/app/components/Roles";
import Schedule from "@/app/components/Schedule";

const BuyTicket = () => {
  const notifications = [
    "استخر به دلیل تعمیرات، از تاریخ 00 / 00 / 0 0 تا تاریخ 00 / 00 / 0 0 تعطیل می‌باشد",
    "استخر به دلیل تعمیرات، از تاریخ 00 / 00 / 0 0 تا تاریخ 00 / 00 / 0 0 تعطیل می‌باشد",
  ];

  const menSchedule = [
    {
      label: "آقایان",
      schedule:
        "روز های یک‌شنبه، سه‌شنبه و پنج شنبه از ساعت 00 : 00 الی 00 : 00 و روز جمعه از ساعت 00 : 00 الی 00 : 00",
    },
  ];

  const womenSchedule = [
    {
      label: "بانوان",
      schedule:
        "روز های یک‌شنبه، سه‌شنبه و پنج شنبه از ساعت 00 : 00 الی 00 : 00 و روز جمعه از ساعت 00 : 00 الی 00 : 00",
    },
  ];

  const rulesList = [
    "۲۰ دقیقه پایانی سانس به دوش‌گرفتن و تعویض لباس اختصاص دارد.",
    "کودکان از 5 سال به بالا پذیرش می شوند.",
  ];

  return (
    <div className="overflow-hidden flex justify-center mt-10 w-full h-full gap-32 bg-slate-50">
      <div className="containerZiva flex flex-col gap-28">
        <Card
          Verticalable={true}
          discount={"2"}
          like={false}
          location={"location"}
          name={"name"}
          navigate={"navigate"}
          price={"price"}
          rate={4}
        />
        <section
          className="gap-10 flex flex-col lg-max:gap-6 scroll-mt-[184px]"
          id="introduction"
        >
          <NotificationList notifications={notifications} />
          <Schedule men={menSchedule} women={womenSchedule} />
          <Rules rules={rulesList} />
        </section>
      </div>
    </div>
  );
};

export default BuyTicket;
