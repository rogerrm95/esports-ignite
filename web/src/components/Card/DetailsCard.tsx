import { HTMLAttributes } from "react"

interface DetailsCardProps extends HTMLAttributes<HTMLDivElement> {
    title: string,
    description?: string,
    image?: string
}

export function DetailsCard({ title, description = '', image, ...rest }: DetailsCardProps) {
    return (
        <div className='flex flex-col items-center gap-4 max-w-[112px]' {...rest}>
            <div className='w-[96px] h-[96px] p-2 flex flex-col items-center justify-center gap-2 bg-zinc-900 rounded-md shadow-black shadow-lg'>
                {
                    image && <img src={image} alt={title} title={title} className='w-12 h-auto' />
                }

                <span className='text-zinc-100 text-xs text-center font-landing-page font-medium'>
                    {title}
                </span>
            </div>

            {
                description && (
                    <span className='text-center text-xs text-zinc-100 font-landing-page leading-relaxed'>
                        {description}
                    </span>
                )
            }
        </div>
    )
}