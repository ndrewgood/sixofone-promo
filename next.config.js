/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push(
      {
      test: /\.svg$/,
      use: ["@svgr/webpack"]
      },
      {
        test: /\.(glb|gltf)$/i,
        loader: 'file-loader',
        options: {
            publicPath: './',
            name: '[name].[ext]'
        }
      },
    )
    
    return config;
  }
}

