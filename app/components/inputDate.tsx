import DatePicker, { DateObject, Plugin } from "react-multi-date-picker";
import persian_fa from "react-date-object/locales/persian_fa";
import persian from "react-date-object/calendars/persian";

interface InputType {
  plugins?: (Plugin | Plugin[]);
  placeholder?: string;
  value: string | "";
  onChange?: (date: DateObject | DateObject[] | null) => void;
  disabled?: boolean;
  className?: string;
}

const weekDays = ["ش", "ی", "د", "س", "چ", "پ", "ج"];

const inputDateZiva: React.FC<InputType> = ({ value, plugins, disabled, placeholder, onChange, className }) => {

  return (
    <DatePicker
      format="HH:mm:ss YYYY/MM/DD"
      value={value}
      onChange={onChange}
      weekDays={weekDays}
      className="custom-calendar"
      calendar={persian}
      locale={persian_fa}
      inputClass={`outline-0 w-full mt-3 bg-white h-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-3 disabled:text-gray-600 disabled:bg-white disabled:border-gray-300 disabled:cursor-not-allowed select-none ${className}`}
      placeholder={placeholder}
      plugins={[plugins!]}
      disabled={disabled}
    />
  );
};

export default inputDateZiva;