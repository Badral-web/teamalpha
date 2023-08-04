// const Footer = () => {
//     return (
//         <div className="max-w-screen-xl mx-auto flex flex-col">
//             <div className="flex flex-row">
//                 <div className=" flex-1">Baruun</div>
//                 <div className=" flex-1">Zuun</div>
//             </div>
//             <div className="flex flex-row">
//                 <div className="">
//                     <a href="#" className="flex items-center left-1">
//                         <img
//                             src="../../public/logo.svg"
//                             className="h-5 mr-1"
//                             alt="Team Alpha logo"
//                         />
//                         <img
//                             src="../../public/team.svg"
//                             className="h-5 mr-0"
//                             alt="Team"
//                         />
//                         <img
//                             src="../../public/alpha.svg"
//                             className="h-5 mr-0"
//                             alt="Alpha"
//                         />
//                     </a>
//                 </div>
//                 <div className=" bg-testForAdjustment">
//                     <ul className="flex horizontal-list">
//                         <li>Overview</li>
//                         <li>Overview</li>
//                         <li>Overview</li>
//                         <li>Overview</li>
//                         <li>Overview</li>
//                     </ul>
//                 </div>
//                 <div className="ml-10 bg-discordButton w-[160px]">
//                     <h3 className="">@2023 Team Alpha</h3>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Footer

const Footer = () => {
    return (
        <div className="max-w-screen-xl mx-auto flex flex-col">
            <div className=" flex flex-row bg-footerGray h-[158px]">
                <div className="flex-col p-10">
                    <h1 className=" text-white text-2xl">
                        Манай товхимолд бүртгүүлээрэй
                    </h1>
                    <p className="text-white mt-2">
                        Бид таньруу зөвхан airdrop-той холбоотой мэдээлэл
                        илгээнэ
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center h-full">
                    <form className="flex flex-col md:flex-row">
                        <input
                            type="email"
                            className="flex-1 py-2 px-4 border border-gray-300 rounded-l-lg rounded-r-lg mr-5"
                            placeholder="Enter your email address"
                        />
                        <button
                            type="button"
                            className="flex-none bg-discordButton text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-6 py-3 mr-0 mb-0 mt-0"
                        >
                            Бүртгүүлэх
                        </button>
                    </form>
                </div>
            </div>
            <div className="flex flex-col justify-between h-[128px] items-center sm:flex-row">
                <div className="flex-shrink-0">
                    <a href="#" className="flex items-center">
                        <img
                            src="../../public/logo.svg"
                            className="h-5 mr-1"
                            alt="Team Alpha logo"
                        />
                        <img
                            src="../../public/team.svg"
                            className="h-5 mr-0"
                            alt="Team"
                        />
                        <img
                            src="../../public/alpha.svg"
                            className="h-5 mr-0"
                            alt="Alpha"
                        />
                    </a>
                </div>
                <div className="flex-grow flex justify-center">
                    <ul className="flex">
                        <li className="px-4 text-white font-base">Overview</li>
                        <li className="px-4 text-white font-base">Overview</li>
                        <li className="px-4 text-white font-base">Overview</li>
                        <li className="px-4 text-white font-base">Overview</li>
                        <li className="px-4 text-white font-base">Overview</li>
                    </ul>
                </div>
                <div className="flex-shrink-0">
                    <div className=" w-[160px]">
                        <h3 className=" text-base text-gray-400">
                            @2023 Team Alpha
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
