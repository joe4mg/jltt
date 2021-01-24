import React from "react";
import ReactHtmlParser from "react-html-parser";

interface ProductFeature {
  name: string;
  value: string;
}

interface ImageSources {
  altText: string;
  urls: string[];
}

export interface ProductPageProps {
  title: string;
  images: ImageSources;
  price: string;
  productInformationHTML: string;
  specialOffer?: string;
  guaranteeInformation: string[];
  productCode: string;
  productFeatures: ProductFeature[];
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
}: ProductPageProps) => {
  return (
    <div className="product-page">
      <h1>{title}</h1>
      <p>{images.urls[0]}</p>
      <p>&pound;{price}</p>
      <div>{ReactHtmlParser(productInformationHTML)}</div>
      {specialOffer && <p>{specialOffer}</p>}
      <p>{guaranteeInformation}</p>
      <p>{productCode}</p>
      <table>
        <thead>
          <td>Feature</td>
          <td>Detail</td>
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
