const { withPlugins } = require('next-composed-plugins');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withPlugins(
  {
    reactStrictMode: true,
    experimental: {
      appDir: true,
      transpilePackages: ['@junhoyeo/iphone'],
    },
    compiler: {
      styledComponents: true,
    },
  },
  [withBundleAnalyzer],
);
