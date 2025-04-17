import { Input } from "../components/input";
import Pesquisar from "../assets/search.svg"
import { RefundItem } from "../components/RefundItem";
import { useState } from "react";
import { Button } from "../components/Button";
import { formatCurrency } from "../utils/formatCurrency";






export function Dashboard() {
    const [name, setName] = useState("")

    const Refund_Example = {
        id : "123",
        name : "Gustavo",
        category : "Transporte",
        amount :formatCurrency(34.5),
       }

    function fetchFounds(e: React.FormEvent) {
        e.preventDefault()
        console.log(name);
        

        
   



    }
    return (
        <div className="bg-gray-500 items-center md:min-w-[768px] p-10 rounded-xl justify-between">
            <h1 className="font-semibold text-gray-100 font-sans text-xl flex-1">Solicitações</h1>
            <form onSubmit={fetchFounds} className="flex flex-1 items-center md:flex-row gap-2 mt-6 justify-between pb-6 border-b-[1px] border-b-gray-400">


            <Input onChange={(e) => setName(e.target.value)} className=" w-full h-12 rounded-lg border border-gray-300 px-4 text-sm
             text-gray-100   outline-none focus:2 focus:border-green-100 placeholder-gray-200 " placeholder="Pesquisar pelo nome"/>

            <Button type="submit" className="w-12 h-12 ">
                
            <img className="w-12 h-12 ml-2  bg-green-100 rounded-lg p-3 cursor-pointer" src= {Pesquisar} alt="" />
            </Button>
            

            

            </form>

            <div className="p-6 flex flex-col flex-1 mt-6 gap-4 max-h-[342px] overflow-y-scroll">

            <RefundItem data={Refund_Example}/>
            


            </div>

           
           
        </div>
    )
}