import * as Dialog from "@radix-ui/react-dialog"
import { DeviceMobile, Headset, HouseLine, List, Note, SignIn, X } from "phosphor-react"
import { useNavigate } from "react-router-dom"
import { DropdownItem } from "./DropdownItem"


export function MenuDropdown() {
    const nagivate = useNavigate()

    return (
        <Dialog.Root modal={false}>
            <Dialog.Trigger
                className="md:hidden flex items-center justify-center h-10 py-2 px-3 bg-transparent border border-zinc-700 rounded-md hover:bg-violet-600 transition-colors"
                title="Menu"
            >
                <List size={16} className='text-white' />
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay />

                <Dialog.Content className="bg-[#2A2634] absolute top-[96px] right-0 md:hidden flex flex-col gap-4 max-h-[800px] h-full p-10 rounded-sm shadow-xl shadow-black">
                    <Dialog.Close className="text-zinc-200 self-center mb-3 hover:text-emerald-500 transition-colors">
                        <X size={24} weight='bold' />
                    </Dialog.Close>

                    <DropdownItem href="#home" target='_parent' label="Home" Icon={<HouseLine size={18} weight='bold' />} />
                    <DropdownItem href="#about" label="Sobre" Icon={<Note size={18} weight='bold' />} />
                    <DropdownItem href="#app" label="Aplicativo" Icon={<DeviceMobile size={18} weight='bold' />} />
                    <DropdownItem href="#contact" label="Fale conosco" Icon={<Headset size={18} weight='bold' />} />

                    <button
                        className='h-10 py-2 px-2 gap-3 flex items-center justify-center bg-violet-500 rounded-md hover:bg-violet-600 transition-colors mt-auto'
                        onClick={() => nagivate('/')}
                    >
                        <span className='text-white text-xs'>Acessar</span>
                        <SignIn size={20} color='#FFF' weight='bold' />
                    </button>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}