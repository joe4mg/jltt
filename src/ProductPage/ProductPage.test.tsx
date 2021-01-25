import React from "react";
import { render, screen } from "@testing-library/react";
import { ProductPage } from "./ProductPage";

const props = {
  title: "Miele G6820 SC Freestanding Dishwasher",
  images: {
    altText: "Some alt text",
    urls: ["sample.jpg"],
  },
  price: "329.00",
  productInformationHTML:
    "\u003cp\u003ePlenty of convenient features\u003c/p\u003e",
  specialOffer: "Special offer text",
  guaranteeInformation: ["2 year guarantee included"],
  productCode: "012345",
  productFeatures: [
    {
      value: "YES",
      name: "Salt Level Indicator",
    },
    {
      value: "Freestanding",
      name: "Type",
    },
  ],
  onClose: () => null,
};

test("displays price", () => {
  render(<ProductPage {...props} />);

  const price = screen.getByText("£329.00");
  expect(price).toBeInTheDocument();
});
test("displays product information", () => {
  render(<ProductPage {...props} />);

  const productInfo = screen.getByText("Plenty of convenient features");
  expect(productInfo).toBeInTheDocument();
});
test("displays special offer details when available", () => {
  render(<ProductPage {...props} />);

  const specialOfterText = screen.getByText("Special offer text");
  expect(specialOfterText).toBeInTheDocument();
});
test("displays guarantee information", () => {
  render(<ProductPage {...props} />);

  const guarantee = screen.getByText("2 year guarantee included");
  expect(guarantee).toBeInTheDocument();
});
test("displays product code", () => {
  render(<ProductPage {...props} />);

  const code = screen.getByText("Product code: 012345");
  expect(code).toBeInTheDocument();
});
test("displays product specification data", () => {
  render(<ProductPage {...props} />);

  const feature = screen.getByRole("row", {
    name: /Salt Level Indicator YES/i,
  });
  expect(feature).toBeInTheDocument();
});
