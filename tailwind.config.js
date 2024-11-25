module.exports = {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
    ],
    darkMode: 'class',
    theme: {
        fontFamily: {
            'primary': ['Clash Display', 'sans-serif'],
            'secondary': ['Satoshi', 'sans-serif'],
        },
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    "primary": "#014AA5",
                    "secondary": "#E57D00",
                    "accent": "#E57D00",
                    "neutral": "#1B1D20",
                    "base-100": "#F7F7F7",
                    "info": "#e0f2fe",
                    "success": "#a3e635",
                    "warning": "#fb923c",
                    "error": "#f87171",                   
                },
            },
        ],
    },
    plugins: [
        require('daisyui'),
    ]
}