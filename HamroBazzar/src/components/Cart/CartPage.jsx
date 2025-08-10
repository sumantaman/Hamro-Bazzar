import React, { useEffect, useState, useContext } from "react";
import "./CartPage.css";
import remove from "../assets/remove.png";
import Table from "./../Common/Table";
import QuantityInput from "./../SingleProduct/QuantityInput";
import userContext from "../../contexts/UserContext";
import cartContext from "../../contexts/CartContext";

const CartPage = () => {
  const [subTotal, setSubTotal] = useState();
  const user = useContext(userContext);
  const { cart, removeFromCart, updateCart } = useContext(cartContext);

  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.product.price * item.quantity;
    });
    setSubTotal(total);
  }, [cart]);
  // useEffect(()=>{
  //   getCart()
  // },[])
  // console.log(cart)

  return (
    <section className="align_center cart_page">
      <div className="align_center user_info">
        <img
          src={`http://localhost:5000/profile/${user?.profilePic}`}
          alt=" user profile"
        />
        <div>
          <p className="user_name">Name : {user?.name}</p>
          <p className="user_name">Email : {user?.email}</p>
        </div>
      </div>

      <Table heading={["Item", "Price", "Quantity", "Total", "Remove"]}>
        <tbody>
          {cart.map(({ product, quantity }) => (
            <tr key={product._id}>
              <td>{product.title}</td>
              <td>${product.price}</td>
              <td className="align_center table_quantity_input">
                {" "}
                <QuantityInput quantity={quantity} stock={product.stock}  setQuantity={updateCart}
                cartPage ={true} productId={product._id}/>{" "}
              </td>
              <td>${quantity * product.price}</td>
              <td>
                <img
                  src={remove}
                  alt="dfdfdfd"
                  className="cart_remove_icon"
                  onClick={() => removeFromCart(product._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <table className="cart_bill">
        <tbody>
          <tr>
            <td>subtotal</td>
            <td> ${subTotal}</td>
          </tr>
          <tr>
            <td>Shipping Charge</td>
            <td>$5</td>
          </tr>
          <tr className="cart_bill_final">
            <td>Total</td>
            <td>${subTotal + 5}</td>
          </tr>
        </tbody>
      </table>
      <button className="search_button checkout_button">Check Out</button>
    </section>
  );
};

export default CartPage;
