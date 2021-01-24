import { rest } from "msw";
const productDetailResponse = require("./responses/productDetail.json");
const productListResponse = require("./responses/productList.json");

export const handlers = [
  // Dishwasher product detail
  rest.get(
    "https://api.johnlewis.com/mobile-apps/api/v1/products/*",
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(productDetailResponse));
    }
  ),
  // Dishwasher list
  rest.get(
    "https://api.johnlewis.com/search/api/rest/v2/catalog/products/search/keyword?q=dishwasher%20&key=AIzaSyDD_6O5gUgC4tRW5f9kxC0_76XRC8W7_mI",
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(productListResponse));
    }
  ),
];
