import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'
import { resolve } from "path";

export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    build: {
        sourcemap: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                home: resolve(__dirname, "home.html"),
                logout: resolve(__dirname, "logout.html"),
                success: resolve(__dirname, "success.html"),
            },
        },
    },
    css: {
        devSourcemap: true,
    }
});
