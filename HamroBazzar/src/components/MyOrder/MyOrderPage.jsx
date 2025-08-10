import React, { useContext } from "react";
import "./MyOrderPage.css";
import Table from "./../Common/Table";
import UserContext from "./../../contexts/UserContext";
import useData from "./../../hooks/useData";
import Loader from './../Common/Loader';

const MyOrderPage = () => {
  const { data: orders, error, isLoading } = useData("/order");
  const getProductString =order=>{
    const productStringArr =order.products.map(p=>`${p.product.title}(${p.quantity})`)
    // const productString = order.products.map()
    return productStringArr.join(', ')
    // return productStringArr
  }
  console.log(orders)
  return (
    <section className="align_center myorder_page">
      {isLoading && <Loader />}
      {orders && (
        <Table heading={["Order", "Products", "Total", "Status"]}>
          <tbody>
            {orders.map((order, index) => 
              <tr key={order._id}>
                <td>{index+1}</td>
                <td>{getProductString(order)}</td>
                <td>${order.total}</td>
                <td>{order.status}</td>
              </tr>
            )}
          </tbody>
        </Table>
      )}
    </section>
  );
};

export default MyOrderPage;
