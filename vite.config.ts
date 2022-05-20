import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import laravel from "vite-plugin-laravel";

export default defineConfig({
    server: {
        host: "0.0.0.0",
    },
    plugins: [
        laravel({
            postcss: [tailwindcss(), autoprefixer()],
        }),
    ],
});
