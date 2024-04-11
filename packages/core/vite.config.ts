import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "jake-core",
      fileName: "index.ts",
    },
    rollupOptions: {
      input: resolve(__dirname, "src/index.ts"),
    },
  },
  plugins: [dts()],
  server: {
    port: 3001,
  },
  resolve: {
    alias: {
      src: "/src",
    },
  },
});
