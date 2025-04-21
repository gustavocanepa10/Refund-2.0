import { Input } from "../components/input";
import { Button } from "../components/Button";

import { useState } from "react";
import { useNavigate } from "react-router";

export function SignIn() {
  const navigate = useNavigate();


  const [name, setName] = useState("")

  const [email, setEmail] = useState("")
  

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    
  }

  return (
    <form
      onSubmit= {onSubmit}
      className="w-full flex flex-col gap-4"
    >

<Input legend="Nome" value={name} onChange={(e) => setName(e.target.value)}  />




<Input legend="email" value={email} onChange={(e) => setEmail(e.target.value)}  />



<Button onSubmit={onSubmit}>
  Entrar
</Button>


<button onClick={() => navigate('/SignUp')} className="cursor-pointer font-semibold mt-3">
  Criar conta
</button>

     
        
    </form>
  );
}
