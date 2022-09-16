// Styles - Tailwind //
import './styles/main.css'
// Components //
import { CreateAdBanner } from './components/CreateAdBanner'
import { GameCard } from './components/GameCard'
// Imagens //
import LogoESports from '../src/assets/logo-esports.svg'

function App() {

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={LogoESports} alt="" />

      <h1 className='text-6xl text-white font-black mt-20 nlw-gradient'>
        Seu <span className='bg-nlw-gradient bg-clip-text text-transparent'>duo</span> está aqui.
      </h1>

      {/* LISTA DOS GAMES */}
      <div className='grid grid-cols-6 gap-6 mt-16'>
        <GameCard bannerUrl='/game1.png' name='League of Legends' adsCount={4} />
        <GameCard bannerUrl='/game2.png' name='Dota 2' adsCount={4} />
        <GameCard bannerUrl='/game3.png' name='CS.GO' adsCount={4} />
        <GameCard bannerUrl='/game4.png' name='Apex Legends' adsCount={4} />
        <GameCard bannerUrl='/game5.png' name='Fortine' adsCount={4} />
        <GameCard bannerUrl='/game6.png' name='World of Warcraft' adsCount={4} />
      </div>

      {/* ANUNCIAR - CONTAINER */}
      <CreateAdBanner />

    </div>
  )
}

export default App
