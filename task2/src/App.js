import { useState, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart";
import Dropdown from "./components/Dropdown";

function App() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        setLoading(true);
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((json) => {
                setImages((prev) => [...prev, ...json]);
                return fetch("https://fakestoreapi.com/carts?limit=3");
            })
            .then((res) => res.json())
            .then((json) => {
                setLoading(false);
                setCarts([...json]);
            });
    }, []);

    return (
        <div className="container my-5">
            <Dropdown />
            <Switch>
                <Route
                    path="/cart/:id"
                    children={
                        <Cart images={images} carts={carts} loading={loading} />
                    }
                ></Route>
                <Redirect to="/cart/1" />
            </Switch>
        </div>
    );
}

export default App;
