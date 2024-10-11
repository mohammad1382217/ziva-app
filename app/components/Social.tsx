
import { Sale } from "solar-icon-set";
import ButtonZiva from "./ButtonZiva";
import Image from "next/image";
import Eitaa from '@/public/social_logo/Eitaa.svg';
import Bale from '@/public/social_logo/Bale.svg';
import Rubika from '@/public/social_logo/Rubika.svg';
import Telegram from '@/public/social_logo/Telegram.svg';
import instagram from '@/public/social_logo/instagram.svg';
interface SocialLogoType {
  iscolorFull?: boolean;
  className?: string;
  iconClassName:string;
}

const SocialLogo: React.FC<SocialLogoType> = ({iconClassName, iscolorFull,className}) => {
    return(
<div className="flex gap-2">
<ButtonZiva
  disabled
  className="h-[32px] min-w-5 p-1 w-[32px] rounded-full bg-transparent hover:bg-transparent text-[14px] font-semibold border-none"
  iconOnly={true}
  variant="bordered"
  theme="orange"
  type="submit"
  rightIcon={<Image className={iconClassName} width={100} height={100} src={instagram} alt="اینستگرام" />}
/>
<ButtonZiva
  disabled
  className="h-[32px] min-w-5 p-1 w-[32px] rounded-full bg-transparent hover:bg-transparent text-[14px] font-semibold border-none"
  iconOnly={true}
  variant="bordered"
  theme="orange"
  type="submit"
  rightIcon={<Image className={iconClassName} width={100} height={100} src={Rubika} alt="روبیکا" />}
/>
 <ButtonZiva
  disabled
  className="h-[32px] min-w-5 p-1 w-[32px] rounded-full bg-transparent hover:bg-transparent text-[14px] font-semibold border-none"
  iconOnly={true}
  variant="bordered"
  theme="orange"
  type="submit"
  rightIcon={<Image className={iconClassName} width={100} height={100} src={Telegram} alt="تلگرام" />}
/>
 <ButtonZiva
  disabled
  className="h-[32px] min-w-5 p-1 w-[32px] rounded-full bg-transparent hover:bg-transparent text-[14px] font-semibold border-none"
  iconOnly={true}
  variant="bordered"
  theme="orange"
  type="submit"
  rightIcon={<Image className={iconClassName} width={100} height={100} src={Eitaa} alt="ایتا" />}
/>
 <ButtonZiva
  disabled
  className="h-[32px] min-w-5 p-1 w-[32px] rounded-full bg-transparent hover:bg-transparent text-[14px] font-semibold border-none"
  iconOnly={true}
  variant="bordered"
  theme="orange"
  type="submit"
  rightIcon={<Image className={iconClassName} width={100} height={100} src={Bale} alt="بله" />}
/>
</div>)
}
export default SocialLogo