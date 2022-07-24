/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/beer/page/1',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
