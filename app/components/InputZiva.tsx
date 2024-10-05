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
  size?: "sm" | "md" | "lg";
  radius?: "sm" | "md" | "lg" | "none" | "full";
  labelPlacement?: "outside" | "inside" | "outside-left";
  isRequired?: boolean;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
}

const InputZiva = forwardRef<HTMLInputElement, InputType>(({
  value,
  onChange,
  onFocus,
  name,
  label,
  variant = "bordered",
  dir = "rtl",
  type,
  maxLength,
  classNames,
  size = "sm",
  radius = "md",
  labelPlacement = "inside",
  isRequired,
  startContent,
  endContent,
}, ref) => {
  return (
    <Input
      ref={ref} // اکنون می‌توانیم ref را پاس دهیم
      id={name}
      size={size}
      radius={radius}
      value={value}
      onChange={onChange}
      maxLength={maxLength}
      labelPlacement={labelPlacement}
      isRequired={isRequired}
      onFocus={onFocus}
      name={name}
      variant={variant}
      dir={dir}
      lang="fa"
      type={type}
      aria-label={label}
      label={label}
      startContent={startContent}
      endContent={endContent}
      classNames={{
        label: `mr-0 !origin-top-right ${classNames?.label}`,
        input: `text-right mr-1 ${classNames?.input}`,
        inputWrapper: `h-11 bg-white hover:!bg-white w-64 ${classNames?.inputWrapper}`,
        innerWrapper: `${classNames?.innerWrapper}`,
      }}
    />
  );
});

export default InputZiva;