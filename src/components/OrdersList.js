import React from "react";
import useMyContext from "../hooks/useMyContext";
import useTitle from "../hooks/useTitle";

const OrdersList = () => {
  useTitle("Orders");
  const { products, factor, setFactor } = useMyContext();
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <div>
      <h3 className="text-xl font-semibold text-blue-900 mb-5">Orders list</h3>
      <div>
        {factor.length ? (
          <table className="text-center bg-white w-full rounded">
            <thead>
              <tr>
                <th className="p-2 border-b-2">Order</th>
                <th className="p-2 border-b-2">Image</th>
                <th className="p-2 border-b-2">Title</th>
                <th className="p-2 border-b-2">Price</th>
                <th className="p-2 border-b-2">Quantity</th>
                <th className="p-2 border-b-2">Total price</th>
              </tr>
            </thead>
            <tbody>
              {factor.map((f) => {
                return products
                  .filter((product) => product.id === f.id)
                  .map((product, i) => {
                    return (
                      <tr key={i}>
                        <td className="p-2 border-b-2">#{product.id}</td>
                        <td className="p-2 border-b-2 w-[100px]">
                          <img
                            className="w-full"
                            src={product.image}
                            alt="product-image"
                          />
                        </td>
                        <td className="p-2 border-b-2">{product.name}</td>
                        <td className="p-2 border-b-2">
                          {numberWithCommas(product.price)} $
                        </td>
                        <td className="p-2 border-b-2">{f.qty}</td>
                        <td className="p-2 border-b-2">
                          {numberWithCommas(f.qty * product.price)} $
                        </td>
                      </tr>
                    );
                  });
              })}
            </tbody>
          </table>
        ) : (
          <div className="text-center">
            <img
              className="w-[140px] mx-auto mb-4"
              src={require("../img/choices.png")}
              alt="choices"
            />
            <p>No purchases have been made yet</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrdersList;
