"use client"

import React, { forwardRef } from "react";
import { Input } from "@nextui-org/input";

interface ClassNamesType {
  label?: string;
  input?: string;
  inputWrapper?: string;
  innerWrapper?: string;
}

interface InputType {
  name?: string;
  label?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (React.FocusEventHandler<HTMLInputElement> & ((e: React.FocusEvent<Element, Element>) => void)), 
  variant?: "flat" | "faded" | "bordered" | "underlined" | undefined;
  classNames?: ClassNamesType;
}

const InputZiva = forwardRef<HTMLInputElement, InputType>(({
  value,
  onChange,
  onFocus,
  name,
  label,
  variant,
  type,
  classNames,
}, ref) => {
  return (
    <Input
      ref={ref} // اکنون می‌توانیم ref را پاس دهیم
      id={name}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      name={name}
      variant={variant}
      dir="rtl"
      lang="fa"
      type={type}
      aria-label={label}
      label={label}
      classNames={{
        label: `mr-0 !origin-top-right ${classNames?.label}`,
        input: `text-right mr-1 ${classNames?.input}`,
        inputWrapper: `bg-white hover:!bg-white w-64 ${classNames?.inputWrapper}`,
        innerWrapper: `${classNames?.innerWrapper}`,
      }}
    />
  );
});

export default InputZiva;