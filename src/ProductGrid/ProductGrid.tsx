import React from "react";
import {
  ProductGridItem,
  ProductGrimItemValues,
} from "./ProductGridItem/ProductGridItem";
import "./ProductGrid.css";

interface ProductGridProps {
  products: ProductGrimItemValues[];
  onShowProduct: (productId: string) => void;
}

export const ProductGrid = ({
  products = [],
  onShowProduct,
}: ProductGridProps) => (
  <div className={"product-grid-page"}>
    <h1 className={"product-grid-page-title"}>
      Dishwashers ({products.length})
    </h1>
    <div className={"product-grid"}>
      {products.slice(0, 20).map(({ image, price, productId, title }) => (
        <ProductGridItem
          image={image}
          price={price}
          key={productId}
          productId={productId}
          title={title}
          onProductSelect={onShowProduct}
        />
      ))}
    </div>
  </div>
);
