
import { Input } from "../components/input"
import { Button } from "../components/Button"


export function SignIn  () {
return <form  className="w-full flex flex-col gap-4">

  <Input  required legend="E-mail" type="email" placeholder="Seu @email.com"  />


  <Input  required legend="Senha" type="password" placeholder="123456"  />


  <Button  title="Entrar"   />
    


    </form>
}