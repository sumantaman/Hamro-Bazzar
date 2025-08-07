import React, { useEffect, useState }  from "react";
import {jwtDecode} from 'jwt-decode'
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Routing from "./components/SingleProduct/Routing/Routing";



const App = () => {
  const [user, setUser] = useState(null)

  useEffect(()=>{

    try {
      const jwt = localStorage.getItem("token")
    const jwtUser = jwtDecode(jwt);
    if(Date.now() >= jwtUser.exp * 1000){
      localStorage.removeItem("token")
      location.reload()
    }else{
      setUser(jwtUser)
    }
    } catch (error) {console.log(error)}


    
  },[])
  return (
    <div className="app">
      <Navbar user={user} />
      <main>
        <Routing />
      </main>
    </div>
  );
};

export default App;
