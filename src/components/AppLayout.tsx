
import { Outlet } from "react-router"
import { Header } from "./Header"


export function AppLayout() {
    return (
        <div className="w-screen h-screen bg-gray-400 flex flex-col 
        items-center text-gray-100">
             <Header/>
            <main className="p-3  md:w-auto flex flex-col gap-12">
           
            {/* Refund */}
            <Outlet/>
                
            </main>
        </div>

    )
}