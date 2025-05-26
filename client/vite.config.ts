import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@assets": path.resolve(__dirname, "assets/*"),
      "@scss": path.resolve(__dirname, "src/scss"),
      "@context": path.resolve(__dirname, "src/context"),
      "@pages": path.resolve(__dirname, "src/pages"), // ✅ важный alias
      "@routes": path.resolve(__dirname, "src/routes"),
      "@store": path.resolve(__dirname, "src/store"),
      "@types": path.resolve(__dirname, "src/types"),
      "@services": path.resolve(__dirname, "src/services"),
      "@constants": path.resolve(__dirname, "src/constants"),
      "@mocks": path.resolve(__dirname, "src/mocks"),
      "@tests": path.resolve(__dirname, "src/tests"),
      "@config": path.resolve(__dirname, "src/config"),
      "@api": path.resolve(__dirname, "src/api"),
      "@lib": path.resolve(__dirname, "src/lib"),
      "@middleware": path.resolve(__dirname, "src/middleware"),
    },
  },
  plugins: [react()],
});
