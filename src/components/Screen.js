import { useState } from "react";
import styled from "styled-components";

const LeftArrow = styled.p`
    background-color: rgba(0, 0, 0, .5);
    backdrop-filter: blur(1rem);
    padding: 15px;
    font-size: 50px;
    font-weight: bold;
    cursor: pointer;
`

const RightArrow = styled.p`
    background-color: rgba(0, 0, 0, .5);
    backdrop-filter: blur(1rem);
    padding: 15px;
    font-size: 50px;
    font-weight: bold;
    margin-left: auto;
    cursor: pointer;
`

const Screen = () => {
    const [link, setLink] = useState('pic1.jpg');

    const Container = styled.div`
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        height: 100%;
        width: 100%;
        background-image: url("/images/${link}");
    `;

    const moveLeft = () => {
        setLink('static.gif');
        setTimeout(() => {
            setLink('pic2.jpg');
        }, 500);
    }

    const moveRight = () => {
        setLink('static.gif');
        setTimeout(() => {
            setLink('pic1.jpg');
        }, 500);
    }

    return (
        <Container>
            <LeftArrow onClick={moveLeft}>◀</LeftArrow>
            <RightArrow onClick={moveRight}>▶</RightArrow>
        </Container>
    );
}
 
export default Screen;