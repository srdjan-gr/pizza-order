/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*.googleusercontent.com',
            },
            {
                protocol: 'https',
                hostname: 'perfect-pizza.s3.amazonaws.com',
            },
            {
                protocol: 'http',
                hostname: 'localhost:3000',
            },
        ],
    },
}

module.exports = nextConfig
