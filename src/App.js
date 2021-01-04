import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import "./App.css";
import ProductPage from "./components/ProductPage";

const Main = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`;

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
                "https://dog.ceo/api/breeds/image/random/12"
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
                setProducts([...products, ...resp.message]);
            })
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        if (isBottom) {
            getData()
                .then((resp) => {
                    setProducts([...products, ...resp.message]);
                })
                .catch((err) => console.log(err));
        }
    }, [isBottom]);

    return (
        <Main>
            <ProductPage products={products} />
        </Main>
    );
}

export default App;
