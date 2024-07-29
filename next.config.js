/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // remotePatterns: ['picsum.photos', 'i.imgur.com', 'images.unsplash.com', "cdn.sanity.io"]
        remotePatterns: [
                {
                    protocol: 'https',
                    hostname: 'picsum.photos',
                    // port: '',
                    // pathname: '/account123/**',
                },
                {
                    protocol: 'https',
                    hostname: 'i.imgur.com',
                    // port: '',
                    // pathname: '/account123/**',
                },
                {
                    protocol: 'https',
                    hostname: 'images.unsplash.com',
                    // port: '',
                    // pathname: '/account123/**',
                },
                {
                    protocol: 'https',
                    hostname: 'cdn.sanity.io',
                    // port: '',
                    // pathname: '/account123/**',
                },
        ]
    },
}

module.exports = nextConfig
