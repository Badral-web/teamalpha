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
        },
        height: {
            CustomerServiceDivHeight: '100%',
        },
        extend: {},
    },
    plugins: [],
}
