import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
// @ts-ignore
import netlifyEdge from "@netlify/vite-plugin-netlify-edge";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths(),netlifyEdge(),],
});
