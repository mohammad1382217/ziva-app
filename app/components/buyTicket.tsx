import { Ticket } from "solar-icon-set";
import ButtonZiva from "./Button";

export interface BuyTicketType {
    className?: string,
    background: string,
    navigate: string,
    name: string,
    discount: number,
    price: string,
    priceDiscount: string,
    childrenDiscount: number,
    childrenPrice: string
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
    childrenPrice
}) => {
    return (
        <div>
            <div className={`relative rounded-3xl  p-6 w-full h-[199px] bg-[${background}] ${className}`}>
                <div className="absolute inset-0 bg-pattern bg-cover top-0 left-0 bg-no-repeat"></div>
                <div className="relative flex flex-row md-max:flex-col justify-between z-10 p-4 text-white">
                    <div className="flex flex-col gap-6">
                        <div>
                            <h1 className="text-2xl font-bold text-white">
                                {name}
                            </h1>
                        </div>
                        <div>

                        </div>
                        <div>

                        </div>
                    </div>
                    <div>
                        <ButtonZiva  buttonText="خرید بلیط" type="button" className={`w-32 h-11 text-[${background}] font-semibold text-sm hover:bg-transparent bg-gradient-to-r from-white/90 to-white/80 bg-opacity-20 backdrop-blur-lg`} leftIcon={<Ticket color={background} height={13} width={16} />} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BuyTicket;