import type { NextConfig } from 'next';
const nextConfig: NextConfig = {
  transpilePackages: ['@delivery/ui', '@delivery/config', '@delivery/utils', '@delivery/types', '@delivery/api-client'],
};
export default nextConfig;
