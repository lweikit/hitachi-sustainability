/** @type {import('next').NextConfig} **/
const withTM = require("next-transpile-modules")(["gsap"]);

module.exports = withTM({
  basePath: '/sustainability',
  reactStrictMode: true,
  images: {
    loader: 'cloudinary',
    path: '/',
  },
});
