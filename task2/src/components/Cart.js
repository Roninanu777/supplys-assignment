import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ImageCard from "./ImageCard";

const Cart = ({ images, carts, loading }) => {
    const [cartId, setCartId] = useState(1);
    const { id } = useParams();

    useEffect(() => {
        setCartId(parseInt(id));
    }, [id]);

    switch (cartId) {
        case 1:
            return (
                <>
                    {loading ? (
                        <p className="text-2xl text-indigo-800">Loading...</p>
                    ) : (
                        <div className="flex-col">
                            {images.map((image, index) => (
                                <ImageCard blob={image} key={index} />
                            ))}
                        </div>
                    )}
                </>
            );

        case 2:
            return (
                <div className="flex-col">
                    {images.map((image, index) => (
                        <ImageCard blob={image} key={index} />
                    ))}
                </div>
            );

        case 3:
            return (
                <div className="flex-col">
                    {images.map((image, index) => (
                        <ImageCard blob={image} key={index} />
                    ))}
                </div>
            );

        default:
            break;
    }
};

export default Cart;
