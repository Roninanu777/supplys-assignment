import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const CardContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    border: 1px solid #dadada;
    border-radius: 5px;
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 1rem 0;
`;

export default function Card({ url }) {
    return (
        <CardContainer>
            <LazyLoadImage
                alt="card"
                effect="blur"
                src={url}
                style={{ width: "100%", height: "400px" }}
            />
            <Details>
                <p>Lorem ipsum dolor</p>
                <p>$110</p>
            </Details>
        </CardContainer>
    );
}
