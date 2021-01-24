import React, { useEffect, useState } from "react";
import "./App.css";
import { ProductGrid} from "./ProductGrid/ProductGrid";
import { ProductGridItemProps } from "./ProductGrid/ProductGridItem/ProductGridItem";

function App() {
  const [error, setError] = useState<string>();
  const [isLoaded, setIsLoaded] = useState(false);
  const [productList, setProductList] = useState<ProductGridItemProps[]>([]);

  useEffect(() => {
    const parseProductList = (products: any[]) => products.map((product) => ({
      productId: product.code,
      price: product.price.now,
      title: product.title,
      image: product.image,
    }))
    fetch(
      "/search/api/rest/v2/catalog/products/search/keyword?q=dishwasher &key=AIzaSyDD_6O5gUgC4tRW5f9kxC0_76XRC8W7_mI"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setProductList(
            parseProductList(result.products)
          );
        },
        (error) => {
          setIsLoaded(true);
          setError(error.message);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="App">
        <ProductGrid products={productList} />
      </div>
    );
  }
}

export default App;
