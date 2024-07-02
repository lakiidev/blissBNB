/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
      "res.cloudinary.com",
      "cloudflare-ipfs.com",
    ],
  },
};

module.exports = nextConfig;
