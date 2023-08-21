const PaidUserConditions = () => {
    return (
        <div className="w-[90vw] max-w-screen-xl border-2 border-red-900 flex flex-col mx-auto px-[32px] py-[48px] mb-[12px]">
            <h1 className="text-[32px] text-white font-poppins text-center">
                1. Төлбөртэй хэрэглэгч болохоос өмнө таны <br /> анхаарах зүйлс
            </h1>
            <h1 className="text-[20px] text-gray-300 font-poppins text-center mb-[32px]">
                Та доорх хэсгийг бүрэн гүйцэд уншина уу! Дараах мэдээлэлтэй
                <br />
                бүрэн танилцаагүйгээс болж гарсан асуудлыг бид хариуцахгүй.
            </h1>
            <div className="w-full">
                <ul className=" text-[20px] text-white font-poppins font-medium leading-9">
                    <li className=" items-start content-center justify-start">
                        Та манай төлбөртэй хэрэглэгч буюу “Alpha Plus” эрхийг
                        сонгож хэрэглэснээр танд дараах <br /> илүү мэлээлэл
                        очих бөгөөд үүнд :
                    </li>
                    <li className="list-disc">
                        Technical analysis өрөө нь танд зөвхөн арилжааны санаа
                        буюу Idea өгөх зорилготой бөгөөд санхүүгийн зөвлөгөө биш
                        болно. Таны арилжааны эрсдэлээ бариагүй болон дагаж
                        орсон арилжаанд бид хариуцлага хүлээхгүй болно. Учир нь
                        арилжааг Idea-г харж өөрийн чадвараар оролцох нь чухал
                        болохоос Signal авч дагаж арилжаалах нь таны орох, гарах
                        цэг гэх мэтчилэн хувь хүний чадвараас хамааралтай байдаг
                        учир хэн нэгний арилжааг яг таг дагаж арилжахыг битгий
                        зориорой.
                    </li>
                    <li className="list-disc">
                        Incentivized Testnet нь таниас зарим нөхцөлд мөнгө
                        гарахгүй ч зарим нөхцөлд бага ч гэлээ мөнгө гарах үе
                        тохиолдоно. Үүний эцэст та мөнгө зарцуулж, цагаа гарздаж
                        хийсэн зүйл тань аль нэг тохиолдолд танд шагнал өгөхгүй
                        байх тохиолдол байх тул та үүнд өөрийн зүгээс хүлээлтээ
                        бууруулж, тууштай хийх нь зүйтэй. Мөн адил бид танд
                        мэдээлэл өгөх зорилготой тул таны хийсэн үйлдэлд
                        хариуцлага үүрэхгүй болно.
                    </li>
                    <li className="list-disc content-start">
                        Airdrops нь мөн адил зарим тохиолдолд огт өгөхгүй эсвэл
                        бага өгөх үе тохиолдож болно.
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default PaidUserConditions
