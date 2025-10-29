import React from "react";
import Products from "../../Products";

interface Product {
  id: string; // ubah ke string biar konsisten
  title: string;
  seller: string;
  price: number;
  description: string;
  imageUrl: string;
  link: string;
}

export default function MakananDetail({
  params,
}: {
  params: { makananId: string };
}) {
  const { makananId } = params;

  return (
    <div>
      {Products.map((product: Product) => {
        if (product.id === makananId) {
          return (
            <div key={product.id} className="p-4">
              <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
              <p className="mb-2">{product.description}</p>
              <p className="font-semibold">Price: ${product.price}</p>
            </div>
          );
        }
      })}
    </div>
  );
}
