module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: ["cupcake", "light", "cmyk"],
    },
    plugins: [require("daisyui")],
}