import React, { useState } from "react";
import styled from "styled-components";

const Main = styled("div")`
    position: absolute;
    font-family: sans-serif;
    width: 10%;
    right: 0;
`;

const DropDownContainer = styled("div")`
    margin: 1rem;
`;

const DropDownHeader = styled("div")`
    margin-bottom: 0.8em;
    padding: 0.4em 2em 0.4em 1em;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
    font-weight: 500;
    cursor: pointer;
    font-size: 1.3rem;
    color: #ffffff;
    background-color: #53688d;
    border-radius: 5px;
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
    padding: 0;
    margin: 0;
    padding-left: 1em;
    background: #ffffff;
    border: 2px solid #e5e5e5;
    box-sizing: border-box;
    color: #3faffa;
    font-size: 1.3rem;
    font-weight: 500;
    &:first-child {
        padding-top: 0.8em;
    }
`;

const ListItem = styled("li")`
    list-style: none;
    margin-bottom: 0.8em;
    cursor: pointer;
`;

export default function App({ carts }) {
    const [isOpen, setIsOpen] = useState(false);
    const [cart, setCart] = useState({});
    const [selectedCart, setSelectedCart] = useState(null);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = (value) => () => {
        setCart(value);
        setSelectedCart("Cart " + value.id);
        setIsOpen(false);
        console.log(selectedCart);
    };

    return (
        <Main>
            <DropDownContainer>
                <h3>Cart</h3>
                <DropDownHeader onClick={toggling}>
                    {selectedCart || "Cart 1"}
                </DropDownHeader>
                {isOpen && (
                    <DropDownListContainer>
                        <DropDownList>
                            {carts.map((cart) => (
                                <ListItem
                                    onClick={onOptionClicked(cart)}
                                    key={cart.id}
                                >
                                    Cart {cart.id}
                                </ListItem>
                            ))}
                        </DropDownList>
                    </DropDownListContainer>
                )}
            </DropDownContainer>
        </Main>
    );
}
