import { Button } from "@nextui-org/button";

interface CustomButtonProps {
  className?: string;
  buttonText: string;
  type: "button" | "submit" | "reset" | undefined;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  textOnly?: boolean;
  variant?: "solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "ghost" | undefined;
  size?: "sm" | "md" | "lg" | undefined; // Added to make the size customizable
  color?: "default" | "primary" | "secondary" | "warning" | "success" | "danger"; // Optional custom color
}

const ButtonZiva: React.FC<CustomButtonProps> = ({
  className,
  buttonText,
  type,
  leftIcon,
  rightIcon,
  textOnly = false,
  variant = "solid", // Default variant to solid
  size = "lg", // Default size to large
  color = "primary", // Default color to warning
}) => {
  return (
    <Button
      type={type}
      size={size}
      variant={variant}
      color={color}
      aria-label={buttonText}
      className={`flex justify-center items-center gap-2.5 rounded-xl w-full ${
        textOnly ? "py-2" : "py-2 px-4"
      } ${className}`}
    >
      {rightIcon && <span className="ml-2 flex justify-center items-center">{rightIcon}</span>}
      {!textOnly && buttonText}
      {leftIcon && <span className="ml-2 flex justify-center items-center">{leftIcon}</span>}
    </Button>
  );
};

export default ButtonZiva;