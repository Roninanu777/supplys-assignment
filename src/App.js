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
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);

    const getData = async () => {
        const resp = await axios.get("https://fakestoreapi.com/products");

        if (resp.status === 200) {
            return resp.data;
        }
        return new Error(resp.status);
    };

    useEffect(() => {
        setLoading(true);
        getData()
            .then((res) => {
                setLoading(false);
                setProducts(JSON.parse(JSON.stringify(res)));
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <Main>
            <ProductPage loading={loading} products={products} />
        </Main>
    );
}

export default App;
