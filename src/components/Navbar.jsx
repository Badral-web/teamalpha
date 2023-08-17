import Dropdown from './Dropdown'
const Navbar = () => {
    return (
        <nav className="">
            <div className="max-w-screen-xl flex flex-wrap justify-between mx-auto p-4 max-h-[100%]">
                <a href="#" className="flex items-center left-1">
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
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <Dropdown />
                <div
                    className="hidden w-full md:block md:w-auto"
                    id="navbar-default"
                >
                    <ul
                        className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-white dark:border-gray-700"
                        aria-labelledby="dropdownLargeButton"
                    >
                        <li className="flex items-center">
                            <a
                                href="#"
                                className="group text-white transition-all duration-300 ease-in-out"
                            >
                                <span className=" bottom-0 origin-center pl-1 pr-1 bg-bottom bg-gradient-to-r from-red-500 to-red-500 bg-[length:0%_3px] bg-no-repeat  group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out">
                                    Үнэ
                                </span>
                            </a>
                        </li>
                        <li className="flex items-center">
                            <a
                                href="#"
                                className="group text-white transition-all duration-300 ease-in-out"
                            >
                                <span className="origin-center pl-1 pr-1 bg-bottom bg-gradient-to-r from-red-500 to-red-500 bg-[length:0%_3px] bg-no-repeat  group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out">
                                    Мэдээ
                                </span>
                            </a>
                        </li>
                        <li className="flex items-center">
                            <a
                                href="#"
                                className="group text-white transition-all duration-300 ease-in-out"
                            >
                                <span className="origin-center pl-1 pr-1 bg-bottom bg-gradient-to-r from-red-500 to-red-500 bg-[length:0%_3px] bg-no-repeat  group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out">
                                    Бидний тухай
                                </span>
                            </a>
                        </li>
                        <li>
                            {/* <a href="#" className="block py-3 pl-3 pr-4 text-white bg-discordButton rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Дискорд</a> */}
                            <button
                                type="button"
                                className="focus:outline-none bg-discordButton text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 mr-0 mb-0 mt-0"
                            >
                                Дискорд
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
