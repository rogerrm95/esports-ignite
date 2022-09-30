import { Fragment, InputHTMLAttributes } from "react";
import { useFormContext } from 'react-hook-form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    registerName?: string | undefined
}

export function Input({ registerName = undefined, ...rest }: InputProps) {
    const { register } = useFormContext()
    return (
        <Fragment>
            {
                registerName ? (
                    <input
                        className='bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500'
                        {...register(registerName)}
                        {...rest} />
                ) : (
                    <input
                        className='bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500'
                        {...rest} />
                )
            }
        </Fragment>
    )
}
