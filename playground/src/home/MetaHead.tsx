import Head from 'next/head';

const meta = {
  title: 'iPhone Playground',
  description: '🏝️ iPhone 14 Pro with dynamic island, on the web.',
  image: 'https://iphone.junho.io/og-image.png',
  url: 'https://iphone.junho.io',
};

type MetaHeadProps = {
  title?: string;
  children?: React.ReactNode;
};

export const MetaHead: React.FC<MetaHeadProps> = ({ title, children }) => {
  const currentTitle = title ?? meta.title;

  return (
    <Head>
      <title>{currentTitle}</title>
      <meta name="title" content={currentTitle} />
      <meta name="description" content={meta.description} />
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏴‍☠️</text></svg>"
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={meta.url} />
      <meta property="og:title" content={currentTitle} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={meta.image} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={meta.url} />
      <meta property="twitter:title" content={currentTitle} />
      <meta property="twitter:description" content={meta.description} />
      <meta property="twitter:image" content={meta.image} />
      <meta name="theme-color" content="#19181d" />
      {children}
    </Head>
  );
};
