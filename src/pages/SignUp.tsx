import { Input } from "../components/input";
import { Button } from "../components/Button";

import { useNavigate } from "react-router";
import { useState } from "react";

export function SignUp() {
  const navigate = useNavigate();


  const [name, setName] = useState("")

  const [email, setEmail] = useState("")


  const [password, setPassword] = useState("")

  const [confirmedPassword, setconfirmedPassword] = useState("")



  

  

  function onSubmit(e : React.FormEvent) {
    e.preventDefault()
    
    
  }

  return (
    <form
      onSubmit={onSubmit}
      className="w-full flex flex-col gap-4"
    >

      <Input legend="Nome" value={name} onChange={(e) => setName(e.target.value)}   />

      <Input legend="email" value={email} onChange={(e) => setEmail(e.target.value)}   />


      <Input legend="Senha" value={password} onChange={(e) => setPassword(e.target.value)}/>

      <Input legend="Confirme a senha" value={confirmedPassword} onChange={(e) => setconfirmedPassword(e.target.value)}/>
     


      <Button>
        Criar conta
      </Button>

      <button onClick={() => navigate("/")} className="cursor-pointer font-semibold mt-3">
        Já tenho uma conta
      </button>



      
       
    </form>
  );
}
