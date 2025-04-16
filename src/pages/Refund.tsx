import { Controller, useForm } from "react-hook-form";
import { Input } from "../components/input";
import { Select } from "../components/Select";
import { Upload } from "../components/Upload";
import { Button } from "../components/Button";


export function Refund() {
    const { control, handleSubmit } = useForm()

  function onSubmit(data: any) {
    console.log("Foi", data);
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
          <Input {...field} legend="Nome da Solicitação" />
        )}
      />

      <div className="flex gap-4">
        <Controller
          control={control}
          name="Category"
          render={({ field }) => <Select legend="Categoria" {...field} />}
        />
       
        <Input legend="Valor" required />
      </div>


      <Upload filename="Nome do arquivo.pdf" />



      

      <Button type="submit">Enviar</Button>
    </form>
  );
}
