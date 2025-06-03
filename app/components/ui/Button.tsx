import { cva, type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";

// buttom modifier
const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap font-body font-light uppercase text-secondary transition-colors",
    {
        variants: {
            variant: {
                default: "border border-primary bg-primary text-secondary  hover:border-secondary",
                primary: "border border-secondary bg-primary hover:bg-secondary hover:text-primary",
            },
            shape: {
                default: "rounded-lg",
                sm: "rounded-sm",
                md: "rounded-md",
                full: "rounded-full",
                none: "rounded-none"
            },
            size: {
                default: "px-4 py-3 text-paragraph",
                sm: "p-2 text-helperText",
                md: "px-6 py-3 text-paragraph",
                lg: "px-10 py-3 text-header5"
            }
        },
        defaultVariants: {
            variant: "primary",
            shape: "none",
            size: "default"
        }
    }
)

interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    className?: string;
    children?: ReactNode;
}

const Button = ({ className, variant, shape, size, children, ...otherProps }: ButtonProps) => {
    return (
        <button
            className={buttonVariants({ className, variant, shape, size })}
            {...otherProps}
        >{children}</button>
    )
};

Button.displayName = "Button"

export default Button;