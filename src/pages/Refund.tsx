
import { Input } from "../components/input";
import { Select } from "../components/Select";
import { Upload } from "../components/Upload";
import { Button } from "../components/Button";
import { useNavigate, useParams } from "react-router";
import FileSVG from "../assets/file.svg"
import { useState } from "react";



type FormData = {
    solicitationName : string,
    Category : string,
    value : number,
    file : string

}



export function Refund() {

  const navigate = useNavigate()
  const params = useParams<{id: string}>()


  const [name, setrefundName] = useState("")

  const [category, setCategory] = useState("")

  const [value, setValue] = useState("")

  const [fileName, setfileName] = useState<File | null >(null)




 
  
    
    

    

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (params.id) {
      return navigate(-1)
    }


    console.log("Foi", name, category, value, fileName );



    navigate("confirm", {state: {fromsubmit: true}})
    
    
    
    

    
    

  }


  


  

  return (
    <form
      className="w-full flex flex-col rounded-xl bg-gray-500 p-10 gap-6
            lg:min-w-[512px]"
      onSubmit={onSubmit}
    >
      <header className="flex flex-col text-gray-100 gap-4">
        <h1 className="font-bold text-2xl">Solicitação de reembolso</h1>
        <p className="text-sm text-gray-200 mt-2 mb-4">
          Dados da despesa para solicitar reembolso.
        </p>
      </header>
      <Input legend="Nome da solicitação" value={name} onChange={(e) => setrefundName(e.target.value)}/>

      <div className="flex gap-4">
        <Select legend="Categoria" value={category} onChange={(e) => setCategory(e.target.value)}/>

        <Input className="w-full h-12 rounded-lg border   
                 border-gray-300 px-4 text-sm text-gray-100 bg-transparent outline-none focus:2 focus:border-green-100 placeholder-gray-300
                 appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-inner-spin-button]:m-0" type="number" placeholder="0,00" legend="Valor" value={value} onChange={(e) => setValue(e.target.value)}/>
       
       
      </div>



      {params.id ? (
        <a href="https://x.com/home" target="_blank" className="text-sm text-green-100 font-semibold
        flex items-center justify-center gap-2 my-6 hover:opacity-70">
          <img src= {FileSVG} alt="Icone do arquivo" />
      Abrir comprovante
      </a>
      
    
    ) : (
      
        <Upload onChange={(e) => e.target.files && setfileName(e.target.files[0])}  required filename="Nome do arquivo.pdf" />

      )}  


   


      

      



      

      <Button type="submit">{ params.id ?  "Voltar" : "Enviar"}</Button>
    </form>
  );
}
