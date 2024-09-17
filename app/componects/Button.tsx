import { Skeleton } from "@nextui-org/skeleton";
import dynamic from "next/dynamic";

const Button = dynamic(() => import("@nextui-org/button").then((mod) => mod.Button), {
  loading: () => <Skeleton className="w-64 h-10" />,
});

interface CustomButtonProps {
  buttonText: string;
  type: "button" | "submit" | "reset" | undefined;
  leftIcon?: React.ReactNode; 
  rightIcon?: React.ReactNode;
  textOnly?: boolean;
}

const ButtonZiva: React.FC<CustomButtonProps> = ({ buttonText, type, leftIcon, rightIcon,textOnly = false}) => {
  return (
    <Button
      type={type}
      size="lg"
      color="primary"
      aria-label={buttonText}
      className={`flex h-[48px] px-6 justify-center items-center gap-2.5 self-stretch bg-orange-500 hover:bg-orange-600 text-white font-bold rounded w-48 ${
        textOnly ? "py-2" : "py-2 px-4"
      }`}
    >
      {leftIcon && !textOnly && <span className="mr-2">{leftIcon}</span>}
      {!textOnly && buttonText}
      {rightIcon && !textOnly && <span className="ml-2">{rightIcon}</span>}
    </Button>
  );
};

export default ButtonZiva;