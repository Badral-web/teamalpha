const MailRegistration2 = () => {
    return (
        <div className="w-[100%] h-[90vh] mx-auto flex flex-col md:flex-row md:max-w-screen-xl ">
            <div className="flex justify-center items-center md:flex-1 md:items-center md:-z-1 order-1 md:order-2">
                <div className="hidden md:flex md:ml-auto">
                    <img
                        src="/NumadLabs.svg"
                        alt="Customer Service guy"
                        className="h-[258px]"
                    />
                </div>
            </div>

            <div className="flex flex-col md:flex-1 z-1 md:pr-12 items-center justify-center h-full order-2 md:order-1">
                <h1 className="text-white font-poppins text-CustomeSize font-RegisterSectionFontWeight mb-[96px] mt-24 md:text-5xl lg:text-6xl  md:mr-auto md:my-0 md:mb-12 md:mt-0">
                    Building a <br />
                    Community starts <br />
                    with{' '}
                    <span className="text-red-500 font-poppins text-CustomeSize">
                        Trust.
                    </span>
                </h1>

                <form className="flex flex-col md:flex-row items-start md:mr-auto h-[48px]">
                    <div className="flex flex-col gap-2">
                        <input
                            type="email"
                            className="flex-1 py-3 px-4 border border-gray-500 bg-transparent rounded-l-lg rounded-r-lg text-white placeholder-gray-300 placeholder-opacity-50 focus:ring-0 focus:border-gray-500 h-[48px] w-[352px] md:mr-8 mr-0"
                            placeholder="Enter your email address"
                            style={{ background: 'transparent' }}
                        />
                        <p className=" text-gray-300 text-sm md:text-base md:mr-auto">
                            Бид таньд зөвхөн airdrop-ын мэдээлэл явуулна.
                        </p>
                    </div>

                    <button
                        type="button"
                        className="flex-none bg-discordButton text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-6 py-3 h-[48px] md:w-[171px] w-full mt-6 md:mt-0"
                    >
                        Бүртгүүлэх
                    </button>
                </form>
            </div>
        </div>
    )
}
export default MailRegistration2
