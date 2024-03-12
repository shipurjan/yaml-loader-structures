/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // Important: return the modified config
    config.module.rules.push({
      test: /\.ya?ml$/,
      oneOf: [
        {
          resourceQuery: /stream/,
          options: { asStream: true },
          loader: 'yaml-loader'
        },
        { loader: 'yaml-loader' }
      ]
    });
    return config;
  },
};

export default nextConfig;
