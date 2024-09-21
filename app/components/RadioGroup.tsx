import { RadioGroup, Radio } from "@nextui-org/radio";

interface Option {
  label: string;
  value: string;
}

interface RadioGroupZivaProps {
  label?: string;
  options: Option[];
  name?: string;
}

const RadioGroupZiva: React.FC<RadioGroupZivaProps> = ({ label, options, name }) => {
  return (
    <RadioGroup
      label={label}
      name={name}
      classNames={{ wrapper: "flex flex-row gap-8", base: "flex flex-row gap-8" }}
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