import React, { SyntheticEvent, useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";
import "./ProductPage.css";
import { ImageGallery } from "./ImageGallery/ImageGallery";

interface ProductFeature {
  name: string;
  value: string;
}

export interface ImageSources {
  altText: string;
  urls: string[];
}

export interface ProductDetails {
  title: string;
  images: ImageSources;
  price: string;
  productInformationHTML: string;
  specialOffer?: string;
  guaranteeInformation: string[];
  productCode: string;
  productFeatures: ProductFeature[];
}

export interface ProductPageProps extends ProductDetails {
  onClose: () => void;
}

export const ProductPage = ({
  title,
  images,
  price,
  productInformationHTML,
  specialOffer,
  guaranteeInformation,
  productCode,
  productFeatures,
  onClose,
}: ProductPageProps) => {
  const [truncateText, setTruncateText] = useState(true);
  const handleCloseClick = (e: SyntheticEvent) => {
    e.preventDefault();
    onClose();
  };
  const handleTruncateToggle = (e: SyntheticEvent) => {
    e.preventDefault();
    setTruncateText(!truncateText);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="product-page">
      <header className="product-page__header">
        <button
          className="product-page__header__back-button"
          onClick={handleCloseClick}
          aria-label="Back to product list"
        >
          &lsaquo;
        </button>
        <h1 className="product-page__header__title">{title}</h1>
      </header>
      <div className="product-page__images">
        <ImageGallery {...images} />
      </div>
      <div className="product-page__price-info price-info">
        <p className="price-info__price">&pound;{price}</p>
        {specialOffer && (
          <div className="price-info__offer">{specialOffer}</div>
        )}
        <p className="price-info__guarantee">{guaranteeInformation}</p>
      </div>
      <div className="product-page__product-details">
        <h2>Product information</h2>
        <p>Product code: {productCode}</p>
        <div
          className={`product-description ${
            !truncateText ? "product-description--open" : ""
          }`}
        >
          {ReactHtmlParser(productInformationHTML)}
        </div>
        <button
          className="price-info__text-toggle-button"
          onClick={handleTruncateToggle}
        >
          <span>{`${truncateText ? "Read more" : "Read less"}`}</span>{" "}
          <span>&rsaquo;</span>
        </button>
        <h2>Product specification</h2>
        <table>
          <thead>
            <tr>
              <td>Feature</td>
              <td>Detail</td>
            </tr>
          </thead>
          <tbody>
            {productFeatures.map(({ name, value }, idx) => (
              <tr key={idx}>
                <td>{name}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
