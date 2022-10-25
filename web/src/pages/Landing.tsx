// Images //
import { SignIn } from 'phosphor-react'
import LogoESports from '../assets/logo-esports.svg'
import HeroImage from '../assets/hero-image.png'

export function Landing() {
    return (
        <div className="h-screen flex flex-col relative">
            <header className="flex justify-between items-center py-8 px-4 shadow-lg bg-[#221e2c80] w-full sticky top-0">
                <img src={LogoESports} alt="Logo E-Sports" className='w-[96px] h-auto' />

                <nav className='flex gap-8 items-center justify-center'>
                    {/* <a href="#home" className='bg-nlw-gradient bg-clip-text text-transparent font-landing-page font-bold text-base'>Home</a> */}
                    <a href="#home" className='font-landing-page text-white text-lg'>Home</a>
                    <a href="#about" className='font-landing-page text-white text-lg'>Sobre</a>
                    <a href="#app" className='font-landing-page text-white text-lg'>Aplicativo</a>
                    <a href="#contact" className='font-landing-page text-white text-lg'>Fale conosco</a>
                </nav>

                <button className='h-10 py-2 px-3 flex gap-3 items-center justify-center bg-violet-500 rounded-md hover:bg-violet-600 transition-colors'>
                    <span className='text-white text-xs'>Acessar</span>
                    <SignIn size={20} color='#FFF' weight='bold' />
                </button>
            </header>

            <main className='h-screen max-w-[1440px] w-full mx-auto'>
                {/* LANDING PAGE */}
                <section className='h-full flex items-center justify-center lg:justify-between px-6 flex-col lg:flex-row' id='home'>
                    <div className='flex flex-col gap-2 max-w-[600px]'>
                        <h1 className='text-[32px] font-bold text-white'>A plataforma digital perfeita para encontrar seu
                            <strong className='bg-nlw-gradient bg-clip-text text-transparent'> Duo.</strong>
                        </h1>

                        <span className='max-w-[656px] text-zinc-400'>
                            Conheça nossa plataforma digital e encontre novos amigos para jogar aquele seu jogo favorito.
                        </span>

                        <div className='bg-nlw-gradient flex items-center justify-center h-12 rounded-md w-[172px] mt-6'>
                            <button className='h-[46px] w-[170px] bg-[#121214] py-2 px-3 rounded-md'>
                                <span className='bg-nlw-gradient bg-clip-text text-transparent font-semibold'>
                                    Conectar-se
                                </span>
                            </button>
                        </div>
                    </div>

                    <img src={HeroImage} alt="" className='w-[550px] h-auto hidden lg:block' />
                </section>

                {/* SOBRE */}
                <section className='h-full flex flex-col-reverse md:flex-row' id='about'>
                    <div className='flex-1 bg-holo bg-cover bg-no-repeat h-full pt-8 px-4 flex flex-col items-center justify-center gap-[96px]'>
                        <img src={LogoESports} alt="" />

                        <div className='flex justify-center items-center gap-6 px-4'>
                            {/* CONTINUAR ... */}
                            {/* CARDS ... */}
                        </div>
                    </div>

                    <div className='flex-1 flex flex-col justify-center gap-6 p-6'>
                        <h2 className='bg-nlw-gradient bg-clip-text text-transparent font-semibold text-4xl text-center font-landing-page leading-relaxed'>
                            Conheça nossa plataforma
                        </h2>

                        <article className='text-zinc-400 text-justify font-light leading-relaxed first-letter:text-[32px]'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </article>

                        <article className='text-zinc-400 text-justify font-light leading-relaxed first-letter:text-[32px]'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </article>
                    </div>
                </section>
                {/* APLICATIVO */}
                <section className='h-full' id='app'>Baixe nosso App</section>
                {/* FALE CONOSCO */}
                <section className='h-full' id='contact'>Fale conosco</section>
            </main>

            <footer className=''>

            </footer>
        </div>
    )
}