import { InputHTMLAttributes, LabelHTMLAttributes, ReactNode } from "react";
import { useFormContext } from 'react-hook-form'

interface InputRootProps {
    children: ReactNode
}

interface InputLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    children: ReactNode
}

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string
}

function InputRoot({ children, ...rest }: InputRootProps) {
    return (
        <div className="flex flex-col gap-2" {...rest}>
            {
                children
            }
        </div>
    )
}

function InputLabel({ children, ...rest }: InputLabelProps) {
    return (
        <label className="text-zinc-300 font-semibold flex justify-between" {...rest}>
            {
                children
            }
        </label>
    )
}

function InputField({ name, ...rest }: InputFieldProps) {
    const { register } = useFormContext()

    return (
        <input
            className='bg-zinc-900 py-3 px-4 rounded placeholder:text-zinc-600 text-zinc-300 text-sm font-semibold'
            {...register(name)}
            {...rest} />
    )
}

InputRoot.displayName = "Input.Root"
InputLabel.displayName = "Input.Label"
InputField.displayName = "Input.Field"

export const Input = {
    Root: InputRoot,
    Label: InputLabel,
    Field: InputField
}

