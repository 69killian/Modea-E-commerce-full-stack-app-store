import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const Button = forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(({
    className,
    children,
    disabled,
    type = "button", // Default value
    ...props
}, ref) => {
    return (
        <button
        className={cn(
            `
            w-auto
            rounded-full
            bg-black
            border-transparent
            px-5
            px-3
            disabled:cursor-not-allowed
            disabled:opacity-50
            text-white
            font-semibold
            hover:opacity-75
            transition
            `,
            className
        )}
        disabled={disabled}
        ref={ref}
        type={type} // Use the type here
        {...props}
        >
            {children}
        </button>
    );
});

Button.displayName = "Button";

export default Button;
