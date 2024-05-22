import '@/styles/globals.css';

import { AppProps } from 'next/app';
import { Noto_Sans_KR } from 'next/font/google';
import { ThemeProvider } from 'next-themes';

const noto = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
const BlogApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute='class'>
      <Component {...pageProps} className={noto.className} />
    </ThemeProvider>
  );
};

export default BlogApp;
