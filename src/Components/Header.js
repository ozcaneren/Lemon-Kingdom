import { FaRegLemon, FaLemon } from "react-icons/fa"
import { GiCutLemon, GiLemon } from "react-icons/gi"
import { TbLemon, TbLemon2 } from "react-icons/tb"

export default function Header() {
  return (
    <header className="text-gray-300 bg-green-700 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="https://github.com" className="flex title-font font-medium items-center text-white mb-4 md:mb-0 hover:text-yellow-500">
          <FaRegLemon />
          <span className="ml-3 text-xl">Lemon Kingdom</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center gap-x-5">
          <a href="https://github.com" className="flex title-font font-medium items-center text-white mb-4 md:mb-0 hover:text-yellow-500">
            <GiCutLemon />
            <span className="ml-3">Benefits</span>
          </a>
          <a href="https://github.com" className="flex title-font font-medium items-center text-white mb-4 md:mb-0 hover:text-yellow-500">
            <FaLemon />
            <span className="ml-3">Types</span>
          </a>
          <a href="https://github.com" className="flex title-font font-medium items-center text-white mb-4 md:mb-0 hover:text-yellow-500">
            <GiLemon />
            <span className="ml-3">Reacts</span>
          </a>
          <a href="https://github.com" className="flex title-font font-medium items-center text-white mb-4 md:mb-0 hover:text-yellow-500">
            <TbLemon />
            <span className="ml-3">Bearss Lemon</span>
          </a>
        </nav>
        <div className="flex flex-wrap items-center text-base justify-center">
          <a href="https://github.com" className="inline-flex items-center bg-yellow-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 gap-x-1">
            <TbLemon2 />
            <span>Lemons!!!</span>
          </a>
        </div>
      </div>
    </header>
  )
}