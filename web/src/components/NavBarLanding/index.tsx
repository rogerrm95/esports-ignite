import * as Dialog from "@radix-ui/react-dialog"
// Icons & Images //
import { List, SignIn } from "phosphor-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoESports from '../../assets/logo-esports.svg'
import { MenuDropdown } from "../MenuDropdown";

export function NavBarLanding() {
    const navigate = useNavigate()

    return (
        <header className="flex justify-between items-center py-8 px-4 shadow-lg bg-[#221e2c80] w-full">
            <img src={LogoESports} alt="Logo E-Sports" className='w-[96px] h-auto' title="E-Sports" />

            <nav className='hidden md:flex gap-8 items-center justify-center'>
                <a href="#home" className='font-landing-page text-white text-lg hover:opacity-50 transition-opacity'>Home</a>
                <a href="#about" className='font-landing-page text-white text-lg hover:opacity-50 transition-opacity'>Sobre</a>
                <a href="#app" className='font-landing-page text-white text-lg hover:opacity-50 transition-opacity'>Aplicativo</a>
                <a href="#contact" className='font-landing-page text-white text-lg hover:opacity-50 transition-opacity'>Fale conosco</a>
            </nav>

            {/* MODAL */}
            <MenuDropdown />

            <button
                className='h-10 py-2 px-2 gap-3 md:flex hidden items-center justify-center bg-violet-500 rounded-md hover:bg-violet-600 transition-colors'
                onClick={() => { navigate('/login') }}
            >
                <span className='text-white text-xs hidden lg:block'>Acessar</span>
                <SignIn size={20} color='#FFF' weight='bold' />
            </button>
        </header>
    )
}