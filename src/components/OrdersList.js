import React from "react";
import useMyContext from "../hooks/useMyContext";
import useTitle from "../hooks/useTitle";

const OrdersList = () => {
  useTitle("Orders");
  const { products, factor } = useMyContext();
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  console.log(factor);
  return (
    <div>
      <h3 className="text-xl font-semibold text-blue-900 mb-5">Orders list</h3>
      <div>
        {factor.length ? (
          factor.map((f, index) => {
            return (
              <div
                className="bg-white w-full border rounded p-5 mb-5"
                key={index}
              >
                <p className="sm:font-semibold mb-2">Name: Abas Boazar</p>
                <div className="flex flex-wrap items-baseline space-y-2">
                  <p className="sm:font-semibold sm:mr-10 mr-4">
                    Orders list: {f.listNumber}
                  </p>
                  <p className="sm:font-semibold">Date: {f.date}</p>
                </div>
                <hr className="my-4" />
                <div className="overflow-x-auto">
                  <table className="text-center bg-white w-full rounded mb-5 border-2">
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
                      {f.products.map((fp) => {
                        return products
                          .filter((product) => product.id === fp.id)
                          .map((product, i) => {
                            return (
                              <tr key={i}>
                                <td className="p-2 border-b-2">
                                  #{product.id}
                                </td>
                                <td className="p-2 border-b-2 w-[100px]">
                                  <img
                                    className="w-full"
                                    src={product.image}
                                    alt="product-image"
                                  />
                                </td>
                                <td className="p-2 border-b-2">
                                  {product.name}
                                </td>
                                <td className="p-2 border-b-2">
                                  {numberWithCommas(product.price)} $
                                </td>
                                <td className="p-2 border-b-2">{fp.qty}</td>
                                <td className="p-2 border-b-2">
                                  {numberWithCommas(fp.qty * product.price)} $
                                </td>
                              </tr>
                            );
                          });
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })
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
        {/* {factor.map(f => f.products.map(fp => fp.id))} */}
      </div>
    </div>
  );
};

export default OrdersList;
