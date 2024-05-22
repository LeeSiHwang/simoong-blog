/** @type {import('next').NextConfig} */

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  latex: true,
  flexsearch: {
    codeblocks: false,
  },
  defaultShowCopyCode: true,
});

module.exports = withNextra({
  /** -- html output용 옵션 start -- */
  // output: 'export',
  // distDir: '.out',
  // images: {
  //   unoptimized: true,
  // },
  /** -- html output용 옵션 end -- */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'simoong-cdn.vercel.app',
        port: '',
        pathname: '/image/*',
      },
    ],
  },
  reactStrictMode: true,
  swcMinify: false,
  transpilePackages: ['tailwindcss', 'autoprefixer'],
  env: {
    URL: process.env.URL || 'production', // 클라이언트 측에서 사용할 환경 변수
  },
});
