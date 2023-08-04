// const CustomerService = () => {
//     return (
//         <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row">
//             <div className="md:flex-1 md:flex-col z-1 md:pr-12 justify-center">
//                 <h1 className="text-white text-5xl mb-6">
//                     Customer service software for customer-first teams
//                 </h1>
//                 <p className="text-white text-xl mb-6">
//                     The best customer service software for customer-first teams.
//                     Industry-leading email and live chat support.
//                 </p>
//                 <form className="flex flex-col md:flex-row items-center">
//                     <input
//                         type="email"
//                         className="flex-1 py-2 px-4 border border-gray-300 rounded-l-lg rounded-r-lg mr-10"
//                         placeholder="Enter your email address"
//                     />
//                     <button
//                         type="button"
//                         className=" flex-none bg-discordButton text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-6 py-3 mr-0 mb-0 mt-0"
//                     >
//                         Бүртгүүлэх
//                     </button>
//                 </form>
//                 <p className="text-white mt-2">
//                     Бид таньд зөвхөн airdrop-ын мэдээлэл явуулна.
//                 </p>
//             </div>
//             <div className="md:flex-1 md:items-center md:-z-1">
//                 <img
//                     src="/content.png"
//                     alt="Customer Service guy"
//                     className="w-full h-auto"
//                 />
//             </div>
//         </div>
//     )
// }
// export default CustomerService

// const CustomerService = () => {
//     return (
//         <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row">
//             <div className="md:flex-1 md:flex-col z-1 md:pr-12 flex items-center justify-center">
//                 {' '}
//                 {/* Add 'flex items-center justify-center' classes */}
//                 <h1 className="text-white text-5xl mb-6">
//                     Customer service software for customer-first teams
//                 </h1>
//                 <p className="text-white text-xl mb-6">
//                     The best customer service software for customer-first teams.
//                     Industry-leading email and live chat support.
//                 </p>
//                 <form className="flex flex-col md:flex-row items-center">
//                     <input
//                         type="email"
//                         className="flex-1 py-2 px-4 border border-gray-300 rounded-l-lg rounded-r-lg mr-10"
//                         placeholder="Enter your email address"
//                     />
//                     <button
//                         type="button"
//                         className="flex-none bg-discordButton text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-6 py-3 mr-0 mb-0 mt-0"
//                     >
//                         Бүртгүүлэх
//                     </button>
//                 </form>
//                 <p className="text-white mt-2">
//                     Бид таньд зөвхөн airdrop-ын мэдээлэл явуулна.
//                 </p>
//             </div>
//             <div className="md:flex-1 md:items-center md:-z-1">
//                 <img
//                     src="/content.png"
//                     alt="Customer Service guy"
//                     className="w-full h-auto"
//                 />
//             </div>
//         </div>
//     )
// }

// export default CustomerService

const CustomerService = () => {
    return (
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row h-full">
            <div className="md:flex-1 md:items-center md:-z-1 order-1 md:order-2">
                <img
                    src="/content.png"
                    alt="Customer Service guy"
                    className="w-full h-auto"
                />
            </div>
            <div className="md:flex-1 md:flex-col z-1 md:pr-12 flex items-center justify-center h-full order-2 md:order-1">
                <h1 className="text-white text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6">
                    Customer service software for customer-first teams
                </h1>
                <p className="text-white text-base md:text-xl lg:text-2xl mb-4 md:mb-6 text-center">
                    The best customer service software for customer-first teams.
                    Industry-leading email and live chat support.
                </p>
                <form className="flex flex-col md:flex-row items-center mb-4 md:mb-6">
                    <input
                        type="email"
                        className="flex-1 py-2 px-4 border border-gray-300 rounded-l-lg rounded-r-lg mr-0 md:mr-3 mb-3 md:mb-0"
                        placeholder="Enter your email address"
                    />
                    <button
                        type="button"
                        className="flex-none bg-discordButton text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-6 py-3"
                    >
                        Бүртгүүлэх
                    </button>
                </form>
                <p className="text-white text-sm md:text-base mt-2">
                    Бид таньд зөвхөн airdrop-ын мэдээлэл явуулна.
                </p>
            </div>
        </div>
    )
}

export default CustomerService
