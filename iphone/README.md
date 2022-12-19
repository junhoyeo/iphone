<a href="https://iphone.junho.io">
  <img src="https://iphone.junho.io/og-image.png" />
</a>

<p align="center">
  <h1 align="center">
    @junhoyeo/iphone
  </h1>
</p>

<p align="center">
  <a href="https://iphone.junho.io">
    <img alt="GitHub deployments" src="https://img.shields.io/github/deployments/junhoyeo/iphone/production?color=%23000000&label=deploy&logo=Vercel&logoColor=white&style=for-the-badge&labelColor=000" />
  </a>
   <a aria-label="NPM version" href="https://www.npmjs.com/package/@junhoyeo/iphone">
    <img alt="" src="https://img.shields.io/npm/v/@junhoyeo/iphone.svg?style=for-the-badge&labelColor=000000">
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-brightgreen.svg?style=for-the-badge&labelColor=000" />
  </a>
</p>

## 🏴‍☠️ @junhoyeo/iphone

> 🏝️ iPhone 14 Pro with dynamic island, on the web.

> **Warning**<br/>
> This package is under rapid development 🛠

```bash
yarn add @junhoyeo/iphone
```

```tsx
import { Phone, type GridItemProps } from '@junhoyeo/iphone';

const APPS: GridItemProps[] = [];
const DOCK: GridItemProps[] = [];
const BACKGROUND_IMAGE_URL: string = '';

<Phone
  frameColor="purple"
  transformScale={1}
  apps={APPS}
  dock={DOCK}
  backgroundImage={BACKGROUND_IMAGE_URL}
/>;
```

- **Special thanks to Sunghyun Cho([@anaclumos](https://github.com/anaclumos))! The implementation of Dynamic Island was made possible by his work.**
- If you found this project interesting, please consider following me([GitHub](https://github.com/junhoyeo)/[Twitter](https://twitter.com/_junhoyeo)) or [⭐️ giving it a star](https://github.com/junhoyeo/iphone/stargazers).

## Powered by

<p align="center">
  <a href="https://vitejs.dev">
    <img alt="Vite" src="https://camo.githubusercontent.com/61e102d7c605ff91efedb9d7e47c1c4a07cef59d3e1da202fd74f4772122ca4e/68747470733a2f2f766974656a732e6465762f6c6f676f2e737667" height="82px" />
  </a>
</p>

- [Fork](https://github.com/junhoyeo/dynamic-island) of [anaclumos/dynamic-island](https://github.com/anaclumos/dynamic-island)
- [picturepan2/devices.css](https://github.com/picturepan2/devices.css)

## Powers

- [junhoyeo/junho.io](https://github.com/junhoyeo/junho.io)
