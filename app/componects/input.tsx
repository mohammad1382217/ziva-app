'use client'

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
    type?: string,
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    variant?: "flat" | "faded" | "bordered" | "underlined" | undefined;
    classNames?: ClassNamesType; // Use the ClassNamesType here
}
const InputZiva: React.FC<InputType> = ({ value, onChange, name, label, variant, type, classNames }) => {
    return (
        <Input value={value}
            onChange={onChange}
            name={name}
            variant={variant}
            dir="rtl"
            lang="fa"
            type={type}
            label={label}
            classNames={{
                label: `!self-end mr-0 !origin-top-right ${classNames?.label}`,
                input: `text-right mr-1 ${classNames?.input}`,
                inputWrapper: `w-64 ${classNames?.inputWrapper}`,
                innerWrapper: `${classNames?.innerWrapper}`
            }} />
    )
}
export { InputZiva };