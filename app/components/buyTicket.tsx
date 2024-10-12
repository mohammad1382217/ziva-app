import { Ticket } from "solar-icon-set";
import ButtonZiva from "./ButtonZiva";
import Discount from "./Discount";
import { Divider } from "@nextui-org/react";
import Link from "next/link";

export interface BuyTicketType {
  className?: string;
  background: string;
  navigate: string;
  name: string;
  discount: number;
  price: string;
  priceDiscount: string;
  childrenDiscount?: number;
  childrenPrice?: string;
}

const BuyTicket: React.FC<BuyTicketType> = ({
  className,
  background,
  navigate,
  name,
  discount,
  price,
  priceDiscount,
  childrenDiscount,
  childrenPrice,
}) => {
  return (
    <div>
      <div
        className={`relative rounded-3xl  p-6 w-full ${className}`}
        style={{ background: background }}
      >
        <div className="absolute inset-0 bg-pattern bg-cover top-0 left-0 bg-no-repeat"></div>
        <div className="relative md-max:gap-6 flex flex-row md-max:flex-col justify-between text-white">
          <div className="flex flex-col gap-6">
            <div className="flex items-center md-max:justify-between gap-4">
              <h1 className="text-2xl font-bold text-white">{name}</h1>
              <Discount color="#FF0054" discount={discount} />
            </div>
            <div className="flex flex-row  md-max:justify-between gap-6">
              <div className="relative text-xl font-semibold  text-white ">
                <span className="opacity-50">{price} تومان</span>
                <div className="absolute top-4 left-2 right-2 h-0.5 bg-slate-200 opacity-100 transform rotate-[-12deg]"></div>
              </div>
              <div className="relative text-2xl font-black text-white">{priceDiscount} تومان</div>
            </div>
            <div>
              {childrenDiscount && childrenPrice && (
                <div className="flex-grow">
                  <Divider className="w-full mb-2 bg-white opacity-20" />
                  <div className="flex flex-row-reverse justify-start md-max:flex-col-reverse">
                    <p className="font-black text-xl md-max:self-end">
                      {childrenPrice} تومان
                    </p>
                    <span className="text-lg font-bold ml-3 md-max:ml-1 md-max:self-start">
                      {" "}
                      بلیط خردسال با {childrenDiscount} درصد تخفیف{" "}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="my-auto">
            <Link href={navigate} >
            <ButtonZiva
              style={{ color: background }}
              buttonText="خرید بلیط"
              type="button"
              className={`w-32 sm-max:w-full h-11 text-[${background}] font-semibold text-sm hover:bg-transparent bg-gradient-to-r from-white/90 to-white/80 bg-opacity-20 backdrop-blur-lg`}
              leftIcon={<Ticket color={background} height={13} width={16} />}
            />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyTicket;
