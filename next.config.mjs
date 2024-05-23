/** @type {import('next').NextConfig} */

import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  latex: true,
  search: {
    codeblocks: false
  }
})

export default withNextra({
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
  reactStrictMode: true
})