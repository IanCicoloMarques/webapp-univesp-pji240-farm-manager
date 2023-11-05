import { useState } from "react";

export default function Product(props) {
  const { id, name, price, image, setSelected, index } = props;
  const [counter, setCounter] = useState(0);

  function handleProductAdd() {
    if (counter === 0) {
      setCounter(counter + 1);
      setSelected(index, counter);
    } else {
      setCounter(counter + 1);
      setSelected(index, counter);
    }
  }

  function handleProductSubtract() {
    if (counter === 1) {
      setCounter(0);
      setSelected(index, counter);
    } else if (counter > 1) {
      setCounter(counter - 1);
      setSelected(index, counter);
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
      </div>
    </div>
  );
}
