import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import HeaderSlider from "./HeaderSlider";
import useTitle from "../hooks/useTitle";
// import { ProductContext } from "../context/context";
import useMyContext from "../hooks/useMyContext";

const Home = () => {
  useTitle("Home");
  // const { products } = useContext(ProductContext);
  const { products } = useMyContext();

  return (
    <div className="min-h-screen w-full bg-slate-100">
      <HeaderSlider />
      <div className="mt-8 container grid lg:grid-cols-4 grid-cols-2 space-x-6 space-y-4">
        <div className="flex items-center space-x-4 lg:ml-0 ml-4">
          <img
            className="lg:w-[60px] lg:h-[60px] sm:w-[55px] sm:h-[55px] w-[40px] h-[40px]"
            src={require("../img/destination.png")}
            alt="destination"
          />
          <span className="md:text-base text-sm">Payment on the spot</span>
        </div>
        <div className="flex items-center space-x-4">
          <img
            className="lg:w-[60px] lg:h-[60px] sm:w-[55px] sm:h-[55px] w-[40px] h-[40px]"
            src={require("../img/box.png")}
            alt="box"
          />
          <span className="md:text-base text-sm">Commodity guarantee</span>
        </div>
        <div className="flex items-center space-x-4">
          <img
            className="lg:w-[60px] lg:h-[60px] sm:w-[55px] sm:h-[55px] w-[40px] h-[40px]"
            src={require("../img/truck.png")}
            alt="truck"
          />
          <span className="md:text-base text-sm">Fast and secure</span>
        </div>
        <div className="flex items-center space-x-4">
          <img
            className="lg:w-[60px] lg:h-[60px] sm:w-[55px] sm:h-[55px] w-[40px] h-[40px]"
            src={require("../img/exchange.png")}
            alt="exchange"
          />
          <span className="md:text-base text-sm">7-day return guarantee</span>
        </div>
      </div>
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 mt-16">
          <img
            className="cursor-pointer"
            src={require("../img/banner-2tai-02-01-1207A.png")}
            alt="banner1"
          />
          <img
            className="cursor-pointer"
            src={require("../img/banner-2tai-02-02-1207.png")}
            alt="banner2"
          />
        </div>
      </div>
      <div className="flex items-center justify-center mt-11 space-x-2 py-4 ">
        <div className=" w-12 h-1 rounded-full bg-yellow-600"></div>
        <div>our suggestion</div>
        <div className=" w-12 h-1 rounded-full bg-yellow-600"></div>
      </div>
      <div className="container flex flex-wrap justify-around">
        {products
          .sort((a, b) => a.price - b.price)
          .reverse()
          .slice(0, 4)
          .map((product, i) => {
            return <ProductCard product={product} i={i} key={i} />;
          })}
      </div>
      <div className="container">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10 mt-14">
          <img
            className="cursor-pointer"
            src={require("../img/apple.png")}
            alt="apple-photo"
          />
          <img
            className="cursor-pointer"
            src={require("../img/samsung.png")}
            alt="samsung-photo"
          />
          <img
            className="cursor-pointer"
            src={require("../img/xiaomi.png")}
            alt="xiaomi-photo"
          />
        </div>
      </div>
      <div className="flex items-center justify-center mt-10 space-x-2 py-4 ">
        <div className=" w-12 h-1 rounded-full bg-yellow-600"></div>
        <div>Popular</div>
        <div className=" w-12 h-1 rounded-full bg-yellow-600"></div>
      </div>
      <div className="container flex flex-wrap justify-around pb-8">
        {products
          .sort((a, b) => a.rate - b.rate)
          .reverse()
          .slice(0, 4)
          .map((product, i) => {
            return <ProductCard product={product} i={i} key={i} />;
          })}
      </div>
    </div>
  );
};

export default Home;
