// Imagens //
import { DiscordLogo, Spinner } from 'phosphor-react'
import { useEffect } from 'react'
import LogoESports from '../assets/logo-esports.svg'
import { useUser } from '../hooks/useUser'

export function Login() {
    const { isLoading, loginWithDiscord } = useUser()

    useEffect(() => {
        loginWithDiscord()
    }, [])

    function handleLoginDiscord() {
        window.open(import.meta.env.VITE_DISCORD_URL_REDIRECT)
    }

    return (
        <div className='max-w-[1344px] mx-auto flex flex-col items-center justify-center my-20 px-4'>
            <img src={LogoESports} alt="" />

            <div className='max-w-[500px] w-[100%] mx-auto mt-20 flex flex-col p-6 bg-[#2a2634bb] rounded-md shadow-2xl shadow-black'>
                {
                    isLoading ? (
                        <div className='flex flex-col items-center justify-center w-[100%] h-[304px] text-center'>
                            <Spinner size={24} className='text-zinc-200 animate-spin-slow' weight='bold'/>
                            <span className='text-zinc-200'>
                                Carregando...
                            </span>
                        </div>
                    ) : (
                        <>
                            <h1 className='text-white text-2xl font-bold mb-4'>
                                Entrar
                            </h1>

                            <p className='text-zinc-400 text-sm mb-6'>
                                Entre com sua conta do discord e encontre seu Duo!!
                            </p>

                            <button
                                className='flex items-center justify-center gap-2 my-6 bg-violet-500 hover:bg-violet-600 p-1 h-12 rounded-md'
                                onClick={handleLoginDiscord}>
                                <DiscordLogo size={20} className='text-white' weight='bold' />

                                <span className='text-white text-sm font-semibold'>
                                    Conectar com Discord
                                </span>
                            </button>

                            <footer className='self-center mt-4 flex items-center'>
                                <span className='text-xs text-zinc-500'>
                                    Não possui conta ?
                                </span>

                                <a
                                    className='text-xs text-violet-600 font-bold ml-1'
                                    href="https://discord.com/register"
                                    target='_blank'
                                    rel="noreferrer noopener">
                                    Clique aqui 🚀
                                </a>
                            </footer>
                        </>
                    )
                }
            </div>
        </div>
    )
}