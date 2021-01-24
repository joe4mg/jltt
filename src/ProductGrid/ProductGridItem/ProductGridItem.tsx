import React from "react";

export interface ProductGridItemProps {
  productId: string;
  price: string;
  title: string;
  image: string;
}

export const ProductGridItem = ({
  productId,
  price,
  title,
  image,
}: ProductGridItemProps) => (
  <div className={"grid-item"} data-testid="list-item">
    <h2>{title}</h2>
    <p>&pound;{price}</p>
    <p>{image}</p>
    <p>{productId}</p>
  </div>
);
