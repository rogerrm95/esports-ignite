import { WarningCircle } from "phosphor-react";
import { HTMLAttributes } from "react";

interface ErrorMessageProps extends HTMLAttributes<HTMLSpanElement> {
    message: string | undefined | null,
}

export function ErrorMessage({ message = '', ...rest }: ErrorMessageProps) {
    return (
        <span className="text-xs text-red-700 flex items-center gap-1 ml-2" {...rest}>
            <WarningCircle size={14} />
            {message}
        </span>
    )
}