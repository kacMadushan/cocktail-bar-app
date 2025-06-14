/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.thecocktaildb.com',
            },
        ],
    },
    experimental: {
        typedRoutes: true
    },
};

export default nextConfig;
