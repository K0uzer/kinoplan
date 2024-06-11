/* eslint-disable no-unused-vars */
const path = require('path')
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
}

module.exports = {
    ...nextConfig,
    webpack: (
        config,
        { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack },
    ) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': path.resolve(__dirname),
            '@/components': path.resolve(__dirname, 'components'),
        }
        return config
    },
}
