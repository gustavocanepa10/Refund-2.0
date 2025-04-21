import { BrowserRouter } from "react-router";
import { AuthRoutes } from "./AuthRoutes";
import { EmployeeRoutes } from "./EmployeeRoutes";
import { AdminRoutes } from "./AdminRoutes";
import { Loading } from "../components/Loading";


const isLoading = true

export function Routes() {

    if (isLoading) {
        return <Loading/>
    }
    return (
        <BrowserRouter>
        <AuthRoutes/>
        </BrowserRouter>
    )
}