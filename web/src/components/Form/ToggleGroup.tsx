import * as ToggleGroupUI from '@radix-ui/react-toggle-group'
import { useState } from 'react'

interface ToggleGroupProps {
    ariaLabel?: string,
}

export function ToggleGroup({ ariaLabel = '' }: ToggleGroupProps) {
    const [weekDays, setWeekDays] = useState<string[]>()

    return (
        <ToggleGroupUI.Root
            type='multiple'
            className='grid grid-cols-4 gap-2'
            onValueChange={setWeekDays}
            value={weekDays}
            aria-label={ariaLabel}>

            <ToggleGroupUI.ToggleGroupItem
                value="0"
                aria-label='Domingo'
                className={`w-8 h-8 rounded bg-zinc-900 ${weekDays?.includes('0') ? 'bg-violet-500' : ''}`}>
                D
            </ToggleGroupUI.ToggleGroupItem>

            <ToggleGroupUI.ToggleGroupItem
                value="1"
                aria-label='Segunda-Feira'
                className={`w-8 h-8 rounded bg-zinc-900 ${weekDays?.includes('1') ? 'bg-violet-500' : ''}`}>
                S
            </ToggleGroupUI.ToggleGroupItem>

            <ToggleGroupUI.ToggleGroupItem
                value="2"
                aria-label='Terça-Feira'
                className={`w-8 h-8 rounded bg-zinc-900 ${weekDays?.includes('2') ? 'bg-violet-500' : ''}`}>
                T
            </ToggleGroupUI.ToggleGroupItem>

            <ToggleGroupUI.ToggleGroupItem
                value="3"
                aria-label='Quarta-Feira'
                className={`w-8 h-8 rounded bg-zinc-900 ${weekDays?.includes('3') ? 'bg-violet-500' : ''}`}>
                Q
            </ToggleGroupUI.ToggleGroupItem>

            <ToggleGroupUI.ToggleGroupItem
                value="4"
                aria-label='Quinta-Feira'
                className={`w-8 h-8 rounded bg-zinc-900 ${weekDays?.includes('4') ? 'bg-violet-500' : ''}`}>
                Q
            </ToggleGroupUI.ToggleGroupItem>

            <ToggleGroupUI.ToggleGroupItem
                value="5"
                aria-label='Sexta-Feira'
                className={`w-8 h-8 rounded bg-zinc-900 ${weekDays?.includes('5') ? 'bg-violet-500' : ''}`}>
                S
            </ToggleGroupUI.ToggleGroupItem>

            <ToggleGroupUI.ToggleGroupItem
                value="6"
                aria-label='Sábado'
                className={`w-8 h-8 rounded bg-zinc-900 ${weekDays?.includes('6') ? 'bg-violet-500' : ''}`}>
                S
            </ToggleGroupUI.ToggleGroupItem>
        </ToggleGroupUI.Root>
    )
}