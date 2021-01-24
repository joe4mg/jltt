import React, { SyntheticEvent } from "react";

export interface ProductGrimItemValues {
  productId: string;
  price: string;
  title: string;
  image: string;
}

export interface ProductGridItemProps extends ProductGrimItemValues{
  onProductSelect: (productId: string) => void;
}

export const ProductGridItem = ({
  productId,
  price,
  title,
  image,
  onProductSelect,
}: ProductGridItemProps) => {
  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault();
    onProductSelect(productId);
  };
  return (
    <div className={"grid-item"} data-testid="list-item" onClick={handleClick}>
      <h2>{title}</h2>
      <p>&pound;{price}</p>
      <p>{image}</p>
      <p>{productId}</p>
    </div>
  );
};
