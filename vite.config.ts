import { defineConfig } from "vite";
import ViteYaml from "@modyfi/vite-plugin-yaml";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/5e-actions-reference.react",
  plugins: [react(), ViteYaml()],
});
