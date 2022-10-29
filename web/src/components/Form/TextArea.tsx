import { LabelHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react"

interface TextAreaRootProps {
    children: ReactNode
}

function TextAreaRoot({ children }: TextAreaRootProps) {
    return (
        <div className="flex flex-col gap-4">
            {children}
        </div>
    )
}

interface TextAreaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> { }

function TextAreaField({ ...rest }: TextAreaFieldProps) {
    return (
        <textarea className="resize-none bg-zinc-900 text-white text-sm placeholder:text-zinc-600 p-3 leading-relaxed h-[160px] rounded outline-none"  {...rest} />
    )
}

interface TextAreaLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    children: ReactNode
}

function TextAreaLabel({ children, ...rest }: TextAreaLabelProps) {
    return (
        <label className="text-zinc-300 font-semibold flex justify-between" {...rest}>
            {
                children
            }
        </label>
    )
}

TextAreaRoot.displayName = "TextArea.Root"
TextAreaField.displayName = "TextArea.Field"
TextAreaLabel.displayName = "TextArea.Label"


export const TextArea = {
    Root: TextAreaRoot,
    Field: TextAreaField,
    Label: TextAreaLabel
}