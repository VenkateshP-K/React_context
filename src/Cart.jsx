import React from "react";
import Item from "./Item";
import { useContext, useEffect } from "react";
import CartContext from "./CartContext";

function Cart() {
  const { data, total, setTotal, totalAmt, setTotalAmt } =
    useContext(CartContext);

  useEffect(() => {
    setTotal(
      data.reduce((accumulator, product) => accumulator + product.price, 0)
    );
  }, []);

  useEffect(() => {
    setTotalAmt(total + 50 - Math.round(total));
  }, [total]);

  return (
    <div className="container">
      <div className="row ">
        <div className="col-md-11 bg-white text-center ms-2 mt-3 mb-3 pt-2 pb-2 rounded shadow-lg ">
          <h1>Cart</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-7 ms-2 me- col-sm-12  bg-white text-center rounded shadow-lg">
          <div>
            <table className="table table-sm mt-3 table-borderless align-middle ">
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Qty</th>
                  <th scope="col">Total Price</th>
                </tr>
              </thead>
              <tbody>
                {data.map((product) => {
                  return <Item key={product.id} product={product} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div
          className="col-md-4  ms-1 bg-white  border rounded   pt-3 justify-content-center"
          style={{ height: 300 }}
        >
          <div className="d-flex justify-content-between">
            <h6>Subtotal : Rs:{total}</h6>
          </div>

          <div className="d-flex justify-content-between">
            <h6>Shipping Fee : Rs:40.00</h6>
          </div>
      
          <hr />
          <div className="d-flex flex-column">
            <div className="d-flex justify-content-between">
              <h4>Total Amount </h4>
              <h4>Rs:{Math.round(total+40)}.00 </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;