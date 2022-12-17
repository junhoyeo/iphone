module.exports = {
  jit: true,
  darkMode: 'media',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './dynamic-island/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
