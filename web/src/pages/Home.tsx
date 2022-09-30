import { useEffect, useState } from 'react'
import { useUser } from '../hooks/useUser'
import axios from 'axios'
import * as Dialog from '@radix-ui/react-dialog'
// Components //
import { CreateAdBanner } from '../components/CreateAdBanner'
import { GameCard } from '../components/GameCard'
import { CreateAdModal } from '../components/Modal/CreateAdModal'
// Imagens //
import LogoESports from '../assets/logo-esports.svg'
// Styles - Tailwind //
import '../styles/main.css'
import { Profile } from '../components/Profile'

interface Game {
    id: string,
    title: string,
    bannerUrl: string,
    _count: {
        Ads: number
    }
}

export function Home() {
    const { loginWithDiscord, userDiscord } = useUser()

    const [games, setGames] = useState<Game[]>([])

    useEffect(() => {
        axios.get('http://localhost:8080/games').then(res => {
            setGames(res.data)
        })
    }, [])

    return (
        <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20 px-4'>
            <Profile />

            <img src={LogoESports} alt="" />

            <h1 className='xl:text-6xl md:text-5xl text-4xl text-white font-black mt-20 nlw-gradient'>
                Seu <span className='bg-nlw-gradient bg-clip-text text-transparent'>duo</span> está aqui.
            </h1>

            {/* LISTA DOS GAMES */}
            <div className='grid grid-cols-6 gap-6 mt-16'>
                {
                    games.map(game => (
                        <GameCard
                            key={game.id}
                            bannerUrl={game.bannerUrl}
                            name={game.title}
                            adsCount={game._count.Ads} />
                    ))
                }
            </div>

            <Dialog.Root>
                {/* ANUNCIAR - CONTAINER */}
                <CreateAdBanner />

                {/* MODAL - PUBLICAR ANUNCIO */}
                <CreateAdModal/>
            </Dialog.Root>
        </div>
    )
}