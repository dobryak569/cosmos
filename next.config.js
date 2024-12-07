/** @type {import('next').NextConfig} */
const nextConfig = {
  // Включаем поддержку серверных компонентов
  reactStrictMode: true,
  
  // Настройка домена
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3000/api/:path*', // В продакшене замените на https://expusgame.ru/api/:path*
      },
    ];
  },

  // Настройка заголовков безопасности
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          }
        ]
      }
    ];
  }
};

module.exports = nextConfig; 