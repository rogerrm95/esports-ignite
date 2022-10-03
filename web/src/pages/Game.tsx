import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
// Components //
import { Profile } from "../components/Profile";
import { DuoCard } from "../components/DuoCard";
// Images //
import LogoESports from '../assets/logo-esports.svg'

type GameParams = {
    id: string,
    title: string,
    bannerUrl: string
}

type AdsParams = {
    id: string,
    bannerUrl: string,
    username: string,
    userId: string,
    hourEnd: string,
    hourStart: string,
    useVoiceChannel: boolean,
    weekDays: string[],
    yearsPlaying: number,
}


export function Game() {
    const location = useLocation()
    const state = location.state as GameParams
    const params = useParams()

    const [ads, setAds] = useState<AdsParams[]>([])

    // Carregar os anúncios da API //
    useEffect(() => {
        async function loadAds() {
            await axios.get(`http://localhost:8080/games/${params.id}/ads`)
                .then(res => setAds(res.data))
        }

        loadAds()
    }, [params])

    return (
        <div className='max-w-[1344px] mx-auto flex flex-col items-center my-8 px-4'>
            <Profile />

            <img src={LogoESports} alt="E-Sports" />

            {/* ANÚNCIOS */}
            <div className="w-[100%] lg:h-[436px] flex flex-col lg:flex-row items-center lg:items-start gap-10 mt-12 px-10 py-8 rounded">

                {/* JOGO SELECIONADO */}
                <div className="flex flex-col items-center gap-4 ">
                    <h1 className="text-zinc-300 font-black text-xl">
                        {state.title}
                    </h1>

                    <img src={state.bannerUrl} alt={state.title} className='w-[300px] rounded shadow-[0_1px_20px_10px_#0c0c0ca9]' />
                </div>

                {/* LISTA DE ANÚNCIOS */}
                <div className="flex flex-col gap-8 self-start w-[100%] h-[100%] overflow-y-auto pr-2">
                    <h2 className='bg-nlw-gradient bg-clip-text text-transparent text-xl font-bold'>
                        Escontre seu duo e bora se conectar:
                    </h2>

                    <ul className="flex flex-col w-[100%] gap-3">
                        {
                            ads.map(ad => (
                                <DuoCard data={ad} key={ad.id} />
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}