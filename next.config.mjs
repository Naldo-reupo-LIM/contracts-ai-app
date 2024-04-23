/** @type {import('next').NextConfig} */
import nextIntl from "next-intl/plugin";

const nextConfig = {
  reactStrictMode: true,
};

const withNextIntl = nextIntl("./src/i18n.ts");

export default withNextIntl(nextConfig);
