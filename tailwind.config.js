module.exports = {
    content: [
        './guides/.vitepress/**/*.{js,ts,vue}',
        './guides/**/*{.md,ts,vue}',
        './src/**/*{.js,ts,vue}',
        './src/**/*.{js,ts,vue}',

    ],
    theme: {
        extend: {
            container: {
                center: true,
                padding: '1rem',
                screens: {
                    sm: '1080px',
                },
            },
            colors: {
                blue: {
                    DEFAULT: '#4489F7',
                    50: '#E8F0FE',
                    100: '#EAF2FE',
                    150: '#E6E7EB',
                    400: '#3075D7',
                    500: '#1385FA',
                    600: '#1C2B38',
                    800: '#022F5E',
                },
                yellow: {
                    DEFAULT: '#F3C63E',
                    50: '#FDF8E7',
                    100: '#F8DD8B',
                    200: '#E5AE2E',
                },
                dark: {
                    DEFAULT: '#121C25',
                    primary: '#353D35',
                    100: '#525763',
                    900: '#101010',
                },
                orange: {
                    DEFAULT: '#CD7F32',
                },
                white: {
                    DEFAULT: '#FFFFFF',
                    100: '#ECF3FA',
                    150: '#FCFCFC',
                    200: '#F6F8FA',
                    300: '#E5EFFE',
                },
                gray: {
                    DEFAULT: '#8E9BA8',
                    100: '#C6CFD7',
                    150: '#FAFBFC',
                    200: '#DCDCE6',
                    50: '#7D8196',
                    250: '#EDF1F5',
                    300: '#F5F6F7',
                    350: '#EEF2F9',
                    400: '#D1D6DC',
                    450: '#DDE3EB',
                    500: '#EFF0EF',
                    550: '#A6A7A8',
                    600: '#EBEEF2',
                    650: '#9AA1AC',
                    700: '#596066',
                    divide: '#667589',
                },
                red: {
                    DEFAULT: '#EE5253',
                    50: '#FDEAEA',
                    100: '#FD9459',
                    150: '#FEF7F7',
                    200: '#FC6133',
                    300: '#E52E30',
                },
                green: {
                    DEFAULT: '#00B67A',
                    100: '#5DC08D',
                    200: '#73CF11',
                    300: '#2EA668',
                    400: '#16CC53',
                    500: '#EBF7F1',
                },
                social: {
                    facebook: '#3B5998',
                    twitter: '#1D9BF0',
                    telegram: '#2BACEE',
                    whatsapp: '#60D669',
                },
            },
            gridTemplateColumns: {
                '1-max': '1fr max-content',
                'max-1': 'max-content 1fr',
                'max-1-max': 'max-content 1fr max-content',
                'wrap-4': 'repeat(auto-fill, minmax(200px, 1fr))',
            },
            lineHeight: {
                16: '16px',
                20: '20.8px',
                19: '19px',
                130: '130%',
                110: '110%',
                125: '125%',
                140: '140%',
            },
            fontFamily: {
                sans: ['"Roboto"', 'sans-serif'],
            },
            zIndex: {
                '90': '90',
                '100': '100',
            },
            opacity: {
                '4': '0.04',
                '7': '0.07',
                '8': '0.08',
                '16': '0.16',
            },
            fontSize: {
                '2xs': '0.8125rem', // 13px
                '4.5xl': '2.5rem', // 40px
                '3.5xl': '2rem', // 32px
            },
            boxShadow: {
                card: '0px 3px 20px rgba(18, 28, 37, 0.06)',
                'card-hover':
                    '0 -1px 0 0 rgba(102, 117, 137, 0.3) inset, 0 4px 30px 0 rgba(18, 28, 37, 0.07), 0 3px 20px 0 rgba(18, 28, 37, 0.06)',
                review: 'inset 0px -1px 0px rgba(102, 117, 137, 0.3)',
                header: '0px 3px 6px rgba(125, 132, 141, 0.06)',
                blog: '0px 3px 20px rgba(18, 28, 37, 0.06), 0px 4px 30px rgba(18, 28, 37, 0.07), inset 0px -1px 0px rgba(102, 117, 137, 0.3)',
                chat: '0px 28px 28px rgba(0, 0, 0, 0.08)',
                'inner-xs': 'inset 0px -1px 0px rgba(255, 255, 255, 0.1)',
            },
            aspectRatio: {
                'business-image': '254 / 166',
            },
            padding: {
                '13': '3.25rem', // 52px
            },
        },

    },
    plugins: [],
}
