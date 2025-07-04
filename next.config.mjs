/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // 移除 i18n 配置，因为我们使用自定义的域名方案
  async rewrites() {
    return [
      // 可以在这里添加其他重写规则
    ]
  },
}

export default nextConfig
