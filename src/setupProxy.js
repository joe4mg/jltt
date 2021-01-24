const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "/mobile-apps/api/",
    createProxyMiddleware({
      target: "https://api.johnlewis.com/",
      changeOrigin: true,
      secure: true,
      logLevel: "debug",
    })
  );
  app.use(
    "/search/api/",
    createProxyMiddleware({
      target: "https://api.johnlewis.com/",
      changeOrigin: true,
      secure: true,
      logLevel: "debug",
    })
  );
};
