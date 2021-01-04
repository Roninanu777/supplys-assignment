import styled from "styled-components";
import Card from "./Card";

const ProductList = styled.div`
    margin: 1.5rem 0;
    width: 70%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;
    grid-template-rows: auto;
`;

function ProductPage({ products }) {
    return (
        <ProductList>
            {products.map((item, index) => (
                <Card key={index} url={item} />
            ))}
        </ProductList>
    );
}

export default ProductPage;
