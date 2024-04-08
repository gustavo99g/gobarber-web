/** @type {import('next').NextConfig} */
const nextConfig = {
  logging:{
    fetches:{
      fullUrl:true
    }
  },
  images: {
    domains: ['i.pravatar.cc'],
  }
};

export default nextConfig;
