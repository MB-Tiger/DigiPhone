import React, { useState, useEffect } from "react";
import useMyContext from "../hooks/useMyContext";
import useTitle from "../hooks/useTitle";
import ProductCard from "./ProductCard";
import ProductsFilter from "./ProductsFilter";

const Producst = () => {
  useTitle("Products");
  const { products } = useMyContext();
  const [searchNameValue, setSearchNameValue] = useState("");
  const [searchFromPriceValue, setsearchFromPriceValue] = useState(0);
  const [searchToPriceValue, setsearchToPriceValue] = useState(0);
  const [searchCompanyValue, setSearchCompanyValue] = useState("");
  const [searchFromRateValue, setsearchFromRateValue] = useState(0);
  const [searchToRateValue, setsearchToRateValue] = useState(0);

  useEffect(() => {
    setsearchToPriceValue(
      products.reduce((acc, cur) => (acc > cur.price ? acc : cur.price), 0)
    );
    setsearchToRateValue(
      products.reduce((acc, cur) => (acc > cur.rate ? acc : cur.rate), 0)
    );
  }, []);

  return (
    <div className="min-h-screen w-full bg-slate-100">
      <div className="flex items-center justify-center pt-8 space-x-2 py-4 ">
        <div className=" w-12 h-1 rounded-full bg-yellow-600"></div>
        <div>All products</div>
        <div className=" w-12 h-1 rounded-full bg-yellow-600"></div>
      </div>
      <div className="w-full grid grid-cols-4">
        <ProductsFilter
          searchNameValue={searchNameValue}
          setSearchNameValue={setSearchNameValue}
          searchFromPriceValue={searchFromPriceValue}
          setsearchFromPriceValue={setsearchFromPriceValue}
          searchToPriceValue={searchToPriceValue}
          setsearchToPriceValue={setsearchToPriceValue}
          searchCompanyValue={searchCompanyValue}
          setSearchCompanyValue={setSearchCompanyValue}
          searchFromRateValue={searchFromRateValue}
          setsearchFromRateValue={setsearchFromRateValue}
          searchToRateValue={searchToRateValue}
          setsearchToRateValue={setsearchToRateValue}
        />
        <div className="container px-6 flex flex-wrap justify-around lg:col-span-3 col-span-4">
          {products.length ? (
            products
              .filter((product) => {
                const nameFilter = product.name
                  .toLowerCase()
                  .includes(searchNameValue.toLowerCase());
                const companyFilter = product.company
                  .toLowerCase()
                  .includes(searchCompanyValue.toLowerCase());
                const priceFilter =
                  product.price > searchFromPriceValue &&
                  product.price < searchToPriceValue;
                const rateFilter =
                  product.rate > searchFromRateValue &&
                  product.rate < searchToRateValue;
                return nameFilter && companyFilter && priceFilter && rateFilter;
              })
              .map((product, i) => {
                return <ProductCard product={product} i={i} key={i} />;
              })
          ) : (
            <div className="animate-spin w-16 h-16 m-16 rounded-full border-[10px] border-transparent border-b-[10px] border-b-red-800"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Producst;
