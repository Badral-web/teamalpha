/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        backgroundColor: {
            teamalphanavbar: '#1E1E1E',
            discordButton: '#EF4136',
            teamalphablack: '#1E1E1E',
            testForAdjustment: 'red',
            socialproofsectiontheme:
                'linear-gradient(0deg, #282828 0%, #282828 100%), #1E1E1E;',
            footerGray: '#282828;',
        },

        fontSize: {
            CustomeSize: ['32px', '44px'],
            Services: ['40px', '54px'],
        },

        height: {
            CustomerServiceDivHeight: '100%',
        },
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
            },
            fontWeight: {
                RegisterSectionFontWeight: 700, // Example custom font weight
            },
        },
    },
    plugins: [],
}
