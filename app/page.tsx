'use client';

import React from "react";
import { Product } from "./models/products";
import { products } from "./data/productsData";
import ProductCard from "./components/productCard";
import Navbar from "./components/navbar/navbar";

export default function Home() {
  return (
    <main>
      <Navbar user={true} logout={() => console.log("logout")} />
      <h1>Home dashboard</h1>
      <div className="products grid grid-cols-4 gap-4 p-4 m-4">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}

