import { AnchorHTMLAttributes } from 'react'
import * as Dialog from "@radix-ui/react-dialog"

interface DropdownItem extends AnchorHTMLAttributes<HTMLAnchorElement> {
    label: string
    Icon?: JSX.Element
}

export function DropdownItem({ label, Icon, ...rest }: DropdownItem) {
    return (
        <a className='flex gap-3 items-center text-zinc-200 font-landing-page font-regular pl-2 py-2 rounded-3xl hover:text-violet-500 transition-colors' {...rest}>
            {Icon && Icon}

            <span>
                {label}
            </span>
        </a>
    )
}