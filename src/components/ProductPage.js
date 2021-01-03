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
    const { products } = props;

    return (
        <ProductList>
            {products.map((item) => (
                <Card key={item.id} url={item.download_url} />
            ))}
        </ProductList>
    );
}

export default ProductPage;
