import React, { SyntheticEvent } from "react";
import "./ProductGridItem.css";

export interface ProductGrimItemValues {
  productId: string;
  price: string;
  title: string;
  image: string;
}

export interface ProductGridItemProps extends ProductGrimItemValues {
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
    <div className="grid-item" data-testid="list-item" onClick={handleClick}>
      <img src={image} alt={title} />
      <h2 className="grid-item__title">{title}</h2>
      <p className="grid-item__price">&pound;{price}</p>
    </div>
  );
};
