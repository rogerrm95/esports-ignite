import * as SelectUI from '@radix-ui/react-select'
// Icon //
import { CaretDown, Check, GameController } from 'phosphor-react'

type Game = {
    id: string,
    title: string,
}

interface SelectProps extends SelectUI.SelectTriggerProps {
    options: Game[],
    label: string,
    placeholder: string,
    name: string,
    onSelectedChange: (option: string) => void
}

export function Select({ options, label, placeholder, name, onSelectedChange, ...rest }: SelectProps) {
    return (
        <SelectUI.Root onValueChange={(option) => onSelectedChange(option)}>
            <SelectUI.Trigger
                aria-label={label}
                className='inline-flex items-center justify-between bg-zinc-900 py-3 px-4 rounded text-zinc-500 text-sm'
                {...rest}>
                <SelectUI.Value placeholder={placeholder}/>
                <SelectUI.Icon>
                    <CaretDown size={16} />
                </SelectUI.Icon>
            </SelectUI.Trigger>

            <SelectUI.Portal>
                <SelectUI.Content className='bg-zinc-900 hidden rounded-md'>

                    <SelectUI.Viewport className='p-2'>

                        <SelectUI.Group>

                            <SelectUI.Label className='text-white font-bold flex items-center justify-center gap-2'>
                                <GameController size={20} />
                                {label}
                            </SelectUI.Label>

                            {
                                options.map((option) => (
                                    <SelectUI.Item
                                        key={option.id}
                                        value={option.id}
                                        className='mt-2 flex items-center gap-1 h-8 p-2 hover:bg-violet-500 text-white text-xs rounded cursor-pointer'>

                                        <SelectUI.ItemText>{option.title}</SelectUI.ItemText>

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