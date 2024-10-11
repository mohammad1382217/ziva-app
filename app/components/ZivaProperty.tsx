import { UserSpeakRounded } from "solar-icon-set";

interface ZivaPropertyType {
  property: string;
  description: string;
  classNameIcon?:string;
  icon: React.ReactNode;

}

const ZivaProperty: React.FC<ZivaPropertyType> = ({ property, icon, description,classNameIcon }) => {
  return (
    <div className="flex w-4/12 md-max:w-full flex-col gap-4">
      <div className="flex flex-col-reverse justify-center items-center gap-4">
        <h1 className="text-2xl text-center md-max:text-xl font-bold text-orange-500">{property}</h1>
        <div className={`flex backdrop-blur-sm justify-center items-center w-[70px] h-[70px] rounded-3xl ${classNameIcon}`}>
          {icon}
        </div>
      </div>
      <div className="text-xl text-center lg-max:text-lg md-max:text-sm font-normal text-gray-600">
        {description}
      </div>
    </div>
  );
};

export default ZivaProperty;
