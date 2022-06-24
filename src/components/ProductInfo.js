import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlineHeart,
  AiFillHeart,
  AiFillStar,
} from "react-icons/ai";
import { TiTickOutline } from "react-icons/ti";
import { FaDollarSign } from "react-icons/fa";
import {
  BsBell,
  BsTwitter,
  BsTelegram,
  BsInstagram,
  BsFacebook,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import useMyContext from "../hooks/useMyContext";
import useTitle from "../hooks/useTitle";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const ProductInfo = () => {
  useTitle("Product Info");
  const { id } = useParams();
  const { products, cart, setCart } = useMyContext();
  const [product, setProduct] = useState(null);
  const [colorSelected, setColorSelected] = useState(false);

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
  useEffect(() => {
    const unic = products.findIndex((item) => item.id == id);

    setProduct(products[unic]);
  }, []);
  const addToCart = (id) => {
    const unic = cart.findIndex((p) => p.id === id);
    product.isInCart = true;
    if (cart[unic]) {
      cart[unic].qty += 1;
      setCart([...cart]);
    } else {
      setCart([...cart, { id: product.id, qty: 1 }]);
    }
  };
  const addToFavorite = () => {
    product.isFavorite = !product.isFavorite;
    setProduct({ ...product });
  };

  if (!product)
    return (
      <div className="animate-spin w-16 h-16 m-16 rounded-full border-[10px] border-transparent border-b-[10px] border-b-red-800"></div>
    );
  // console.clear();
  // console.log(product);
  // console.log(product.color.blue)
  return (
    <div className="min-h-screen bg-slate-100 py-3">
      <div className="container">
        <div className="bg-white mb-3 rounded p-2 text-gray-600 shadow">
          <Link to={"/"}>Home</Link>
          <span> / </span>
          <Link to={"/products"}>Products</Link>
        </div>
        <div className="bg-white flex flex-wrap shadow">
          <div className="w-[500px]">
            <img
              className="w-full"
              src={require("../img/Galaxy-A52.jpg")}
              alt="Product-photo"
            />
          </div>
          <div className="mt-9 space-y-2 mx-4 w-[400px] mb-4">
            <h2 className="font-bold text-2xl">
              {product.company} {product.name}
            </h2>
            <hr />
            <div className="flex items-center space-x-1">
              <p>
                <AiFillStar className="inline text-yellow-500" />
              </p>
              <p> {product.rate} </p>
            </div>
            <div>
              <p className="font-bold text-md mb-2 mt-5">Colors:</p>
              <div className="flex flex-wrap space-x-2">
                {product.color.black ? (
                  <div
                    className="w-[30px] h-[30px] bg-black rounded-full cursor-pointer overflow-hidden"
                    onClick={() => {
                      colorSelected == false
                        ? setColorSelected(true)
                        : setColorSelected(false);
                    }}
                  >
                    {colorSelected == true ? (
                      <div className="w-[30px] h-[30px] bg-black rounded-full cursor-pointer z-[999] text-white opacity-50 flex items-center">
                        <TiTickOutline className="mx-auto w-[25px] h-[25px]" />
                      </div>
                    ) : null}
                  </div>
                ) : null}
                {product.color.blue ? (
                  <div
                    className="w-[30px] h-[30px] bg-blue-500 rounded-full cursor-pointer overflow-hidden"
                    onClick={() =>
                      colorSelected == false
                        ? setColorSelected(true)
                        : setColorSelected(false)
                    }
                  >
                    {colorSelected == true ? (
                      <div className="w-[30px] h-[30px] bg-black rounded-full cursor-pointer z-[999] text-white opacity-50 flex items-center">
                        <TiTickOutline className="mx-auto w-[25px] h-[25px]" />
                      </div>
                    ) : null}
                  </div>
                ) : null}
                {product.color.gold ? (
                  <div
                    className="w-[30px] h-[30px] bg-yellow-400 rounded-full cursor-pointer overflow-hidden"
                    onClick={() =>
                      colorSelected == false
                        ? setColorSelected(true)
                        : setColorSelected(false)
                    }
                  >
                    {colorSelected == true ? (
                      <div className="w-[30px] h-[30px] bg-black rounded-full cursor-pointer z-[999] text-white opacity-50 flex items-center">
                        <TiTickOutline className="mx-auto w-[25px] h-[25px]" />
                      </div>
                    ) : null}
                  </div>
                ) : null}
                {product.color.white ? (
                  <div
                    className="w-[30px] h-[30px] bg-gray-200 rounded-full cursor-pointer overflow-hidden"
                    onClick={() =>
                      colorSelected == false
                        ? setColorSelected(true)
                        : setColorSelected(false)
                    }
                  >
                    {colorSelected == true ? (
                      <div className="w-[30px] h-[30px] bg-black rounded-full cursor-pointer z-[999] text-white opacity-50 flex items-center">
                        <TiTickOutline className="mx-auto w-[25px] h-[25px]" />
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </div>
            <div>
              <h2 className="mt-5 font-bold text-2xl flex items-baseline">
                {numberWithCommas(product.price)}
                <FaDollarSign className="w-[13px] inline text-lg pl-1" />
              </h2>
            </div>
            <div className="pb-2">
              <p className="font-bold mt-5 mb-2">Attributes</p>
              <div>Memory: {product.attributes.memory}</div>
              <div>Screen size: {product.attributes.screenSize}</div>
              <div>Networks: {product.attributes.networks}</div>
            </div>
            {product.isInCart === false ? (
              <button
                className="w-full bg-[#EF4056] rounded-md text-white py-[6px] transition-all hover:bg-[#df233c]"
                onClick={() => addToCart(product.id)}
              >
                Add to cart
              </button>
            ) : null}
            {product.isInCart === true ? (
              <div className="p-1 border-2 rounded flex justify-center shadow-sm max-w-[120px]">
                <>
                  <button
                    className="text-red-500 transition-all duration-200 hover:bg-red-500 hover:text-white rounded py-1 px-2 mr-2"
                    onClick={() => removeFromCart(product.id)}
                  >
                    <AiOutlineMinus className=" text-lg" />
                  </button>
                  <span className="mr-2">
                    {cart.map((c) => (c.id === product.id ? c.qty : null))}
                  </span>
                  <button
                    className="text-red-500 transition-all duration-200 hover:bg-red-500 hover:text-white rounded py-1 px-2 mr-1"
                    onClick={() => addToCart(product.id)}
                  >
                    <AiOutlinePlus className=" text-lg" />
                  </button>
                </>
              </div>
            ) : null}
          </div>
          <div className="max-w-[300px] space-y-3 mx-4 lg:mx-auto mb-4 border px-3 py-6 mt-8 max-h-[280px] rounded-md shadow-sm">
            <div className="flex space-x-1">
              {product.isFavorite === false ? (
                <AiOutlineHeart
                  className="text-3xl text-red-700 cursor-pointer"
                  onClick={() => addToFavorite()}
                />
              ) : (
                <AiFillHeart
                  className="text-3xl text-red-700 cursor-pointer"
                  onClick={() => addToFavorite()}
                />
              )}
              <span>save</span>
            </div>
            <div className="flex items-center space-x-1">
              <img
                src={require("../img/guarantee.png")}
                alt="gurantee"
                className="w-[30px]"
              />
              <span>18 months corporate warranty</span>
            </div>
            <div className="flex items-center space-x-1">
              <BsBell className="w-[30px] text-2xl" />
              <span>Shipping from the next 2 working days</span>
            </div>
            <div className="flex items-center space-x-1">
              <img
                src={require("../img/truck (1).png")}
                alt="delivery-truck"
                className="w-[30px]"
              />
              <span>Free shipping nationwide</span>
            </div>
            <div className="flex justify-center items-center space-x-4 pt-2">
              <a href="/">
                <BsFacebook className="text-[#1278F3] text-xl" />
              </a>
              <a href="/">
                <BsTwitter className="text-[#1DA1F2] text-xl" />
              </a>
              <a href="/">
                <BsTelegram className="text-[#24A1DF] text-xl" />
              </a>
              <a href="/">
                <BsInstagram className="text-[#E7476D] text-xl" />
              </a>
            </div>
          </div>
        </div>
        <ProductDetails id={id} product={product} />
      </div>
    </div>
  );
};

export default ProductInfo;
