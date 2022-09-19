import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }

export function Input({ ...rest }: InputProps) {
    return (
        <input
            className='bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500'
            {...rest} />
    )
}