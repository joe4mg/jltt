import React, { SyntheticEvent } from "react";
import ReactHtmlParser from "react-html-parser";

interface ProductFeature {
  name: string;
  value: string;
}

interface ImageSources {
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
  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault();
    onClose();
  };
  return (
    <div className="product-page">
      <h1>{title}</h1>
      <button onClick={handleClick}>Back</button>
      <p>{images.urls[0]}</p>
      <p>&pound;{price}</p>
      <div>{ReactHtmlParser(productInformationHTML)}</div>
      {specialOffer && <div>{specialOffer}</div>}
      <p>{guaranteeInformation}</p>
      <p>{productCode}</p>
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
  );
};
