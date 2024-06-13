const path = require('path')

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
