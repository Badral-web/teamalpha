const Footer = () => {
    return (
        <div className="flex flex-col mt-10">
            <div className=" flex flex-row h-[158px]">
                <div className="flex-col py-10">
                    <h1 className=" text-white text-2xl">
                        Манай товхимолд бүртгүүлээрэй
                    </h1>
                    <p className="text-white mt-2">
                        Бид таньруу зөвхан airdrop-той холбоотой мэдээлэл
                        илгээнэ
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center h-full ml-auto mr-0">
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
                        <li className="px-4 text-white font-base">
                            Үйлчилгээний нөхцөл
                        </li>
                        <li className="px-4 text-white font-base">
                            <a href="/FAQ">Түгээмэл асуулт хариулт</a>
                        </li>
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
