import {defaults} from "autoprefixer";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["'Nunito', sans-serif"],
            },
            colors: {
                primary: '#FD3D57',
                secondary: '#1F2937'
            },
        },
        container: {
            center: true,
            padding: '1rem',
        },
    },
    corePlugins: {
        aspectRatio: false,
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
    ],
}