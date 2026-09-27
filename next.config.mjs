/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/org-chart-ladestack',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig