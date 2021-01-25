import React from "react";
import { render, screen } from "@testing-library/react";
import { ProductGrid } from "./ProductGrid";

const props = {
  products: [
    {
      productId: "1222",
      price: "389.00",
      title: "Bosch Dishomatic",
      image: "sample.jpg",
    },
    {
      productId: "3444",
      price: "700.00",
      title: "Dish master 2000",
      image: "sample.jpg",
    },
    {
      productId: "5666",
      price: "250.00",
      title: "Panasonic Dishwasher",
      image: "sample.jpg",
    },
  ],
  onShowProduct: () => null,
};

test("heading displays total number of all dishwashers", () => {
  render(<ProductGrid {...props} />);
  const pageTitleWithCount = screen.getByText("Dishwashers (3)");
  expect(pageTitleWithCount).toBeInTheDocument();
});
test("lists all dishwashers provided by props", () => {
  render(<ProductGrid {...props} />);
  const listItems = screen.getAllByTestId("list-item");
  expect(listItems.length).toBe(3);
});
test("grid items display title", () => {
  render(<ProductGrid {...props} />);
  const itemTitle = screen.getByText("Panasonic Dishwasher");
  expect(itemTitle).toBeInTheDocument();
});
test("grid items display price", () => {
  render(<ProductGrid {...props} />);
  const itemPrice = screen.getByText("£250.00");
  expect(itemPrice).toBeInTheDocument();
});
