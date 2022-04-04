import React from "react";
import useMyContext from "../hooks/useMyContext";
import useTitle from "../hooks/useTitle";
import ProductCard from "./ProductCard";

const FavoritesList = () => {
  useTitle("Favorites")
  const { products } = useMyContext();
  return (
    <>
      <h3 className="text-xl font-semibold text-blue-900 mb-5">
        Favorites list
      </h3>
      <div className="flex flex-wrap justify-around px-[10px]">
        {products
          .filter((product) => product.isFavorite === true)
          .map((product, i) => {
            return <ProductCard product={product} i={i} key={i} />;
          })}
      </div>
    </>
  );
};

export default FavoritesList;
