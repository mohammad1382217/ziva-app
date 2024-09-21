"use client"

import DatePicker, { CustomComponentProps, DateObject, Plugin } from "react-multi-date-picker";
import persian_fa from "react-date-object/locales/persian_fa";
import persian from "react-date-object/calendars/persian";
import InputZiva from "./input";

interface InputType {
  plugins?: (Plugin | Plugin[]);
  placeholder?: string;
  value?: string;
  name?: string;
  onChange?: (date: DateObject | DateObject[] | null) => void;
  disabled?: boolean;
  className?: string;
}

const weekDays = ["ش", "ی", "د", "س", "چ", "پ", "ج"];

const inputDateZiva: React.FC<InputType> = ({ value, plugins, disabled, placeholder, onChange, className, name }) => {

  return (
    <DatePicker
      format="YYYY/MM/DD"
      value={value}
      name={name}
      onChange={onChange}
      weekDays={weekDays}
      calendar={persian}
      locale={persian_fa}
      className="custom-calendar"
      inputClass={`outline-0 w-full bg-white h-11 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-3 disabled:text-gray-600 disabled:bg-white disabled:border-gray-300 disabled:cursor-not-allowed select-none ${className}`}
      placeholder={placeholder}
      plugins={plugins ? [plugins] : []}
      disabled={disabled}
      render={(
        value: string,
        openCalendar: () => void,
        handleValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
      ) => (
        <InputZiva
          value={value}
          onChange={handleValueChange}
          label={placeholder}
          name={name}
          classNames={{ inputWrapper: "w-full min-w-[116px]" }}
          onFocus={openCalendar}
        />
      )}
    />
  );
};

export default inputDateZiva;