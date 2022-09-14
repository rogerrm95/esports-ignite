// Styles - Tailwind //
import './styles/main.css'
// Imagens //
import LogoESports from '../src/assets/logo-esports.svg'
import { MagnifyingGlassPlus } from 'phosphor-react'

function App() {

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={LogoESports} alt="" />

      <h1 className='text-6xl text-white font-black mt-20 nlw-gradient'>
        Seu <span className='bg-nlw-gradient bg-clip-text text-transparent'>duo</span> está aqui.
      </h1>

      {/* LISTA DOS GAMES */}
      <div className='grid grid-cols-6 gap-6 mt-16'>
        <a className='relative rounded-lg overflow-hidden' href="">
          <img src='/game1.png' alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>League of Legends</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>

        <a className='relative rounded-lg overflow-hidden' href="">
          <img src='/game2.png' alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Dota 2</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>
        <a className='relative rounded-lg overflow-hidden' href="">
          <img src='/game3.png' alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>CS.GO</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>
        <a className='relative rounded-lg overflow-hidden' href="">
          <img src='/game4.png' alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Apex Legends</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>
        <a className='relative rounded-lg overflow-hidden' href="">
          <img src='/game5.png' alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Fortine</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>
        <a className='relative rounded-lg overflow-hidden' href="">
          <img src='/game6.png' alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>World of Warcraft</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>
      </div>

      {/* ANUNCIAR - CONTAINER */}
      <div className='pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8'>
        <div className='bg-[#2a2634] px-8 py-6 flex justify-between items-center'>
          <div>
            <strong className='text-2xl text-white block'>
              Não encontrou seu duo ?
            </strong>

            <span className='text-zinc-400 block'>
              Publique um anúncio para encontrar novos players!
            </span>
          </div>

          <button className='py-3 px-4 bg-violet-500 text-white rounded-lg hover:bg-violet-600 flex justify-center items-center'>
            <MagnifyingGlassPlus size={24} className='mr-3' />
            Publicar anúncio
          </button>
        </div>
      </div>

    </div>
  )
}

export default App
