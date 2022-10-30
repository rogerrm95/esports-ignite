import Scroll from 'scrollreveal'

// Components //
import { DetailsCard } from '../components/Card/DetailsCard'
import { ContactUsForm } from '../components/Form/ContactUsForm'
import { NavBarLanding as Header } from '../components/NavBarLanding'
import { ScrollToTopButton } from '../components/Buttons/ScrollToTopButton'
// Images & Icons //
import { ArrowUp, WarningOctagon } from 'phosphor-react'
import ControllerImage from '../assets/icons/controller.png'
import ClockImage from '../assets/icons/clock.png'
import DiscordImage from '../assets/icons/discord.png'
import FreeImage from '../assets/icons/no-cash.png'
import HeroImage from '../assets/hero-image.png'
import LogoESports from '../assets/logo-esports.svg'
import CellphonesImage from '../assets/cellphones.png'
import AndroidImage from '../assets/icons/android.png'
import IoSImage from '../assets/icons/ios.png'
import QuestionsIcon from '../assets/icons/questions.png'
import TipIcon from '../assets/icons/tip.png'
import SuportIcon from '../assets/icons/suport-woman.png'
import GradientGithub from '../assets/icons/gradient-github.png'
import GradientLinkedin from '../assets/icons/gradient-linkedin.png'

// Scroll Reveal Options //
const SCROLL_REVEAL_OPTIONS_DEFAULT = {
    reset: true,
    delay: 250,
    origin: 'top'
}

