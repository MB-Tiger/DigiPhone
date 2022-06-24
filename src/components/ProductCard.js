import React from "react";
import { AiOutlinePlus, AiOutlineMinus, AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import useMyContext from "../hooks/useMyContext";
import useNumberWithCommas from "../hooks/useNumberWithCommas";

const ProductCard = (props) => {
  const { product, i } = props;
  const { products, cart, setCart } = useMyContext();
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

  return (
    <div
      className="bg-white min-w-[250px] shadow mx-4 mb-10 mt-3 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-lg overflow-hidden relative"
      key={i}
    >
      <Link to={`/productinfo/${product.id}`}>
        <div className="max-w-[250px] min-h-[250px]">
          <img className="w-full" src={product.image} alt="product-photo" />
        </div>
      </Link>
      <div className="pl-5 pt-1 pb-3">
        <Link to={`/productinfo/${product.id}`}>
          <p>{product.name}</p>
          <div className="flex items-center space-x-1">
            <p>
              <AiFillStar className="inline text-yellow-500" />
            </p>
            <p>{product.rate}</p>
          </div>
        </Link>
        <span className="flex justify-between items-center">
          <Link to={`/productinfo/${product.id}`}>
            <p className="font-bold">$ {useNumberWithCommas(product.price)}</p>
          </Link>
          <span className="flex items-center">
            {cart.length && product.isInCart === true ? (
              <>
                <span
                  className="mr-1 p-1 font-bold text-xl bg-red-500 transition-all duration-200 hover:bg-red-700 text-white rounded"
                  onClick={() => removeFromCart(product.id)}
                >
                  <AiOutlineMinus />
                </span>
                <span className="mr-1">
                  {cart.map((cartProduct) =>
                    cartProduct.id === product.id ? cartProduct.qty : null
                  )}
                </span>
              </>
            ) : null}
            <span
              className="mr-5 p-1 font-bold text-xl bg-red-500 transition-all duration-200 hover:bg-red-700 text-white rounded"
              onClick={() => addToCart(product.id)}
            >
              <AiOutlinePlus />
            </span>
          </span>
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
