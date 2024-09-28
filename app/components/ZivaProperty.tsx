import { UserSpeakRounded } from "solar-icon-set";

interface ZivaPropertyType {
    property: string;
    icon: string;
    description: string;
}

const ZivaProperty: React.FC<ZivaPropertyType> = ({
    property,
    icon,
    description,
}) => {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-row-reverse justify-end items-center gap-4">
                <h1 className="text-2xl font-bold text-orange-500">{property}</h1>
                <div className="flex backdrop-blur-sm justify-center items-center w-[70px] h-[70px] rounded-3xl bg-[#CECECEB2]">
                    <UserSpeakRounded color="#FCFCFD" size={35} />
                </div>
            </div>
            <div className="text-xl font-normal text-gray-500">
                {description}
            </div>
        </div>
    );
};

export default ZivaProperty;