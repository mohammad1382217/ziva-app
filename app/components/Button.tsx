import { Button } from "@nextui-org/button";
import { CSSProperties, MouseEventHandler } from "react";

interface CustomButtonProps {
  style?: CSSProperties,
  buttonTextClassName?: string;
  className?: string;
  onClick?:MouseEventHandler<HTMLButtonElement> | undefined;
  buttonText?: string;
  type: "button" | "submit" | "reset" | undefined;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  textOnly?: boolean;
  iconOnly?: boolean;
  variant?:
  "solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "ghost" | undefined;
}

const ButtonZiva: React.FC<CustomButtonProps> = ({onClick, className, buttonTextClassName, buttonText, type, leftIcon, rightIcon, textOnly = false, variant, style, iconOnly }) => {
  return (
    <Button
      type={type}
      style={style}
      onClick={onClick}
      size="lg"
      variant={variant}
      // color="warning"
      aria-label={buttonText}
      className={`flex h-[48px] px-6 justify-center items-center gap-2.5 self-stretch bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl w-full ${textOnly ? "py-2" : "py-2 px-4"
        } ${className}`}
    >
      {rightIcon && !textOnly && <span className={`${iconOnly ? "m-0" : "ml-2"} flex justify-center items-center`}>{rightIcon}</span>}
      {!iconOnly && <span className={`${buttonTextClassName}`}>
        {!textOnly && buttonText}
      </span>}
      
      {leftIcon && !textOnly && <span className={`${iconOnly ? "m-0" : "mr-2"} flex justify-center items-center`}>{leftIcon}</span>}
    </Button>
  );
};

export default ButtonZiva;