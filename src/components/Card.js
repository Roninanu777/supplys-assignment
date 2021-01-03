import styled, { keyframes } from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const CardContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    border: 1px solid #dadada;
    border-radius: 5px;
`;

const Img = styled.img`
    width: 100%;
    height: 200px;
    margin: 10px 0;
    background-size: cover;
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
                style={{
                    backgroundSize: "cover",
                    width: "100%",
                    height: "400px",
                }}
            />
            <Details>
                <h4>Lorem ipsum dolor</h4>
                <p>$110</p>
            </Details>
        </CardContainer>
    );
}
