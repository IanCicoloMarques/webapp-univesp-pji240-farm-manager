import axios from "axios";
import { useState, useContext } from "react";

import "./HomePage.css";
import ProductCard from "../../ProductCard";
import ProductsContext from "../../../contexts/productsContext";

export default function HomePage() {
  const { products } = useContext(ProductsContext);

  const displayProducts = () => {
    return (
      <div className="max-w-6xl mx-auto py-6 px-6 xl:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              category={product.category}
              index={index}
            />
          ))}
        </div>
      </div>
    );
  };

  const displayLoading = () => {
    return <>Carregando produtos</>;
  };

  return (
    <div>
      <div className="header-with-background">
        <header className="relative  w-full h-1/4 py-10 px-6 lg:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <p className="mb-2 text-3xl lg:text-5 text-white font-bold">
              Sítio Nova Esperança - ADICIONAR DEMONSTRAÇÃO DA ACESSIBILIDADE NO
              VÍDEO
            </p>
            <p className="mb-8 text-white">
              ADICIONAR DEMONSTRAÇÃO DA ACESSIBILIDADE NO VÍDEO
            </p>
          </div>
        </header>
      </div>
      {products ? displayProducts() : displayLoading()}
    </div>
  );
}
