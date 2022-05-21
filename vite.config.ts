import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import laravel from "vite-plugin-laravel";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import macrosPlugin from "vite-plugin-babel-macros";
import commonjs from "vite-plugin-commonjs";

export default defineConfig({
    server: {
        host: "0.0.0.0",
        cors: true,
    },
    plugins: [
        react(),
        //macrosPlugin(),
        commonjs(),
        laravel({
            postcss: [tailwindcss(), autoprefixer()],
        }),
    ],
    optimizeDeps: {
        include: ["styled-components/macro"],
    },
    build: {
        commonjsOptions: {
            include: [/node_modules/],
        },
    },
    resolve: {
        alias: {
            "@": resolve(__dirname, "./resources/scripts"),
        },
    },
});
