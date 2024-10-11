
interface ContactPropertyType {
  rightSide: React.ReactNode;
  leftSide: React.ReactNode;
  SocialMedia?: React.ReactNode;
  classNameIcon?: string;
  icon: React.ReactNode;

}

const ContactProperty: React.FC<ContactPropertyType> = ({ rightSide, icon, leftSide, classNameIcon,SocialMedia }) => {
  return (
    <div className="flex w-full cartShdow bg-white  justify-between items-center flex-row p-6 rounded-[32px] gap-6 md-max:gap-4">
      <div className="text-lg flex gap-6 items-center font-medium md-max:text-base text-gray-700">
        <div className={`flex bg-orange-500 backdrop-blur-sm justify-center items-center w-[60px] h-[60px] rounded-[20px] gap-2 ${classNameIcon}`}>
          {icon}
        </div>
        {rightSide}
      </div>
      <div className="text-xl md-max:text-lg font-bold text-gray-800">
        {leftSide}
      </div>
      <div className="hidden md-max:flex">
        {SocialMedia}
      </div>
    </div>
  );
};

export default ContactProperty;
