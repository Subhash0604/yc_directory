import type { NextConfig } from "next";
import { hostname } from "os";

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
  }
};

export default nextConfig;
