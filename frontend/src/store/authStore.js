import { create } from "zustand";
import axios from "axios";


const API_URL="http://localhost:3312/api/auth/"

axios.defaults.withCredentials=true // include cokkies in header

export const useAuthStore=create((set)=>({
     user:null,
     isAuthenticated:false,
     error:false,
     isLoading:false,
     isCheckingAuth:true,

     signUp: async(email,password,name)=>{
          set({isLoading:true,error:false})
          try {
             const response=  await axios.post(`${API_URL}signup `,{email,password,name})
             set({user:response.data.user,isAuthenticated:true,isLoading:false})
          } catch (error) {
               set({error:error.response.data.message  || "Error signing Up",isLoading:false})
               throw error
          }
     }

}))

