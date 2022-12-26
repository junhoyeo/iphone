const { withPlugins } = require('next-composed-plugins');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withPlugins(
  {
    reactStrictMode: true,
    compiler: {
      styledComponents: true,
    },
    experimental: {
      transpilePackages: ['antd-mobile'],
    },
    images: {
      dangerouslyAllowSVG: true,
      domains: ['github.com', 'cho.sh', 'cataas.com', 'mzstatic.com'],
    },
  },
  [withBundleAnalyzer],
);
