import React, { useContext } from 'react'
import { ProductContext } from "../context/context";

const useMyContext = () => {
  // get the context
  const context = useContext(ProductContext);

  // if `undefined`, throw an error
  if (context === undefined) {
    throw new Error("ProductContext was used outside of its Provider");
  }

  return context;
}

export default useMyContext