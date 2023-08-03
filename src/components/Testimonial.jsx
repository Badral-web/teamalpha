import Card from './Card'

const Testimonial = () => {
    const scrollLeft = () => {
        document.getElementById('content').scrollLeft -= 400
    }
    const scrollRight = () => {
        document.getElementById('content').scrollLeft += 400
    }
    return (
        <div className="max-w-screen-xl mx-auto flex flex-col my-10 items-center">
            <div className="flex flex-col">
                <h1 className="text-white text-4xl mb-6">
                    Бидний санал болгож байсан airdrop-ууд
                </h1>
                <p className="text-white text-xl mb-6">
                    Case studies from some of our amazing customers who are
                    building faster
                </p>
            </div>

            <div className="flex-row">
                <div className="right-0 top-5 ">
                    <button
                        onClick={scrollLeft}
                        className="p-2 m-2 rounded-full bg-white"
                    >
                        left
                    </button>
                    <button
                        onClick={scrollRight}
                        className="p-2 m-2 rounded-full bg-white"
                    >
                        right
                    </button>
                </div>
                <div
                    id="content"
                    className=" flex p-4 items-center flex-row justify-start  scroll-smooth  scrollbar-hide max-w-screen-xl overflow-auto overflow-y-hidden overflow-x-hidden"
                >
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default Testimonial
