# JL task - Joe Campion

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
This was to save time configuring builds and manually installing packages + a test runner.

Details are in the CRA readme CRA_README.MD. The usual scripts apply such as `npm start` to run in dev mode, `npm build` for a production ready manifest and `npm test` to run the tests.

## Assumptions / short cuts

- No routing (such as React Router) was required for the task requirements.
- Only displaying image media on detail page
- Set API responses as `any` - would ideally have type defs for these.
- Using CSS grid as no requirements mentioned for older browser support.
- I've used the ReactHtmlParser node package as it felt cleaner than using `dangerouslySetInnerHTML`.
- I decided to keep styling implementation as simple as possible - for a larger application I would add colour/font CSS variables and perhaps use a CSS-in-JS implementation.

