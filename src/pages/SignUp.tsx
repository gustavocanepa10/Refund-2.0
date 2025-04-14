


import { Input } from "../components/input"
import { Button } from "../components/Button"
import {Controller, useForm} from "react-hook-form"
import { useNavigate } from "react-router"






export function SignUp  () {

    const navigate = useNavigate()


  const {control, handleSubmit} = useForm({defaultValues : {
    name : "",
    email : "",
    password: "",
    ConfirmPassword: ""

  }})


  function onSubmit(data: any) {
    console.log(data);
    
    

  }




return <form onSubmit={handleSubmit(onSubmit)}  className="w-full flex flex-col gap-4">

<Controller control={control} name="name" render={({field}) => (

<Input  required legend="Nome" type="text"  {...field}  />

)}/>


  <Controller control={control} name="email" render={({field}) => (

    <Input  required legend="E-mail" type="email"  {...field}  />

  )}/>


<Controller control={control} name="password" render={({field}) => (

<Input  required legend="Senha" type="password"  {...field}  />

)}







/>

<Controller  name="ConfirmPassword" control={control} render={({field}) => (
    <Input  required legend="Confirme a senha" type="password"  {...field}   />
)} />

  


  


  <Button>  Cadastrar   </Button>


  <Button onClick={() => navigate(-1)} className="w-full h-12 rounded-md font-sans text-gray-100 font-semibold cursor-pointer"   >
    Já tenho uma conta
  </Button>

  
    


    </form>
}