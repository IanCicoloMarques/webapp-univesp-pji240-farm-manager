import { useState, useContext } from "react";
import { Button, Container } from "react-bootstrap";

import CartContext from "../../contexts/cartContext";

export default function Product(props) {
  const { productId, name, price, image, setSelected, index } = props;
  const {
    cart,
    setCart,
    addProductToCart,
    removeProductFromCart,
    updateProductOnCart,
  } = useContext(CartContext);
  const [counter, setCounter] = useState(initialCounter);

  function initialCounter() {
    let result = 0;
    const cartItem = cart.find((x) => x.productId === productId);
    cartItem ? (result = cartItem.amount) : (result = 0);
    return result;
  }

  function handleProductAdd() {
    if (counter == 0) {
      setCounter(counter + 1);
      addProductToCart({ ...props });
    } else {
      updateProductOnCart(productId, counter + 1);
      setCounter(counter + 1);
    }
  }

  function handleProductSubtract() {
    if (counter == 1) {
      removeProductFromCart(productId);
      setCounter(0);
    } else if (counter > 1) {
      updateProductOnCart(productId, counter - 1);
      setCounter(counter - 1);
    }
  }

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105 hover:shadow-xl">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <a href="#" className="text-lg font-bold text-emerald-500">
          {name}
        </a>
        <p className="text-lg font-bold text-gray-900">R${price.toFixed(2)}</p>
        <div className="mt-4"></div>
        <Container style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            style={{ fontSize: "large", color: "black" }}
            onClick={handleProductSubtract}>
            -
          </Button>
          {counter}
          <Button
            style={{ fontSize: "large", color: "black" }}
            onClick={handleProductAdd}>
            +
          </Button>
        </Container>
      </div>
    </div>
  );
}
