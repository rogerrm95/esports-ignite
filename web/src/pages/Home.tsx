import { useEffect, useState } from 'react'
import { useUser } from '../hooks/useUser'
import axios from 'axios'
import * as Dialog from '@radix-ui/react-dialog'
// Slider //
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperProps } from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';
// Components //
import { CreateAdBanner } from '../components/CreateAdBanner'
import { GameCard } from '../components/GameCard'
import { CreateAdModal } from '../components/Modal/CreateAdModal'
import { Profile } from '../components/Profile'
// Imagens //
import LogoESports from '../assets/logo-esports.svg'
import { CaretLeft, CaretRight } from 'phosphor-react'
// Styles - Tailwind //
import '../styles/main.css'

interface Game {
    id: string,
    title: string,
    bannerUrl: string,
    _count: {
        Ads: number
    }
}

// SWIPER CONFIG //
const breakPointsConfig = {
    480: {
        slidesPerView: 2,
        spaceBetween: 20
    },
    640: {
        slidesPerView: 3,
        spaceBetween: 24
    },
    900: {
        slidesPerView: 4,
        spaceBetween: 24
    }
}

export function Home() {
    const { loginWithDiscord, userDiscord } = useUser()

    const [swiper, setSwiper] = useState<SwiperProps>({} as SwiperProps);
    const [games, setGames] = useState<Game[]>([])

    // Faz chamada á API e armazena os jogos no state //
    useEffect(() => {
        axios.get('http://localhost:8080/games').then(res => {
            setGames(res.data)
        })
    }, [])

    return (
        <div className='max-w-[1344px] mx-auto flex flex-col items-center my-8 px-4'>
            <Profile />

            <img src={LogoESports} alt="E-Sports" />

            <h1 className='xl:text-6xl md:text-5xl text-4xl text-white font-black mt-20 nlw-gradient'>
                Seu <span className='bg-nlw-gradient bg-clip-text text-transparent'>duo</span> está aqui.
            </h1>

            {/* LISTA DOS GAMES */}
            <div className='flex w-[100%] mt-16'>
                <button onClick={() => swiper.slidePrev()}>
                    <CaretLeft size={48} className='text-zinc-500' />
                </button>

                <Swiper onSwiper={(slider: any) => setSwiper(slider)} breakpoints={breakPointsConfig} style={{zIndex: 0}}>
                    {
                        games.map(game => (
                            <SwiperSlide key={game.id}>
                                <GameCard
                                    bannerUrl={game.bannerUrl}
                                    name={game.title}
                                    adsCount={game._count.Ads} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

                <button onClick={() => swiper.slideNext()}>
                    <CaretRight size={48} className='text-zinc-500' />
                </button>
            </div>

            <Dialog.Root>
                {/* ANUNCIAR - CONTAINER */}
                <CreateAdBanner />

                {/* MODAL - PUBLICAR ANUNCIO */}
                <CreateAdModal />
            </Dialog.Root>
        </div>
    )
}