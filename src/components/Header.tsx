import Logo from "../assets/logo.svg"
import Botão from "../assets/logout.svg"



export function Header() {
    return <header className="flex justify-between max-w-screen p-4">

      <img src= {Logo} alt="logo"  />

      <div className="flex items-center gap-3">
        <span className="text-sm font-semibold text-gray-200">
          Olá, Gustavo
          </span>
        <img className="cursor-pointer" src= {Botão} alt="" />
      </div>
    </header>
}