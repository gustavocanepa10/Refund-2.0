import { Routes, Route } from "react-router";
import { SignIn } from "../pages/SignIn";
import { AuthLayout } from "../components/authLayout";
import { SignUp } from "../pages/SignUp";
import { NotFound } from "../pages/NotFound";
import { Refund } from "../pages/Refund";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Refund" element = {<Refund/>}/>

      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
