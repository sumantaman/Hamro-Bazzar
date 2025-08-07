import React from "react";
import "./MyOrderPage.css";
import Table from "./../Common/Table";
const MyOrderPage = () => {
  console.log("order page")
  return (
    <section className="align_center myorder_page">
      <Table heading={["Order", "Products", "Total", "Status"]}>
        <tbody>
          <tr>
            <td>1</td>
            <td>iphone, Power Bank</td>
            <td>$12</td>
            <td>Shipped</td>
          </tr>
        </tbody>
      </Table>
    </section>
  );
};

export default MyOrderPage;
