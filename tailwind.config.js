/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{js,jsx}',
		'./components/**/*.{js,jsx}',
		'./app/**/*.{js,jsx}',
		'./src/**/*.{js,jsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
      		fontFamily: {
        		sans: ['Lufga', ...defaultTheme.fontFamily.sans],
      		},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
		        purple: {
		          50: 'hsl(var(--purple) / 0.08)',
		          100: 'hsl(var(--purple) / 0.16)',
		          200: 'hsl(var(--purple) / 0.28)',
		          300: 'hsl(var(--purple) / 0.40)',
		          400: 'hsl(var(--purple) / 0.60)',
		          500: 'hsl(var(--purple))',       // principal
		          600: 'hsl(var(--purple) / 0.80)',
		          700: 'hsl(var(--purple) / 0.90)',
		          800: 'hsl(var(--purple) / 0.95)',
		          900: 'hsl(var(--purple) / 1)',
		        },
		        orange: {
		          50: 'hsl(var(--orange) / 0.08)',
		          100: 'hsl(var(--orange) / 0.16)',
		          200: 'hsl(var(--orange) / 0.28)',
		          300: 'hsl(var(--orange) / 0.40)',
		          400: 'hsl(var(--orange) / 0.60)',
		          500: 'hsl(var(--orange))',
		          600: 'hsl(var(--orange) / 0.80)',
		          700: 'hsl(var(--orange) / 0.90)',
		          800: 'hsl(var(--orange) / 0.95)',
		          900: 'hsl(var(--orange) / 1)',
		        },
		        pink: {
		          50: 'hsl(var(--pink) / 0.08)',
		          100: 'hsl(var(--pink) / 0.16)',
		          200: 'hsl(var(--pink) / 0.28)',
		          300: 'hsl(var(--pink) / 0.40)',
		          400: 'hsl(var(--pink) / 0.60)',
		          500: 'hsl(var(--pink))',
		          600: 'hsl(var(--pink) / 0.80)',
		          700: 'hsl(var(--pink) / 0.90)',
		          800: 'hsl(var(--pink) / 0.95)',
		          900: 'hsl(var(--pink) / 1)',
		        },
		        cyan: {
		          50: 'hsl(var(--cyan) / 0.08)',
		          100: 'hsl(var(--cyan) / 0.16)',
		          200: 'hsl(var(--cyan) / 0.28)',
		          300: 'hsl(var(--cyan) / 0.40)',
		          400: 'hsl(var(--cyan) / 0.60)',
		          500: 'hsl(var(--cyan))',
		          600: 'hsl(var(--cyan) / 0.80)',
		          700: 'hsl(var(--cyan) / 0.90)',
		          800: 'hsl(var(--cyan) / 0.95)',
		          900: 'hsl(var(--cyan) / 1)',
		        },
		        yellow: {
		          50: 'hsl(var(--yellow) / 0.08)',
		          100: 'hsl(var(--yellow) / 0.16)',
		          200: 'hsl(var(--yellow) / 0.28)',
		          300: 'hsl(var(--yellow) / 0.40)',
		          400: 'hsl(var(--yellow) / 0.60)',
		          500: 'hsl(var(--yellow))',
		          600: 'hsl(var(--yellow) / 0.80)',
		          700: 'hsl(var(--yellow) / 0.90)',
		          800: 'hsl(var(--yellow) / 0.95)',
		          900: 'hsl(var(--yellow) / 1)',
}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};