const PaymentCondition = () => {
    return (
        <div className="w-[90vw] max-w-screen-xl border-2 border-red-900 flex flex-col mx-auto px-[32px] py-[48px] mb-[12px]">
            <h1 className="text-[32px] text-white font-poppins text-center">
                2. Төлбөрийн нөхцөл
            </h1>
            <h1 className="text-[20px] text-gray-300 font-poppins text-center mb-[32px]">
                Та доорх хэсгийг бүрэн гүйцэд уншина уу! Дараах мэдээлэлтэй
                <br />
                бүрэн танилцаагүйгээс болж гарсан асуудлыг бид хариуцахгүй.
            </h1>
            <div className="w-full">
                <ul className=" text-[20px] text-white font-poppins font-medium leading-9">
                    <li className="list-decimal  items-start content-center justify-start">
                        Та манай төлбөртэй хэрэглэгч буюу Alpha Plus эрхийн
                        сарын эрхийг худалдан авсан тохиолдолд та сар дуустал
                        хэрэглэх боломжтой бөгөөд уг үйлчилгээнд буцаан олголт
                        байхгүй болно.
                    </li>
                    <li className="list-decimal">
                        Хэрэв та манай жилийн эрхийг худалдан авсан тоиолдолд та
                        эрхээ цуцлахаар болсон тохиолдолд таны ашиглаагүй байгаа
                        үлдсэн сарын буцаан олголтыг манайх буцаан олгох болно.
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default PaymentCondition
