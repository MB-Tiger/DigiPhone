import React, { useState } from "react";
import useMyContext from "../hooks/useMyContext";
import useTitle from "../hooks/useTitle";
import { BiEditAlt } from "react-icons/bi";
import { BsTrashFill } from "react-icons/bs";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const AdminPanel = () => {
  useTitle("Admin");
  const { products, setProducts } = useMyContext();
  const [isModal, setIsModal] = useState(false);
  const [editModalValue, setEditModalValue] = useState("");
  const [isCreateProductModal, setIsCreateProductModal] = useState(false);
  const [createProductValue, setCreateProductValue] = useState("");

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
  const deleteProduct = (id) => {
    const unic = products.findIndex((proudct) => proudct.id === id);
    products.splice(unic, 1);
    setProducts([...products]);
  };
  const openCreateProductModal = () => {
    setIsCreateProductModal(true);
  };
  const closeCreateProductModal = () => {
    setIsCreateProductModal(false);
  };
  const addProduct = () => {
    setProducts([...products, createProductValue]);
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
        <div className="fixed md:w-[500px] sm:w-[450px] w-[300px] overflow-y-auto bg-slate-100 p-5 z-[999] top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 my-4 rounded">
          <div className="space-y-4 overflow-y-auto">
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
      {isCreateProductModal === true ? (
        <div
          className="w-full h-screen fixed bg-black opacity-50 cursor-not-allowed"
          onClick={() => closeCreateProductModal(editModalValue.id)}
        ></div>
      ) : null}
      {isCreateProductModal === true ? (
        <div className="fixed md:w-[500px] sm:w-[450px] w-[300px] h-[550px] overflow-y-auto bg-slate-100 p-5 z-[999] top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 my-4 rounded">
          <div className="space-y-4 overflow-y-auto">
            <p className="text-center text-lg font-semibold">Create Product</p>
            <label className="block">
              <p>Product id</p>
              <input
                className="w-full h-8 rounded mt-2 p-2"
                value={createProductValue.id}
                onChange={(e) =>
                  setCreateProductValue({
                    ...createProductValue,
                    id: Number(e.target.value),
                  })
                }
                type="number"
              />
            </label>
            <label className="block">
              <p>Image URL</p>
              <input
                className="w-full h-8 rounded mt-2 p-2"
                value={createProductValue.image}
                onChange={(e) =>
                  setCreateProductValue({
                    ...createProductValue,
                    image: e.target.value,
                  })
                }
                type="text"
              />
            </label>
            <label className="block">
              <p>Product name</p>
              <input
                className="w-full h-8 rounded mt-2 p-2"
                value={createProductValue.name}
                onChange={(e) =>
                  setCreateProductValue({
                    ...createProductValue,
                    name: e.target.value,
                  })
                }
                type="text"
              />
            </label>
            <label className="block">
              <p>Company name</p>
              <input
                className="w-full h-8 rounded mt-2 p-2"
                value={createProductValue.company}
                onChange={(e) =>
                  setCreateProductValue({
                    ...createProductValue,
                    company: e.target.value,
                  })
                }
                type="text"
              />
            </label>
            <label className="block">
              <p>Product rate</p>
              <input
                className="w-full h-8 rounded mt-2 p-2"
                value={createProductValue.rate}
                onChange={(e) =>
                  setCreateProductValue({
                    ...createProductValue,
                    rate: Number(e.target.value),
                  })
                }
                type="number"
              />
            </label>
            <label className="block">
              <p>Product price</p>
              <input
                className="w-full h-8 rounded mt-2 p-2"
                value={createProductValue.price}
                onChange={(e) =>
                  setCreateProductValue({
                    ...createProductValue,
                    price: Number(e.target.value),
                  })
                }
                type="number"
              />
            </label>
            <div className="text-center">
              <button
                className="bg-blue-500 text-white hover:bg-blue-700 transition-all duration-200 w-1/2 p-2 rounded"
                onClick={() => addProduct()}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      ) : null}
      <div className="container text-center pt-5">
        <h3 className="text-xl font-bold text-blue-800">Admin panel</h3>
        <div className="w-full overflow-x-auto">
          <table className="w-full bg-white rounded mt-4">
            <thead>
              <tr className="border-b-2">
                <th className="p-2">Id</th>
                <th className="p-2">Image</th>
                <th className="p-2">Name</th>
                <th className="p-2">Company</th>
                <th className="p-2">Rate</th>
                <th className="p-2">Price</th>
                <th className="p-2"></th>
              </tr>
            </thead>
            <tbody>
              {products.map((proudct, i) => {
                return (
                  <tr className="border-b-2" key={i}>
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
                    <td>
                      <div className="flex justify-evenly space-x-2 px-3">
                        <BiEditAlt
                          className="text-blue-800 cursor-pointer lg:text-lg"
                          onClick={() => openModal(proudct.id)}
                        />
                        <BsTrashFill
                          className="text-red-700 cursor-pointer lg:text-lg"
                          onClick={() => deleteProduct(proudct.id)}
                        />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <button
          className="mt-10 bg-blue-500 hover:bg-blue-700 transition-all duration-200 text-white rounded p-2"
          onClick={() => openCreateProductModal()}
        >
          Add a new products
        </button>
      </div>
    </div>
  );
};

export default AdminPanel;
