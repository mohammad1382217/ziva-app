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
  maxLength?: number;
  dir? : "rtl" | "ltr";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (React.FocusEventHandler<HTMLInputElement> & ((e: React.FocusEvent<Element, Element>) => void)), 
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  variant?: "flat" | "faded" | "bordered" | "underlined" | undefined;
  classNames?: ClassNamesType;
  size?: "sm" | "md" | "lg"
}

const InputZiva = forwardRef<HTMLInputElement, InputType>(({
  value,
  onChange,
  onFocus,
  name,
  label,
  variant,
  dir = "rtl",
  type,
  maxLength,
  classNames,
  size = "lg"
}, ref) => {
  return (
    <Input
      ref={ref} // اکنون می‌توانیم ref را پاس دهیم
      id={name}
      size={size}
      value={value}
      onChange={onChange}
      maxLength={maxLength}
      onFocus={onFocus}
      name={name}
      variant={variant}
      dir={dir}
      lang="fa"
      type={type}
      aria-label={label}
      label={label}
      classNames={{
        label: `mr-0 !origin-top-right ${classNames?.label}`,
        input: `text-right mr-1 ${classNames?.input}`,
        inputWrapper: `h-12 bg-white hover:!bg-white w-64 ${classNames?.inputWrapper}`,
        innerWrapper: `${classNames?.innerWrapper}`,
      }}
    />
  );
});

export default InputZiva;