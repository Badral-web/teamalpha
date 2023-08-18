const PaidUserConditions = () => {
    return (
        <div className="w-[90vw] max-w-screen-xl border-2 border-red-900 flex flex-col mx-auto text-center px-[32px] py-[48px]">
            <h1 className="text-[32px] text-white font-poppins">
                1. Төлбөртэй хэрэглэгч болохоос өмнө таны <br /> анхаарах зүйлс
            </h1>
            <h1 className="text-[20px] text-gray-300 font-poppins">
                Та доорх хэсгийг бүрэн гүйцэд уншина уу! Дараах мэдээлэлтэй
                <br />
                бүрэн танилцаагүйгээс болж гарсан асуудлыг бид хариуцахгүй.
            </h1>
            <div className="w-full bg-discordButton">
                <ul className="list-disc ml-10  ">
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            </div>
        </div>
    )
}
export default PaidUserConditions
