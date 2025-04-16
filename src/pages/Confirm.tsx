import confirm from "../assets/ok.svg"
import { Button } from "../components/Button"
import { useNavigate, Navigate, useLocation } from "react-router"


export function Confirm() {
    const location = useLocation()
    const navigate = useNavigate()

    if (!location.state?.fromSubmit) {

        return <Navigate to={"/"}/>

    } else {
        return (
            <div className="flex flex-col items-center justify-center bg-gray-500 w-full max-w-xl h-max rounded-2xl gap-10 p-6">
                <h1 className="text-green-100 text-2xl font-bold font-sans text-center">
                    Solicitação enviada!
                </h1>
        
                <img 
                    className="w-50 h-50" 
                    src={confirm} 
                    alt="Ícone de confirmação" 
                />
        
                <p className="text-md text-gray-200 text-center">
                    Agora é apenas aguardar! Sua solicitação será analisada e, em breve, 
                    o setor financeiro irá entrar em contato com você.
                </p>
        
                <Button onClick={() => navigate(-1)} className="w-full max-w-lg h-12 rounded-lg bg-green-100 font-sans text-white font-bold cursor-pointer">
                    Nova solicitação
                </Button>
            </div>
        )

    }

    
}