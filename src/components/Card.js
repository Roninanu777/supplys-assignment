import styled, { keyframes } from "styled-components";
import LazyLoad from "react-lazyload";

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

const loadingAnimation = keyframes`
  0% {
    background-color: #fff;
  }
  50% {
    background-color: #646464;
  }
  100% {
    background-color: #fff;
  }
`;

const Placeholder = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    animation: ${loadingAnimation} 1s infinite;
`;

export default function Card(props) {
    const { title, price, image } = props.blob;

    return (
        <CardContainer>
            <LazyLoad placeholder={<Placeholder />}>
                <Img src={image} alt="card" />
            </LazyLoad>
            <Details>
                <h4>{title}</h4>
                <p>${price}</p>
            </Details>
        </CardContainer>
    );
}
