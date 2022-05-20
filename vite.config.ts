import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import laravel from "vite-plugin-laravel";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
    server: {
        host: "0.0.0.0",
    },
    plugins: [
        laravel({
            postcss: [tailwindcss(), autoprefixer()],
        }),
		react(),
    ],
    resolve: {
        alias: {
            "@": resolve(__dirname, "./resources/scripts"),
        },
    },
});
