import { BrowserRouter } from "react-router";
import { AppRoutes } from "./AuthRoutes";


// Autenticação

export function Routes() {
    return (
        <BrowserRouter>
        <AppRoutes/>
        </BrowserRouter>
    )
}