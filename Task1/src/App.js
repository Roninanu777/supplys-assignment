import { useState, useEffect } from "react";
import axios from "axios";
import ProductPage from "./components/ProductPage";

function App() {
    const [products, setProducts] = useState([]);
    const [isBottom, setIsBottom] = useState(false);

    const handleScroll = () => {
        const scrollTop =
            (document.documentElement && document.documentElement.scrollTop) ||
            document.body.scrollTop;
        const scrollHeight =
            (document.documentElement &&
                document.documentElement.scrollHeight) ||
            document.body.scrollHeight;
        if (scrollTop + window.innerHeight + 50 >= scrollHeight) {
            setIsBottom(true);
        }
    };

    const getData = async () => {
        try {
            let resp = await axios.get(
                "https://dog.ceo/api/breeds/image/random/10"
            );
            setIsBottom(false);
            return resp.data;
        } catch (error) {
            return new Error("Failed to fetch");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        getData()
            .then((resp) => {
                setProducts((prev) => [...prev, ...resp.message]);
            })
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        if (isBottom) {
            getData()
                .then((resp) => {
                    setProducts((prev) => [...prev, ...resp.message]);
                })
                .catch((err) => console.log(err));
        }
    }, [isBottom]);

    return <ProductPage products={products} />;
}

export default App;
