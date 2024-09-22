import { Sale } from "solar-icon-set";
interface DiscountType {
    discount: number;
    className?: string;
    color: string;
  }
  
  const Discount: React.FC<DiscountType> = ({
    discount,
    className,
    color,
  }) => {
    return (
        <div className={`${className} flex rounded-full flex-row-reverse justify-center items-center gap-[2px]  h-[20px]  p-2  bg-white`}>
            <Sale color={color}  size={14} />
            <p className="text-10 mt-[3px] font-bold text-Folly-500">
                تا {discount} درصد تخفیف
            </p>
        </div>
    );
}

export default Discount;