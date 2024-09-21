"use client";

import { RadioGroup, Radio } from "@nextui-org/radio";
import { useState } from "react";

interface Option {
  label: string;
  value: string;
}

interface RadioGroupZivaProps {
  label?: string;
  options: Option[];
  name: string;
}

const RadioGroupZiva: React.FC<RadioGroupZivaProps> = ({ label, options, name }) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <RadioGroup
      label={label}
      name={name}
      classNames={{ wrapper: "flex flex-row gap-8", base: "flex flex-row gap-8" }}
      onChange={handleSelection} // تغییر onChange به event handler
    >
      {options.map((option, index) => (
        <Radio key={index} size="md" color="primary" value={option.value}>
          {option.label}
        </Radio>
      ))}
    </RadioGroup>
  );
};

export default RadioGroupZiva;