/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /*module: {
    rules: [
      { 
        test: /\.(glsl|vs|fs|vert|frag)$/, 
        exclude: /node_modules/,
        use: [
          'raw-loader',
          'glslify-loader'
        ]
      }
    ]
  }*/
  /*webpack: (config, options) => {
    config.module.rules.push({
        test: /\.(glsl|vs|fs|vert|frag)$/,
        use: ['raw-loader', 'glslify-loader'],
    });

    return config;*/
    /*swcMinify: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(frag|vert)$/,
      type: 'asset/source'
    })
    return config
}*/
}

module.exports = nextConfig

const withTM = require('next-transpile-modules')(['three'])
module.exports = withTM()