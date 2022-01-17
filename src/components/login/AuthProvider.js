import React, { useEffect, useState } from "react";
import { auth } from "../../auth/firebaseAuth";
import RegisterForm from "./RegisterForm";
import { axiosInstance } from "../../config/axiosConfig";

export const UserContext = React.createContext( null );
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [registerFormOpen, setRegisterFormOpen] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged(async (firebaseUser) => {
      if(firebaseUser) {
        const token = await firebaseUser.getIdToken();
        localStorage.setItem('token', "Bearer "+token);
        /*
        const res = await axios.get("/users/me", {
            headers: defaultHeaders
        });
        */
        const res = await axiosInstance.get("/users/me");
        console.log(res.status);
        if(res.status === 200) {
          const user = await res;
          setUser(user);
        } else if (res.status === 401) {
          const data = await res;
          if(data.code === "USER_NOT_FOUND") {
            setRegisterFormOpen(true);
          } 
        } 
      } else {
        localStorage.clear();
        setUser(null);
      } 
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {(registerFormOpen) ? 
        (<RegisterForm setRegisterFormOpen={setRegisterFormOpen} />) :
        (children)
      }
    </UserContext.Provider>
  );
};

export default AuthProvider;