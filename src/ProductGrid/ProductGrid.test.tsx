import React from "react";
import { render, screen } from "@testing-library/react";
import { ProductGrid } from "./ProductGrid";

const props = {
  products: [
    {
      productId: "",
      price: "",
      title: "",
      image: "",
    }
  ]
}

describe("ProductGrid", () => {
  render(<ProductGrid {...props} />);

  test("heading displays total number of all dishwashers", () => {

  });
  test("lists all dishwashers provided by props", () => {

  });
  test("grid items display title", () => {

  });
  test("grid items display price", () => {

  });
});
