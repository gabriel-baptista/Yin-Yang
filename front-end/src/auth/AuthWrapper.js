import { createContext, useContext, useState } from "react";
import Sidemenu from '../scenes/global/Sidebar';
import Topbar from "../scenes/global/Topbar";
import Login from "../scenes/login/login";
// import { RenderHeader } from "../components/structure/Header";
// import { RenderMenu, RenderRoutes } from "../components/structure/RenderNavigation";


const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);


export const AuthWrapper = () => {

     const [ user, setUser ] = useState({name: "", isAuthenticated: false})

     const login = (userName, password) => {
          
          return new Promise((resolve, reject) => {

               if (password === "password") {
                    setUser({name: userName, isAuthenticated: true})
                    resolve("success")
               } else {
                    reject("Incorrect password")
               }
          })
          
          
     }
     const logout = () => {

          setUser({...user, isAuthenticated: false})
     }


     return (
          
               <AuthContext.Provider value={{user, login, logout}}>
                    <>
                         {/* <RenderHeader />
                         <RenderMenu />
                         <RenderRoutes /> */}
                         <Login />
                    </>
                    
               </AuthContext.Provider>
          
     )

}