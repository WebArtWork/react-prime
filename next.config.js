module.exports = {
    output: 'export',
    reactStrictMode: process.env.NODE_ENV === 'production' ? false : true,
    trailingSlash: true,
    env: {
        NEXT_PUBLIC_APP_VERSION: process.env.npm_package_version || ''
    },
    turbopack: {
        rules: {
            '*.svg': {
                loaders: ['@svgr/webpack'],
                as: '*.js'
            }
        }
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack']
        });

        return config;
    }
};
