import React, { useState } from "react";
import useMyContext from "../hooks/useMyContext";
import useTitle from "../hooks/useTitle";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const AdminPanel = () => {
  useTitle("Admin");
  const { products, setProducts } = useMyContext();
  const [isModal, setIsModal] = useState(false);
  const [editModalValue, setEditModalValue] = useState("");
  console.log(editModalValue);
  const openModal = (id) => {
    const unic = products.findIndex((p) => p.id === id);
    setEditModalValue(products[unic]);
    setIsModal(true);
  };
  const closeModal = (id) => {
    const unic = products.findIndex((proudct) => proudct.id === id);
    products[unic] = editModalValue;
    setProducts([...products]);
    setIsModal(false);
  };
  return (
    <div className="w-full min-h-screen bg-slate-100 pb-10">
      {isModal === true ? (
        <div
          className="w-full h-screen fixed bg-black opacity-50 cursor-not-allowed"
          onClick={() => closeModal(editModalValue.id)}
        ></div>
      ) : null}
      {isModal === true ? (
        <div className="fixed w-[500px] h-auto bg-slate-100 p-5 z-[999] top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 m-5 rounded">
          <div className="space-y-4">
            <p className="text-center text-lg font-semibold">
              Product #{editModalValue.id}
            </p>
            <label className="block">
              <p>Change id</p>
              <input
                className="w-full h-8 rounded mt-2 p-2"
                value={editModalValue.id}
                onChange={(e) =>
                  setEditModalValue({
                    ...editModalValue,
                    id: Number(e.target.value),
                  })
                }
                type="number"
              />
            </label>
            <label className="block">
              <p>Change image URL</p>
              <input
                className="w-full h-8 rounded mt-2 p-2"
                value={editModalValue.image}
                onChange={(e) =>
                  setEditModalValue({
                    ...editModalValue,
                    image: e.target.value,
                  })
                }
                type="text"
              />
            </label>
            <label className="block">
              <p>Change product name</p>
              <input
                className="w-full h-8 rounded mt-2 p-2"
                value={editModalValue.name}
                onChange={(e) =>
                  setEditModalValue({ ...editModalValue, name: e.target.value })
                }
                type="text"
              />
            </label>
            <label className="block">
              <p>Change company name</p>
              <input
                className="w-full h-8 rounded mt-2 p-2"
                value={editModalValue.company}
                onChange={(e) =>
                  setEditModalValue({
                    ...editModalValue,
                    company: e.target.value,
                  })
                }
                type="text"
              />
            </label>
            <label className="block">
              <p>Change product rate</p>
              <input
                className="w-full h-8 rounded mt-2 p-2"
                value={editModalValue.rate}
                onChange={(e) =>
                  setEditModalValue({
                    ...editModalValue,
                    rate: Number(e.target.value),
                  })
                }
                type="number"
              />
            </label>
            <label className="block">
              <p>Change price</p>
              <input
                className="w-full h-8 rounded mt-2 p-2"
                value={editModalValue.price}
                onChange={(e) =>
                  setEditModalValue({
                    ...editModalValue,
                    price: Number(e.target.value),
                  })
                }
                type="number"
              />
            </label>
          </div>
        </div>
      ) : null}
      <div className="container text-center pt-5">
        <h3 className="text-xl font-bold text-blue-800">Admin panel</h3>
        <table className="w-full bg-white rounded mt-4">
          <thead>
            <tr className="border-b-2">
              <th className="p-2">Id</th>
              <th className="p-2">Image</th>
              <th className="p-2">Name</th>
              <th className="p-2">Company</th>
              <th className="p-2">Rate</th>
              <th className="p-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((proudct, i) => {
              return (
                <tr
                  className="border-b-2 cursor-pointer"
                  onClick={() => openModal(proudct.id)}
                  key={i}
                >
                  <td>#{proudct.id}</td>
                  <td className="w-[140px]">
                    <img
                      className="w-full"
                      src={proudct.image}
                      alt="proudct-image"
                    />
                  </td>
                  <td>{proudct.name}</td>
                  <td>{proudct.company}</td>
                  <td>{proudct.rate}</td>
                  <td>{numberWithCommas(proudct.price)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;
