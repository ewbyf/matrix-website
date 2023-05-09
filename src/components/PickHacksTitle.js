import styled, { keyframes } from 'styled-components'
import React, { useEffect, useState } from 'react'

const wordZoom = keyframes`
    from {
        transform: perspective(30cm) translate3d(0, 0, 0);
        opacity: 0;
    }

    to {
        transform: perspective(30cm) translate3d(0, 0, 5cm);
        opacity: 1;
    }
`

const Text = styled.p`
    font-size: 72px;
    color: lime;
    animation: ${wordZoom} 15s cubic-bezier(0.13, 0.93, 0, 1.06) forwards;
`


const PickHacksTitle = ({ setReady }) => { 
    const [content, setContent] = useState('');

    function rand(max) {
        return Math.floor(Math.random() * max);
    }

    const alphabet = [...new Array(26).fill(null).map((_, i) => String.fromCodePoint(97 + i)), ...new Array(10).fill(null).map((_, i) => i.toString())];

    function generateRandomText(length) {
        return new Array(length)
            .fill(null)
            .map(() => alphabet[rand(alphabet.length)])
            .join('');
    }

    useEffect(() => {
        makePickhacksTitle();
    }, [])

    function makePickhacksTitle() {
        setContent(generateRandomText(14));
    
        const interval = setInterval(() => {
            setContent(generateRandomText(14));
        }, 100);
    
        setTimeout(() => {
            clearInterval(interval);
            setContent("PICKHACKS 2024");
            setReady(true);
        }, .5 * 1000);
    
    }
        
    return (
        <Text>{content}</Text>
    );
}
 
export default React.memo(PickHacksTitle);