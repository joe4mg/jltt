import React, { useEffect, useState } from "react";
import "./App.css";
import { ProductGrid } from "./ProductGrid/ProductGrid";
import { ProductGrimItemValues } from "./ProductGrid/ProductGridItem/ProductGridItem";
import { ProductDetails, ProductPage } from "./ProductPage/ProductPage";

function App() {
  const [error, setError] = useState<string>();
  const [isLoaded, setIsLoaded] = useState(false);
  const [productList, setProductList] = useState<ProductGrimItemValues[]>([]);
  const [
    activeProductData,
    setActiveProductData,
  ] = useState<ProductDetails | null>(null);

  useEffect(() => {
    const parseProductList = (products: any[]) =>
      products.map((product) => ({
        productId: product.productId,
        price: product.price.now,
        title: product.title,
        image: product.image,
      }));
    fetch(
      "/search/api/rest/v2/catalog/products/search/keyword?q=dishwasher &key=AIzaSyDD_6O5gUgC4tRW5f9kxC0_76XRC8W7_mI"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setProductList(parseProductList(result.products));
        },
        (error) => {
          setIsLoaded(true);
          setError(error.message);
        }
      );
  }, []);

  const handleShowProduct = (productId: string) => {
    fetch(`/mobile-apps/api/v1/products/${productId}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setActiveProductData({
            title: result.title,
            images: result.media.images,
            price: result.price.now,
            productInformationHTML: result.details.productInformation,
            specialOffer: !!result.displaySpecialOffer?.length && result.displaySpecialOffer,
            guaranteeInformation: result.additionalServices.includedServices,
            productCode: result.code,
            productFeatures: result.details.features[0].attributes,
          });
        },
        (error) => {
          setIsLoaded(true);
          setError(error.message);
        }
      );
  };

  const handleHideProduct = () => {
    setActiveProductData(null);
  };

  if (error) {
    return <div>Error: {error}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="App">
        {activeProductData ? (
          <ProductPage {...activeProductData} onClose={() => handleHideProduct()} />
        ) : (
          <ProductGrid
            products={productList}
            onShowProduct={(productId: string) => handleShowProduct(productId)}
          />
        )}
      </div>
    );
  }
}

export default App;
