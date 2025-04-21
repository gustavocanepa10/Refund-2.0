import { Controller, useForm } from "react-hook-form";
import { Input } from "../components/input";
import { Select } from "../components/Select";
import { Upload } from "../components/Upload";
import { Button } from "../components/Button";
import { useNavigate, useParams } from "react-router";
import FileSVG from "../assets/file.svg"



type FormData = {
    solicitationName : string,
    Category : string,
    value : number,
    file : string

}



export function Refund() {

  const navigate = useNavigate()
  const params = useParams<{id: string}>()
 
  
    
    const { control, handleSubmit } = useForm<FormData>()

    

  function onSubmit(data: any) {

    if (params.id) {
      return navigate(-1)
    }


    console.log("Foi", data);



    navigate("confirm", {state: {fromsubmit: true}})
    
    
    
    

    
    

  }


  


  

  return (
    <form
      className="w-full flex flex-col rounded-xl bg-gray-500 p-10 gap-6
            lg:min-w-[512px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <header className="flex flex-col text-gray-100 gap-4">
        <h1 className="font-bold text-2xl">Solicitação de reembolso</h1>
        <p className="text-sm text-gray-200 mt-2 mb-4">
          Dados da despesa para solicitar reembolso.
        </p>
      </header>
      <Controller
        control={control}
        disabled = {!!params.id}
        name="solicitationName"
        render={({ field }) => (
          <Input {...field} legend="Nome da Solicitação" required />
        )}
      />

      <div className="flex gap-4">
        <Controller
        disabled = {!!params.id}
          control={control}
          name="Category"
          render={({ field }) => <Select required legend="Categoria" {...field} />}
        />

        <Controller control={control} name="value" render={({field}) => (
             <Input legend="Valor" required {...field} disabled = {!!params.id}/>

        )}/>
       
       
      </div>



      {params.id ? (
        <a href="https://x.com/home" target="_blank" className="text-sm text-green-100 font-semibold
        flex items-center justify-center gap-2 my-6 hover:opacity-70">
          <img src= {FileSVG} alt="Icone do arquivo" />
      Abrir comprovante
      </a>
      
    
    ) : (
      <Controller control={control} name="file" render={({field}) => (
        <Upload  required filename="Nome do arquivo.pdf" {...field} />

      )}  />


    )}


      

      



      

      <Button type="submit">{ params.id ?  "Voltar" : "Enviar"}</Button>
    </form>
  );
}
