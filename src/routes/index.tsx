import { BrowserRouter } from "react-router";
import { AuthRoutes } from "./AuthRoutes";
import { EmployeeRoutes } from "./EmployeeRoutes";
import { AdminRoutes } from "./AdminRoutes";
import { Loading } from "../components/Loading";


const isLoading = false

const session = {
    user: {
        role : "employee"
    }
}

export function Routes() {

    function Route() {
        

        switch (session.user.role) {
            case "Admin":

            return <AdminRoutes/>

            case "employee":
                
            return <EmployeeRoutes/>
            
            
            default:
                return <AuthRoutes/>
        }
    }


    



    if (isLoading) {
        return <Loading/>
    }
    return (
        <BrowserRouter>
        <Route/>
        </BrowserRouter>
    )
}