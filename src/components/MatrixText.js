import styled, { keyframes } from 'styled-components';
import React from 'react';

const wordZoom = keyframes`
    from {
        transform: perspective(10cm) translate3d(0, 0, 0);
    }

    to {
        transform: perspective(10cm) translate3d(0, 0, 10cm);
    }
`;

const fadeOut = keyframes`
    from {
    opacity: 1;
    }

    to {
    opacity: 0;
    }
`;

const Text = styled.p`
    font-family: 'Share Tech Mono', monospace;
    width: 1ch;
    color: lime;
    word-break: break-all;
    animation: ${wordZoom} 10s cubic-bezier(0.13, 0.93, 0, 1.06) forwards, ${fadeOut} 1s ease-out 1s;
    position: absolute;
`;

const MatrixText = ({ line }) => {
    return <Text style={{ top: `${line.y}vh`, left: `${line.x}vw` }}>{line.content}</Text>;
};

export default React.memo(MatrixText);
