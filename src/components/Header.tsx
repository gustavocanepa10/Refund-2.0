import Logo from "../assets/logo.svg"
import Botão from "../assets/logout.svg"



export function Header() {
    return (
      

        <header className="w-full flex items-center justify-between p-8">

          <div>

          <img className="ml-4" src= {Logo} alt="logo"  />

          </div>

        

        <div className="mr-4 flex items-center gap-3">
          <span className="text-sm font-semibold text-gray-200">
            Olá, Gustavo
            </span>
          <img className="cursor-pointer" src= {Botão} alt="" />
        </div>
        </header>

      
    )
    
}