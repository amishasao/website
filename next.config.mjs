/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Case studies used to live under /blog; keep old links working
  async redirects() {
    return [
      { source: "/blog", destination: "/work", permanent: true },
      { source: "/blog/:slug", destination: "/work/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
