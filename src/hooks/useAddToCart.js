const useAddToCart = (id) => {
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
  console.log(cart);
  // console.log(unicP)
  // console.log(unic)
};

export default useAddToCart;
