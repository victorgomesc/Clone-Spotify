import { Home as HomeIcon,
   Search,
   Library,
   Plus,
   ChevronLeft,
   ChevronRight,
   Play,
   Shuffle,
   SkipBack,
   SkipForward,
   Repeat,
   Mic2,
   LayoutList,
   Laptop2,
   Volume,
   Maximize2, 
       } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
      <aside className="w-72 bg-zinc-950 p-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full" />
          <div className="w-3 h-3 bg-yellow-500 rounded-full" />
          <div className="w-3 h-3 bg-green-500 rounded-full" />
        </div>
        <nav className="space-y-5 mt-10">
          <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
            <HomeIcon />
            Home
          </a>
          <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
            <Search />
            Search
          </a>
          <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
            <Library />
            Your Libary
          </a>
        </nav>

        <nav className="space-y-5 mt-10 pt-10 border-t border-zinc-800">
          <a href='' className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
          <Plus />
            Add new playlist
            </a>
        </nav>

        <nav className="mt-5 pt-5 border-t border-zinc-950 flex flex-col gap-3">
          <a href='' className="text-sm text-zinc-400 hover:text-zinc-100">Forró</a>
          <a href='' className="text-sm text-zinc-400 hover:text-zinc-100">Forró Antigas</a>
          <a href='' className="text-sm text-zinc-400 hover:text-zinc-100">Rock</a>
          <a href='' className="text-sm text-zinc-400 hover:text-zinc-100">Classicos do Rock</a>
          <a href='' className="text-sm text-zinc-400 hover:text-zinc-100">Pagode</a>
          <a href='' className="text-sm text-zinc-400 hover:text-zinc-100">Sertanejo</a>
          <a href='' className="text-sm text-zinc-400 hover:text-zinc-100">Sertanejo Antigas</a>
          <a href='' className="text-sm text-zinc-400 hover:text-zinc-100">Bob Marley</a>
          <a href='' className="text-sm text-zinc-400 hover:text-zinc-100">Eletronicas</a>
          <a href='' className="text-sm text-zinc-400 hover:text-zinc-100">internacionais</a>
          <a href='' className="text-sm text-zinc-400 hover:text-zinc-100">Funck</a>
          <a href='' className="text-sm text-zinc-400 hover:text-zinc-100">This is Felipe Amorin</a>
        </nav>
      </aside>
      <main className="flex-1 p-6"> 
        <div className="flex items-center gap-4">
          <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
          </button>
          <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
          </button>
        </div>

        <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

        <div className="grid grid-cols-3 gap-4 mt-4">
          <a href='#' className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
            <Image src="/assets/album1.jpg" width={104} height={104} alt='Capa do album' />
            <strong>Classicos do Rock</strong>

            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible" >
              <Play />
            </button>
          </a>
          <a href='#' className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
            <Image src="/assets/album2.jpg" width={104} height={104} alt='Capa do album' />
            <strong>Forró</strong>

            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible" >
              <Play />
            </button>
          </a>
          <a href='#' className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
            <Image src="/assets/album3.jpg" width={104} height={104} alt='Capa do album' />
            <strong>Sertanejo</strong>

            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible" >
              <Play />
            </button>
          </a>
          <a href='#' className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
            <Image src="/assets/album4.jpg" width={104} height={104} alt='Capa do album' />
            <strong>This is Felipe Amorin</strong>

            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible" >
              <Play />
            </button>
          </a>
          <a href='#' className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
            <Image src="/assets/album5.jpg" width={104} height={104} alt='Capa do album' />
            <strong>Funck</strong>

            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible" >
              <Play />
            </button>
          </a>
          <a href='#' className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
            <Image src="/assets/album6.jpg" width={104} height={104} alt='Capa do album' />
            <strong>Bob Marley</strong>

            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible" >
              <Play />
            </button>
          </a>
        </div>

        <h2 className="font-semibold text-xl mt-10">Made For Victor Gomes</h2>

        <div className="grid grid-cols-6 gap-4 mt-4">
          <a href='#' className="bg-white/5 p-3 rounded rounded-md flex flex-col gap-2 hover:bg-white/10" > 
            <Image src="/assets/album5.jpg" className="w-full" width={104} height={104} alt='Capa do album' />
            <strong className="font-semibold">Dayli mix 1</strong>
            <span className="text-sm text-zinc-500">Mc PH, Mc Ryan SP</span>
          </a>
          <a href='#' className="bg-white/5 p-3 rounded rounded-md flex flex-col gap-2 hover:bg-white/10" > 
            <Image src="/assets/album2.jpg" className="w-full" width={104} height={104} alt='Capa do album' />
            <strong className="font-semibold">Dayli mix 2</strong>
            <span className="text-sm text-zinc-500">João Gomes</span>
          </a>
          <a href='#' className="bg-white/5 p-3 rounded rounded-md flex flex-col gap-2 hover:bg-white/10" > 
            <Image src="/assets/album3.jpg" className="w-full" width={104} height={104} alt='Capa do album' />
            <strong className="font-semibold">Dayli mix 3</strong>
            <span className="text-sm text-zinc-500">Gustavo Lima</span>
          </a>
          <a href='#' className="bg-white/5 p-3 rounded rounded-md flex flex-col gap-2 hover:bg-white/10" > 
            <Image src="/assets/album6.jpg" className="w-full" width={104} height={104} alt='Capa do album' />
            <strong className="font-semibold ">Dayli mix 4</strong>
            <span className="text-sm text-zinc-500">Bob Marley and The Wailers</span>
          </a>
          <a href='#' className="bg-white/5 p-3 rounded rounded-md flex flex-col gap-2 hover:bg-white/10" > 
            <Image src="/assets/album4.jpg" className="w-full" width={104} height={104} alt='Capa do album' />
            <strong className="font-semibold">Dayli mix 5</strong>
            <span className="text-sm text-zinc-500">Felipe Amorin, Caio DJ</span>
          </a>
        </div>

      </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
        <Image src="/assets/album3.jpg" width={56} height={56} alt='Capa do album' />
          <div className="flex flex-col">
            <strong className="font-normal">Gustavo Lima</strong>
            <span className="text-xs text-zinc-400">Embaixador</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-6">
            <Shuffle size={20} className="text-zinc-200" />
            <SkipBack size={20} className="text-zinc-200" />

            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-white text-black" >
              <Play />
            </button>

            <SkipForward size={20} className="text-zinc-200" />
            <Repeat size={20} className="text-zinc-200" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400">00:31</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="h-1 bg-zinc-200 w-40 rounded-full"></div>
            </div>
            <span className="text-xs text-zinc-400">02:14</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
            <Mic2 size={20} />
            <LayoutList size={20} />
            <Laptop2 size={20} />
            <div className="flex items-center gap-2">
            <div className="h-1 rounded-full w-24 bg-zinc-600">
            <div className="h-1 bg-zinc-200 w-14 rounded-full"></div>
            </div>
              <Volume size={20} />
            </div>
            <Maximize2 size={20} />
        </div>
      </footer>
    </div>
  )
}
