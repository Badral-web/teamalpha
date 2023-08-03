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
                <div className=" flex-1">Baruun</div>
                <div className=" flex-1">Zuun</div>
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