import { BrowserRouter } from "react-router";
import { AuthRoutes } from "./AuthRoutes";
import { EmployeeRoutes } from "./EmployeeRoutes";
import { AdminRoutes } from "./AdminRoutes";




export function Routes() {
    return (
        <BrowserRouter>
        <AuthRoutes/>
        </BrowserRouter>
    )
}