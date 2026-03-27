tailwind.config = {
    theme: {
        extend: {
            colors: {
                odd: {
                    white: '#ffffff',
                    offwhite: '#F4F4F2',
                    black: '#0A0A0A',
                    gray: '#888888',
                    border: '#E5E5E5'
                }
            },
            fontFamily: {
                display: ['Outfit', 'Helvetica Neue', 'Arial', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
                quote: ['Funnel Display', 'sans-serif'],
            },
            transitionTimingFunction: {
                'odd-ease': 'cubic-bezier(0.85, 0, 0.15, 1)',
            },
            animation: {
                'marquee': 'marquee 25s linear infinite',
                'marquee2': 'marquee2 25s linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
                marquee2: {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(0%)' },
                }
            }
        }
    }
}
