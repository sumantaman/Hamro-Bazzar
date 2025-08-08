import React, { useEffect, useState }  from "react";
import {jwtDecode} from 'jwt-decode'
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Routing from "./components/SingleProduct/Routing/Routing";
import setAuthToken from "./utils/setAuthToken";


setAuthToken(localStorage.setItem("token"))

const App = () => {
  const [user, setUser] = useState(null)
  const [cart, setCart] =useState([])

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

  const addToCart = (product,quantity) =>{
    const updatedCart =[...cart]
    const productIndex = updatedCart.findIndex(item => item.product._id === product._id)
    if(productIndex === -1){
      updatedCart.push({product,quantity})
    }else{
      updatedCart[productIndex].quantity +=quantity
    }

    setCart(updatedCart)
    // setCart([...cart,{
    //   product, quantity
    // }])
  }
  return (
    <div className="app">
      <Navbar user={user}  cartCount={cart.length}/>
      <main>
        <Routing  addToCart={addToCart}/>
      </main>
    </div>
  );
};

export default App;
