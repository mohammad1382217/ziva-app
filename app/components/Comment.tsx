import { Dislike, FaceScanSquare, Like } from "solar-icon-set";
import ButtonZiva from "./Button";

interface CommentType {
    name: string;
    date: string;
    strengths: string[];
    Weaknesses: string[];
    rate: number;
    text: string;
    clsasName?: string;
    agree: number,
    disAgree: number,
    isAgree: boolean,
    isdisAgree: boolean,
}

const Comment: React.FC<CommentType> = ({
    name,
    date,
    strengths,
    Weaknesses,
    rate,
    text,
    agree,
    disAgree,
    clsasName,
    isAgree,
    isdisAgree,
}) => {
    return (
        <div className="flex flex-col gap-5">
            <div className="flex justify-between items-center">
                <div className="flex gap-3">
                    <div className="flex justify-center items-center w-10 h-10 rounded-[10px] bg-gray-200">
                        <FaceScanSquare color="#FFFFFF" size={20} />
                    </div>
                    <div className="flex flex-col gap-[2px]">
                        <span className="text-gray-800 text-base font-semibold">
                            {name}
                        </span>
                        <span className="text-gray-400 text-xs font-medium">
                            {date}
                        </span>
                    </div>
                </div>
                <div className="flex gap-[6px]">
                    <div className="flex gap-1">
                        <ButtonZiva buttonTextClassName="text-xs font-bold" className={`min-w-10 h-6 gap-1 rounded-full px-2 ${isAgree ? "bg-red-500 hover:bg-red-600" : "bg-transparent text-gray-400 hover:bg-gray-200"}  `} type="button" buttonText={String(agree)} rightIcon={<Like iconStyle="Bold" />} />
                        <ButtonZiva buttonTextClassName="text-xs font-bold" className={`min-w-10 h-6 gap-1 rounded-full px-2 ${isdisAgree ? "bg-red-500 hover:bg-red-600" : "bg-transparent text-gray-400 hover:bg-gray-200"}  `} type="button" buttonText={String(disAgree)} rightIcon={<Dislike iconStyle="Bold" />} />
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
}

export default Comment;