
import { Navigate } from "react-router-dom"
import { useAuthState } from "../Hooks/useAuthState"

export const PrivateRoute = ({children})=>{
   const isLoggedIn  = useAuthState()
   

   return isLoggedIn ? children : <Navigate to ='/' />
}