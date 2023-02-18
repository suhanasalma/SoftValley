import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { userLoggedIn } from "../Redux/Auth/AuthSlice"

export const useAuthCheck = ()=>{
const dispatch = useDispatch()
const [authCheck,setAuthCheck] = useState(false)
   useEffect(() => {
     const localAuth = localStorage?.getItem("auth");

     if (localAuth) {
       const auth = JSON.parse(localAuth);

       if (auth?.token) {
         dispatch(userLoggedIn(auth?.token));
       }
     }
     setAuthCheck(true);
   }, [dispatch, setAuthCheck]);

   return authCheck

}