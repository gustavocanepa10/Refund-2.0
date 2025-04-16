import {Routes, Route} from "react-router"

import  {AppLayout} from "../components/AppLayout"
import { NotFound } from "../pages/NotFound"
import { List } from "../pages/List"


export function AdminRoutes() {
    return (
    <Routes>
        <Route path="/" element = {<AppLayout/>}>

        <Route path="/" element= {<List/>}  />
       

        </Route>
       
        <Route path="*" element= {<NotFound/>}  />
        
    </Routes>

    )
}

