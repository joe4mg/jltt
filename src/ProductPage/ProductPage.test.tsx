import React from "react";
import { render, screen } from "@testing-library/react";
import { ProductPage } from "./ProductPage";

const props = {
  title: "",
  media: "",
  price: "",
  productInformationHTML: "",
  specialOffer: "",
  guaranteeInformation: "",
  productCode: "",
  productFeatures: [{ name: "", value: "" }],
};

describe("ProductPage", () => {
  render(<ProductPage {...props} />);
  test("displays price", () => {

  });
  test("displays product information", () => {

  });
  test("displays special offer details when available", () => {

  });
  test("displays guarantee information", () => {

  });
  test("displays product code", () => {

  });
  test("displays product specification data", () => {

  });
});
