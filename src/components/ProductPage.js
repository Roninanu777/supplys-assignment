import styled from "styled-components";
import Card from "./Card";

const ProductList = styled.div`
    margin: 1.5rem 0;
    width: 70%;
    display: grid;
    grid-template-columns: repeat(3, minmax(200px, 1fr));
    grid-gap: 1.5rem;
    grid-template-rows: auto;
`;

function ProductPage(props) {
    const { products, loading } = props;

    return (
        <ProductList>
            {loading
                ? "Loading..."
                : products.map((item) => <Card key={item.id} blob={item} />)}
        </ProductList>
    );
}

export default ProductPage;
