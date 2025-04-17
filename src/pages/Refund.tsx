import { Controller, useForm } from "react-hook-form";
import { Input } from "../components/input";
import { Select } from "../components/Select";
import { Upload } from "../components/Upload";
import { Button } from "../components/Button";
import { useNavigate } from "react-router";

type FormData = {
    solicitationName : string,
    Category : string,
    value : number,
    file : string

}



export function Refund() {
  const navigate = useNavigate()
    
    const { control, handleSubmit } = useForm<FormData>()

  function onSubmit(data: any) {
    console.log("Foi", data);
    navigate('/confirm', {state : {fromSubmit: true}})
    
    
    

    
    

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
        name="solicitationName"
        render={({ field }) => (
          <Input {...field} legend="Nome da Solicitação" required />
        )}
      />

      <div className="flex gap-4">
        <Controller
          control={control}
          name="Category"
          render={({ field }) => <Select required legend="Categoria" {...field} />}
        />

        <Controller control={control} name="value" render={({field}) => (
             <Input legend="Valor" required {...field}/>

        )}/>
       
       
      </div>


      <Controller control={control} name="file" render={({field}) => (
        <Upload required filename="Nome do arquivo.pdf" {...field} />

      )}  />


      



      

      <Button type="submit">Enviar</Button>
    </form>
  );
}
