import * as SelectUI from '@radix-ui/react-select'
// Icon //
import { CaretDown, Check, GameController } from 'phosphor-react'
import { ReactNode } from 'react'

export type OptionsType = {
    key: string,
    value: string,
}

interface SelectProps extends SelectUI.SelectTriggerProps {
    options: OptionsType[],
    label: string,
    placeholder: string,
    name: string,
    onSelectedChange: (option: string) => void
    icon?: ReactNode
}

export function Select({ options, label, placeholder, icon = undefined, name, onSelectedChange, ...rest }: SelectProps) {
    return (
        <SelectUI.Root onValueChange={(option) => onSelectedChange(option)}>
            <SelectUI.Trigger
                aria-label={label}
                className='inline-flex items-center justify-between bg-zinc-900 py-3 px-4 rounded text-zinc-600 text-sm'
                {...rest}>
                <SelectUI.Value placeholder={placeholder} />
                <SelectUI.Icon>
                    <CaretDown size={16} />
                </SelectUI.Icon>
            </SelectUI.Trigger>

            <SelectUI.Portal>
                <SelectUI.Content className='bg-zinc-900 hidden rounded-md'>

                    <SelectUI.Viewport className='p-2'>

                        <SelectUI.Group>

                            <SelectUI.Label className='text-white font-bold flex items-center justify-center gap-2'>
                                {
                                    icon && (
                                        <SelectUI.Icon>
                                            {
                                                icon
                                            }
                                        </SelectUI.Icon>
                                    )
                                }
                                
                                {label}
                            </SelectUI.Label>

                            {
                                options.map((option) => (
                                    <SelectUI.Item
                                        key={option.key}
                                        value={option.key}
                                        className='mt-2 flex items-center gap-1 h-8 p-2 hover:bg-violet-500 text-white text-xs rounded cursor-pointer'>

                                        <SelectUI.ItemText>{option.value}</SelectUI.ItemText>

                                        <SelectUI.ItemIndicator>
                                            <Check size={16} />
                                        </SelectUI.ItemIndicator>
                                    </SelectUI.Item>
                                ))
                            }

                        </SelectUI.Group>
                    </SelectUI.Viewport>
                </SelectUI.Content>
            </SelectUI.Portal>


        </SelectUI.Root>
    )
}