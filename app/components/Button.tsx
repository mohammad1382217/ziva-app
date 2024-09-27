import { Button } from "@nextui-org/button";
import { CSSProperties } from "react";

interface CustomButtonProps {
  style?: CSSProperties,
  buttonTextClassName?:string;
  className?: string;
  buttonText?: string;
  type: "button" | "submit" | "reset" | undefined;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  textOnly?: boolean;
  variant?:
  "solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "ghost" | undefined;
}

const ButtonZiva: React.FC<CustomButtonProps> = ({ className,buttonTextClassName, buttonText, type, leftIcon, rightIcon, textOnly = false, variant, style }) => {
  return (
    <Button
      type={type}
      style={style}
      size="lg"
      variant={variant}
      color="warning"
      aria-label={buttonText}
      className={`flex h-[48px] px-6 justify-center items-center gap-2.5 self-stretch bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl w-full ${textOnly ? "py-2" : "py-2 px-4"
        } ${className}`}
    >
      {rightIcon && !textOnly && <span className="ml-2 flex justify-center items-center">{rightIcon}</span>}
      <span className={`${buttonTextClassName}`}>
        {!textOnly && buttonText}
      </span>
      {leftIcon && !textOnly && <span className="mr-2 flex justify-center items-center">{leftIcon}</span>}
    </Button>
  );
};

export default ButtonZiva;