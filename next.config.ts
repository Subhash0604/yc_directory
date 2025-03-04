import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config opt ions here */
  images:{
    dangerouslyAllowSVG: true,  
    remotePatterns:[
      {
        protocol: "https",
        hostname: '*',
      }
    ]
  },
  experimental: {
    ppr: false
  },
  devIndicators: {
    // appIsrStatus:true,
    buildActivity:true,
    buildActivityPosition:'bottom-right',
  }
};

export default nextConfig;
