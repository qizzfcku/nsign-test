module.exports = {
    content: [
        './components/**/*.{vue,js,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
    theme: {
        extend: {
            boxShadow: {
                'blue-glow': '0 0 200px 75px rgba(130, 199, 255, 0.3)',
            },
        },
    },
    plugins: [],
}