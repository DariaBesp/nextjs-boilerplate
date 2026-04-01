import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // webpack(config) {
  //   // 1. Находим правило для SVG в стандартном loader'e
  //   const fileLoaderRule = config.module.rules.find((rule: any) =>
  //     rule.test?.test?.(".svg"),
  //   );
  //   // 2. Исключаем svg из стандартного file-loader
  //   if (fileLoaderRule) {
  //     fileLoaderRule.exclude = /\.svg$/;
  //   }
  //   // 3. Добавляем SVGR
  //   config.module.rules.push({
  //     test: /\.svg$/,
  //     issuer: /\.[jt]sx?$/,
  //     use: ["@svgr/webpack"],
  //   });
  //   return config;
  // },
};

export default nextConfig;
