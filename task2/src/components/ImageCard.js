import trash from "../assets/trash-solid.svg";

const ImageCard = (props) => {
    const { title, price, image, quantity } = props.blob;
    return (
        <div className="flex items-center justify-between font-poppins p-5 mb-5 rounded hover:shadow-lg border border-gray-200">
            <div className="flex items-center">
                <img src={image} alt="card" className=" w-20 h-20" />
                <div className="ml-10">
                    <div className="font-bold text-gray-600 text-xl mb-3">
                        {title}
                    </div>
                    <div className="flex items-center">
                        <p className=" text-indigo-400 font-bold mr-5">
                            ${price}
                        </p>
                        <p className="text-gray-500">
                            Quantity:{" "}
                            <span className="text-gray-600">{quantity}</span>
                        </p>
                    </div>
                </div>
            </div>
            <img src={trash} className="w-5 h-5" alt="trash" />
        </div>
    );
};

export default ImageCard;
