import React from 'react'
import './CartPage.css'
import user from '../assets/user.webp'
import remove from '../assets/remove.png'
import Table from './../Common/Table';
import QuantityInput from './../SingleProduct/QuantityInput';
const CartPage = () => {
  return (
   <section className='align_center cart_page'>
    <div className="align_center user_info">
        <img src={user} alt=" user profile" />
        <div>
            <p className="user_name">Suman</p>
            <p className="user_name">Suman12@gmail.com</p>
        </div>
    </div>

    <Table  heading = {["Item","Price","Quantity","Total","Remove"]}> 
      <tbody>
        <tr>
          <td>Iphone 114</td>
          <td>3442</td>
          <td className='align_center table_quantity_input'> <QuantityInput /> </td>
          <td>20000</td>
          <td><img src={remove} alt="dfdfdfd" className='cart_remove_icon' /></td>
        </tr>
      </tbody>
    </Table>
    


    <table className="cart_bill">
      <tbody>
        <tr>
          <td>subtotal</td>
          <td> 999</td>
        </tr>
        <tr>
          <td>Shipping Charge</td>
          <td> 999</td>
        </tr>
        <tr className='cart_bill_final'>
          <td>Total</td>
          <td> 999</td>
        </tr>
      </tbody>
    </table>
    <button className="search_button checkout_button">Check Out</button>
   </section>
  )
}

export default CartPage