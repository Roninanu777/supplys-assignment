import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ImageCard from "./ImageCard";

const Cart = ({ images, carts, loading }) => {
    const [cartId, setCartId] = useState(1);
    const [cartProducts, setCartProducts] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        setCartId(parseInt(id));
        setCartProducts([]);
    }, [id]);

    useEffect(() => {
        if (carts.length > 0) {
            carts[cartId - 1].products.forEach((item) => {
                let prod = {
                    ...images[item.productId - 1],
                    quantity: item.quantity,
                };
                setCartProducts((prev) => [...prev, prod]);
            });
        }
    }, [cartId, carts]);

    switch (cartId) {
        case 1:
            return (
                <>
                    {loading ? (
                        <p className="text-2xl text-indigo-800">Loading...</p>
                    ) : (
                        <div className="flex-col">
                            {cartProducts.map((image, index) => (
                                <ImageCard blob={image} key={index} />
                            ))}
                        </div>
                    )}
                </>
            );

        case 2:
            return (
                <div className="flex-col">
                    {cartProducts.map((image, index) => (
                        <ImageCard blob={image} key={index} />
                    ))}
                </div>
            );

        case 3:
            return (
                <div className="flex-col">
                    {cartProducts.map((image, index) => (
                        <ImageCard blob={image} key={index} />
                    ))}
                </div>
            );

        default:
            break;
    }
};

export default Cart;
