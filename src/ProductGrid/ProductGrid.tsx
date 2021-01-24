import React from "react";
import {
  ProductGridItem,
  ProductGridItemProps,
} from "./ProductGridItem/ProductGridItem";

interface ProductGridProps {
  products: ProductGridItemProps[];
}

export const ProductGrid = ({ products = [] }: ProductGridProps) => (
  <div className={"product-grid"}>
    <h1 className={"product-grid__grid"}>Dishwashers ({products.length})</h1>
    <div className={"product-grid__grid"}>
      {products.map(({ image, price, productId, title }) => (
        <ProductGridItem
          image={image}
          price={price}
          key={productId}
          productId={productId}
          title={title}
        />
      ))}
    </div>
  </div>
);
