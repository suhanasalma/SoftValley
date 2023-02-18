import { useSelector } from "react-redux"

export const useAuthState = ()=>{
   const auth = useSelector(state=>state?.Auth)

   if(auth?.token){
      return true
   }else{
      return false
   }
}