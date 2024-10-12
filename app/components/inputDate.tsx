"use client";

import DatePicker, { DateObject, Plugin } from "react-multi-date-picker";
import persian_fa from "react-date-object/locales/persian_fa";
import persian from "react-date-object/calendars/persian";
import InputZiva from "./InputZiva";

interface InputType {
  plugins?: Plugin | Plugin[];
  placeholder?: string;
  value?: string;
  name?: string;
  onChange?: (date: DateObject | DateObject[] | null) => void;
  disabled?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "flat" | "faded" | "bordered" | "underlined" | undefined;
}

const weekDays = ["ش", "ی", "د", "س", "چ", "پ", "ج"];

const inputDateZiva: React.FC<InputType> = ({
  value,
  plugins,
  disabled,
  placeholder,
  onChange,
  className,
  size,
  name,
  variant,
}) => {
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
      inputClass={`outline-0 w-full bg-white h-12 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-3 disabled:text-slate-600 disabled:bg-white disabled:border-slate-300 disabled:cursor-not-allowed select-none`}
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
          size={size}
          variant={variant}
          onChange={handleValueChange}
          label={placeholder}
          name={name}
          classNames={{
            inputWrapper: `w-full min-w-[116px] ${className}`,
            label: "text-medium sm-max:text-tiny",
          }}
        />
      )}
    />
  );
};

export default inputDateZiva;