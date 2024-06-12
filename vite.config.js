import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/DachDevs/",
  build: {
    rollupOptions: {
      external: [
        "@react-spring/three",
        "@react-three/drei",
        "@react-three/fiber",
        "three",
      ],
      output: {
        globals: {
          "@react-spring/three": "reactSpringThree",
          "@react-three/drei": "drei",
          "@react-three/fiber": "fiber",
          three: "THREE",
        },
      },
    },
  },
});
