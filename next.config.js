/** @type {import('next').NextConfig} **/
const withTM = require("next-transpile-modules")(["gsap"]);

module.exports = withTM({
  reactStrictMode: true,
  images: {
    loader: 'cloudinary',
    path: '/',
  },
});