export function Landing() {
    // SCROLL REVEAL SECTIONS //
    Scroll().reveal("#home", SCROLL_REVEAL_OPTIONS_DEFAULT)
    Scroll().reveal("#about", SCROLL_REVEAL_OPTIONS_DEFAULT)
    Scroll().reveal("#app", SCROLL_REVEAL_OPTIONS_DEFAULT)
    Scroll().reveal("#contact", SCROLL_REVEAL_OPTIONS_DEFAULT)

    return (
        <div className="h-screen flex flex-col relative scroll-smooth">
            <Header />

            <main className='max-w-[1440px] w-full mx-auto flex flex-col'>
                {/* LANDING PAGE */}
                <section id='home' className='h-[979px] flex items-center justify-center lg:justify-between px-6 flex-col lg:flex-row'>
                    <div className='flex flex-col gap-2 max-w-[600px]'>
                        <h1 className='text-[40px] font-bold text-white'>A plataforma digital perfeita para encontrar seu
                            <strong className='bg-gradient-to-r from-[#9572FC] via-[#43E7AD] to-[#E1D55D] bg-clip-text text-transparent'> Duo.</strong>
                        </h1>

                        <span className='max-w-[656px] text-zinc-400'>
                            Conheça nossa plataforma digital e encontre novos amigos para jogar aquele seu jogo favorito.
                        </span>

                        <div className='bg-gradient-to-r from-[#9572FC] via-[#43E7AD] to-[#E1D55D] flex items-center justify-center h-12 rounded-md w-[172px] mt-6'>
                            <button className='h-[46px] w-[170px] bg-[#121214] py-2 px-3 rounded-md'>
                                <span className='bg-gradient-to-r from-[#9572FC] via-[#43E7AD] to-[#E1D55D] bg-clip-text text-transparent font-semibold'>
                                    Conectar-se
                                </span>
                            </button>
                        </div>
                    </div>

                    <img src={HeroImage} alt="Hero Image" title='Conectando ao seus amigos' className='w-[550px] h-auto hidden lg:block' />
                </section>

                {/* SOBRE */}
                <section id='about' className='flex flex-col lg:flex-row-reverse'>
                    {/* ARTIGO */}
                    <div className='h-[979px] flex flex-col gap-6 p-6'>
                        <h2 className='bg-gradient-to-r from-[#9572FC] via-[#43E7AD] to-[#E1D55D] bg-clip-text text-transparent font-semibold text-4xl text-center font-landing-page leading-relaxed'>
                            Conheça nossa plataforma
                        </h2>

                        <article className='flex flex-col gap-6 bg-shadow-light h-full'>
                            <p className='text-zinc-400 text-justify font-light leading-relaxed first-letter:text-[32px]'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged.
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>

                            <p className='text-zinc-400 text-justify font-light leading-relaxed first-letter:text-[32px]'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged.
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>

                        </article>
                    </div>

                    {/* BANNER */}
                    <div className='h-[979px] flex flex-col items-center justify-center gap-[96px] bg-holo bg-cover bg-no-repeat pt-8 px-4 '>
                        <img src={LogoESports} className='w-[400px]' alt="Logo E-Sports" />

                        {/* CARDS ... */}
                        <div className='flex justify-center gap-8 p-4'>
                            <DetailsCard
                                title='Jogos'
                                description='Crie ou encontre diversos anúncios dos jogos mais badalados da atualidade e faça novos amigos.'
                                image={ControllerImage} />

                            <DetailsCard
                                title='Discord'
                                description='Encontre novos Duo’s e se conectem no Discord para marcarem de jogar juntos.'
                                image={DiscordImage} />

                            <DetailsCard
                                title='Horário'
                                description='Crie ou encontre anúncios de jogos com base no melhor horário para você.'
                                image={ClockImage} />

                            <DetailsCard
                                title='Gratuito'
                                description='Plataforma totalmente livre e gratuita para vocês jogadores.'
                                image={FreeImage} />
                        </div>
                    </div>
                </section>

                {/* APLICATIVO */}
                <section id='app' className='flex flex-col lg:flex-row-reverse mt-8'>
                    <div className='flex-1 mb-6'>
                        <h2 className='bg-gradient-to-r from-[#9572FC] via-[#43E7AD] to-[#E1D55D] bg-clip-text text-transparent font-semibold text-4xl text-center font-landing-page leading-relaxed'>
                            Baixe nosso App
                        </h2>

                        <figure className='flex flex-col items-center h-[735px] justify-center bg-shadow-light'>
                            <img src={CellphonesImage} className='ml-[128px]' alt="Celulares" title='Celulares com a tela do APP' />

                            <figcaption className='text-2xl font-landing-page font-medium text-white'>
                                App E-Sport NLW
                            </figcaption>
                        </figure>
                    </div>

                    <div className='flex-1 flex flex-col lg:justify-center gap-10 p-6'>
                        <p className=' text-zinc-400 font-landing-page font-light text-justify leading-relaxed first-letter:text-2xl first-letter:font-semibold'>
                            Com o App E-Sports NLW fica mais fácil e acessível para você,
                            jogador caro, encontrar novas CIA’s para jogar aquele seu jogo favorito,
                            pois nossa aplicação não se limita apenas a web, disponibilizando também nosso APP,
                            de forma totalmente
                            <strong className='text-violet-500 font-bold'> GRATUITA.</strong>
                        </p>

                        <p className='text-zinc-400 font-landing-page font-light text-justify leading-relaxed first-letter:text-2xl first-letter:font-semibold'>
                            Basta acessar a loja do seu dispositivo, se conectar e começar a utilizar nossos serviços.
                            O app está disponível as plataformas do Android e IoS.
                        </p>

                        <div className='flex items-center justify-center gap-4'>
                            <DetailsCard title='Android' image={AndroidImage} />
                            <DetailsCard title='Android' image={IoSImage} />
                        </div>

                        <div className='flex items-center gap-2 text-violet-800 mt-[64px]'>
                            <WarningOctagon size={32} />
                            <p className='w-[400px] text-sm font-landing-page'>
                                Lembrando que é necessário ter uma conta no Discord para realizar o login na plataforma.
                            </p>
                        </div>
                    </div>
                </section>

                {/* FALE CONOSCO */}
                <section id='contact' className='flex flex-col lg:flex-row'>
                    {/* BANNER */}
                    <div className='h-[979px] flex flex-col items-center justify-center gap-[96px] bg-holo bg-cover bg-no-repeat pt-8 px-4 '>
                        <img src={LogoESports} className='w-[400px]' alt="Logo E-Sports" />

                        {/* CARDS ... */}
                        <div className='flex justify-center gap-8 p-4'>
                            <DetailsCard
                                title='Dúvidas'
                                description='Dúvidas referente a nossa plataforma.'
                                image={QuestionsIcon} />

                            <DetailsCard
                                title='Ideias'
                                description='Pintou umas ideias maluca? nos conte melhor.'
                                image={TipIcon} />

                            <DetailsCard
                                title='Suporte'
                                description='Suporte técnico totalmente treinado para lhe atender.'
                                image={SuportIcon} />
                        </div>
                    </div>

                    {/* FORMULARIOS... */}
                    <ContactUsForm />
                </section>
            </main>

            {/* FOOTER */}
            <footer className='max-w-[1440px] w-full mx-auto flex justify-between items-center bg-footer-bg p-6'>
                <span className='text-white text-[10px] text-center font-bold select-none'>
                    Desenvolvido com <strong className='text-red-500'>❤</strong> por
                    <br /> Rogério Marques
                </span>

                <div className='flex gap-5 items-center'>
                    <a className='flex flex-col gap-2 items-center cursor-pointer hover:opacity-75 transition-opacity' href='https://github.com/rogerrm95'>
                        <img src={GradientGithub} className='w-8 h-8' alt="Github" title='Github' />
                        <span className='text-xs text-white font-semibold'>GitHub</span>
                    </a>

                    <a className='flex flex-col gap-2 items-center cursor-pointer hover:opacity-75 transition-opacity' href='https://www.linkedin.com/in/rogeriomarquesfernandes/'>
                        <img src={GradientLinkedin} className='w-8 h-8' alt="Linkedin" title='Linkedin' />
                        <span className='text-xs text-white font-semibold'>Linkedin</span>
                    </a>
                </div>

                <span className='text-white text-[10px] text-right'>
                    © Copyright - 2022
                </span>
            </footer>

            {/* SCROLL TO TOP BUTTON */}
            <ScrollToTopButton aria-label='Ir até o topo da página'>
                <ArrowUp size={20} weight='bold' className='text-white' />
            </ScrollToTopButton>
        </div >
    )
}