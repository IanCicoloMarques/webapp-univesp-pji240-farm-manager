import { Category } from "@mui/icons-material";
import { useState } from "react";

export default function ProductCard(props) {
  const { name, price, image, category } = props;
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105 hover:shadow-xl">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <a href="#" className="text-lg font-bold text-emerald-500">
          {name}
        </a>
        <p className="text-sm text-gray-600">{category}</p>
        <p className="text-lg font-bold text-gray-900">R${price.toFixed(2)}</p>
        <div className="mt-4">
          {/* <a href="#" className="text-emerald-500 hover:underline">
            View Details
          </a> */}
        </div>
      </div>
    </div>
  );
}
