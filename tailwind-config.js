tailwind.config = {
    theme: {
        extend: {
            colors: {
                odd: {
                    white: '#ffffff',
                    offwhite: '#F4F4F2',
                    black: '#0A0A0A',
                    gray: '#888888',
                    border: '#E5E5E5',
                    accent: '#C9A96E',       // Warm gold accent for premium CTAs
                    'accent-dark': '#A88B55', // Darker gold for hover states
                }
            },
            fontFamily: {
                display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
                body: ['"DM Sans"', 'Helvetica Neue', 'Arial', 'sans-serif'],
                quote: ['"Funnel Display"', 'sans-serif'],
            },
            transitionTimingFunction: {
                'odd-ease': 'cubic-bezier(0.85, 0, 0.15, 1)',
            },
            animation: {
                'marquee': 'marquee 30s linear infinite',
                'marquee2': 'marquee2 30s linear infinite',
                'fade-in': 'fadeIn 1s ease forwards',
                'slide-up': 'slideUp 0.8s cubic-bezier(0.85, 0, 0.15, 1) forwards',
                'counter': 'counter 2s ease-out forwards',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
                marquee2: {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(0%)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(40px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            }
        }
    },
    daisyui: {
        themes: [
            {
                anba: {
                    "primary": "#0A0A0A",
                    "secondary": "#C9A96E",
                    "accent": "#888888",
                    "neutral": "#F4F4F2",
                    "base-100": "#FFFFFF",
                    "base-200": "#F4F4F2",
                    "base-300": "#E5E5E5",
                    "info": "#888888",
                    "success": "#4ade80",
                    "warning": "#fbbf24",
                    "error": "#ef4444",
                },
            },
        ],
    },
}
