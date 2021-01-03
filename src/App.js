import { useState, useEffect } from "react";
import data from "./test.json";
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

    // const getCart = async () => {
    //     const resp = await axios.get("https://fakestoreapi.com/carts?limit=3");

    //     if (resp.status === 200) {
    //         return resp.data;
    //     }
    //     return new Error(resp.status);
    // };

    useEffect(() => {
        setProducts(data);
    }, []);

    return (
        <Main>
            <ProductPage products={products} />
        </Main>
    );
}

export default App;
