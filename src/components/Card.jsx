const Card = () => {
    return (
        <div className="w-[384px] h-[504px] m-2 gap-6 p-6 flex-col">
            <div className="top-0">
                <img
                    className="w-[384px] h-[auto] p-2"
                    src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204"
                    alt="img"
                />
            </div>
            <div className="bottom-0 flex flex-col justify-center items-start p-3 bg-">
                <div className="title font-semibold text-xs my-1">
                    Apple iPhone 13 (128GB) - Midnight
                </div>
                <div className="category text-xs font-light my-1">
                    5.4 cm (6.1-inch) display1
                </div>

                <div className="pricing flex items-center">
                    {' '}
                    <div className="price ">$1000</div>
                    <div className="ml-2 text-xs ">
                        $<del>1320</del>
                    </div>
                </div>
                <div className="flex items-center my-2">
                    <button className="border px-3 py-1 text-xs rounded-lg mr-1 ">
                        Buy Now
                    </button>
                    <button className="border px-3 py-1 text-xs rounded-lg ">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Card
