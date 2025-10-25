/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
    SUPABASE_SERVICE_KEY: process.env.SUPABASE_SERVICE_KEY,
    SUPABASE_URL: process.env.SUPABASE_URL,
  },
};

export default nextConfig;
