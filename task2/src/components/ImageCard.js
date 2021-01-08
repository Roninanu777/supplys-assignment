const ImageCard = (props) => {
    const { title, price, image, description } = props.blob;
    return (
        <div className="flex items-center font-poppins p-5 mb-5 rounded hover:shadow-lg border border-gray-200">
            <img src={image} alt="card" className=" w-20 h-20" />
            <div className="ml-10">
                <div className="font-bold text-gray-600 text-xl mb-3 whitespace-nowrap w-full overflow-hidden overflow-ellipsis">
                    {title}
                </div>
                <div className="flex">
                    <p className=" text-indigo-400 font-bold mb-1">${price}</p>
                </div>
            </div>
        </div>
    );
};

export default ImageCard;
