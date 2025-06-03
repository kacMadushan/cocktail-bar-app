import { ChangeEvent, InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils/classNames";

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'
>;

interface InputFieldProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
}

const InputField = ({
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    ...otherProps
}: InputFieldProps) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <input
            className={cn("bg-primary border border-secondary text-header5 text-secondary w-full px-4 py-3 outline-none placeholder:text-urgent placeholder:text-header5", { className })}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChangeHandler}
            {...otherProps}
        />
    )
};

InputField.displayName = "Input"

export default InputField;