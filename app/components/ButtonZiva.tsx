import { Button } from "@nextui-org/button";
import { CSSProperties, MouseEventHandler } from "react";

interface CustomButtonProps {
  style?: CSSProperties;
  buttonTextClassName?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  buttonText?: string;
  type: "button" | "submit" | "reset" | undefined;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  textOnly?: boolean;
  iconOnly?: boolean;
  variant?:
    | "solid"
    | "bordered"
    | "light"
    | "flat"
    | "faded"
    | "shadow"
    | "ghost"
    | undefined;
  theme?: "orange" | "default";
}

const ButtonZiva: React.FC<CustomButtonProps> = ({
  onClick,
  className,
  buttonTextClassName,
  buttonText,
  type,
  leftIcon,
  rightIcon,
  textOnly = false,
  variant,
  style,
  iconOnly,
  theme = "default", // Default theme is "default"
}) => {
  // Defining theme styles based on props
  let ButtonTheme: string = "";
  if (theme === "orange") {
    ButtonTheme = "bg-orange-500 hover:bg-orange-600 text-white";
  } else if (theme === "default") {
    ButtonTheme = "!bg-transparent hover:!bg-transparent text-black";
  }

  return (
    <Button
      type={type}
      style={style}
      onClick={onClick}
      size="lg"
      variant={variant}
      aria-label={buttonText}
      className={`flex h-[48px] px-6 justify-center items-center gap-2.5 self-stretch font-bold rounded-xl w-full 
        ${ButtonTheme} 
        ${textOnly ? "py-2" : "py-2 px-4"} 
        ${className}`}
        >
      {/* Right Icon */}
      {rightIcon && !textOnly && (
        <span className={`${iconOnly ? "m-0" : "ml-2"} flex justify-center items-center`}>
          {rightIcon}
        </span>
      )}

      {/* Button Text */}
      {!iconOnly && (
        <span className={`${buttonTextClassName}`}>{!textOnly && buttonText}</span>
      )}

      {/* Left Icon */}
      {leftIcon && !iconOnly && (
        <span className={`${iconOnly ? "m-0" : "mr-2"} flex justify-center items-center`}>
          {leftIcon}
        </span>
      )}
    </Button>
  );
};

export default ButtonZiva;