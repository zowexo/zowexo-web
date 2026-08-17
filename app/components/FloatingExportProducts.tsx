"use client";

import Image from "next/image";

const products = [
  {
    name: "Cardamom",
    image: "/cardamom.png",
    className: "floating-product product-1",
  },
  {
    name: "Banana",
    image: "/banana.png",
    className: "floating-product product-2",
  },
  {
    name: "Mango",
    image: "/mango.png",
    className: "floating-product product-3",
  },
  {
    name: "Onion",
    image: "/onion.png",
    className: "floating-product product-4",
  },
];

export default function FloatingExportProducts() {
  return (
    <div className="floating-products" aria-hidden="true">
      {products.map((product) => (
        <div
          key={product.name}
          className={product.className}
        >
          <Image
            src={product.image}
            alt=""
            width={110}
            height={110}
            className="floating-product-image"
          />
        </div>
      ))}
    </div>
  );
}