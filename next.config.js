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
  images: {
    loader: 'akamai',
    path: '',
  },
  trailingSlash: true
}

module.exports = nextConfig
