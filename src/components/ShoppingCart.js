import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import useMyContext from "../hooks/useMyContext";
import useTitle from "../hooks/useTitle";
let counter = 0;

const ShoppingCart = () => {
  useTitle("Cart");
  const current = new Date();
  // const date = `${current.getDate()}/${current.getMonth()}/${current.getFullYear()}`;
  const { products, setProducts, cart, setCart, factor, setFactor } =
    useMyContext();
  const UID = () => `${++counter}-${new Date().getTime()}`;
  const addToCart = (id) => {
    const unicP = products.findIndex((product) => product.id === id);
    const unic = cart.findIndex((product) => product.id === id);
    products[unicP].isInCart = true;
    if (cart[unic]) {
      cart[unic].qty += 1;
      setCart([...cart]);
      // cart.map(p => p.id === id ? setCart([{...cart[unic], qty: cart[unic].qty + 1}]) : p)
    } else {
      setCart([...cart, { id: products[unicP].id, qty: 1 }]);
    }
  };
  const removeFromCart = (id) => {
    const unicP = products.findIndex((product) => product.id === id);
    const unic = cart.findIndex((product) => product.id === id);
    if (cart[unic].qty === 1) {
      cart.splice(unic, 1);
      setCart([...cart]);
      products[unicP].isInCart = false;
    } else if (cart[unic].qty > 1) {
      cart[unic].qty -= 1;
      setCart([...cart]);
    }
    setCart([...cart]);
  };
  const addToFactor = () => {
    if (cart) {
      setFactor([
        ...factor,
        { products: [...cart], date: new Date().toISOString(), listNumber: UID() },
      ]);
      products.map((product) => (product.isInCart = false));
      setProducts([...products]);
      setCart([]);
    }
  };
  const clearCart = () => {
    products.map((product) => (product.isInCart = false));
    setProducts([...products]);
    setCart([]);
  };

  const calculateTotalPrice = () => {
    // return cart.map((item) => {
    //   const obj = products.find((product) => product.id == item.id);
    //   return { ...obj, quantity: item.qty };
    // });
    return cart.reduce((acc, cur) => {
      const thisProduct = products.find((product) => product.id == cur.id);
      return acc + cur.qty * thisProduct.price;
    }, 0);
  };

  console.log(cart);
  console.log(products);

  return (
    <div className="min-h-screen w-full bg-slate-100 py-10">
      <div className="container grid grid-cols-4 gap-4">
        <div className="lg:col-span-3 col-span-4 bg-white shadow-sm px-2 py-5">
          {cart.length === 0 ? (
            <div className="text-center">
              <div className="max-w-[300px] mx-auto mt-4">
                <img
                  className="w-full"
                  src={require("../img/realistic-metal-basket.png")}
                  alt="realistic-metal-basket"
                />
              </div>
              <div className="font-semibold text-2xl mt-6 mb-4">
                Your cart is empty
              </div>
              <div>You can go to the following pages to see more products:</div>
              <div className="space-x-4 mt-2 text-blue-800">
                <Link to={"/"}>Home</Link>
                <Link to={"/products"}>Products</Link>
              </div>
            </div>
          ) : (
            products.map((cartProduct, i) => {
              return cartProduct.isInCart === true ? (
                <div
                  className="flex flex-wrap justify-between items-center mb-2"
                  key={i}
                >
                  <div className="flex flex-wrap space-y-3 mb-5">
                    <div className="max-w-[150px] min-h-[150px]">
                      <img
                        className="w-full"
                        src={cartProduct.image}
                        alt="Product-Photo"
                      />
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-lg">
                        {cartProduct.name}
                      </p>
                      <div className="mt-2">
                        <p>Color: White</p>
                        <p>$ {cartProduct.price}</p>
                      </div>
                    </div>
                  </div>
                  <div className="sm:mx-5 mx-auto p-1 border-2 rounded flex">
                    {cart.length && cartProduct.isInCart === true ? (
                      <>
                        <button
                          className="text-red-500 transition-all duration-200 hover:bg-red-500 hover:text-white rounded py-1 px-2 mr-2"
                          onClick={() => removeFromCart(cartProduct.id)}
                        >
                          <AiOutlineMinus className=" text-lg" />
                        </button>
                        <span className="mr-2">
                          {cart.map((c) =>
                            c.id === cartProduct.id ? c.qty : null
                          )}
                        </span>
                        <button
                          className="text-red-500 transition-all duration-200 hover:bg-red-500 hover:text-white rounded py-1 px-2 mr-1"
                          onClick={() => addToCart(cartProduct.id)}
                        >
                          <AiOutlinePlus className=" text-lg" />
                        </button>
                      </>
                    ) : null}
                  </div>
                </div>
              ) : null;
            })
          )}
        </div>
        <div className="lg:col-span-1 col-span-4 max-h-[300px] sticky top-32 bg-white shadow-sm p-4 space-y-36">
          <div className="space-y-4">
            <div className="flex flex-wrap items-baseline space-x-2 text-center">
              <span>Total number:</span>
              <span className="font-semibold">
                {cart.reduce((acc, cur) => acc + cur.qty, 0)}
              </span>
            </div>
            <div className="flex flex-wrap items-baseline space-x-2 text-center">
              <span>Total payment:</span>
              <span className="font-semibold">{calculateTotalPrice()} $</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between">
            <button
              type="submit"
              onClick={() => clearCart()}
              className="py-1 px-2 rounded transition-all hover:bg-[#0082FD] hover:text-white duration-300"
            >
              Clear
            </button>
            <Link to={"/userprofile/orders"}>
              <button
                className="py-1 px-2 rounded bg-[#EF4056] text-white transition-all duration-300 hover:bg-[#d31f37]"
                onClick={() => addToFactor()}
              >
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
