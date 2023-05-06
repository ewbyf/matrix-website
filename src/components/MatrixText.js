import styled, { keyframes } from 'styled-components'

const MatrixText = ({ line }) => {
    const wordZoom = keyframes`
        from {
            transform: perspective(10cm) translate3d(0, 0, 0);
        }

        to {
            transform: perspective(10cm) translate3d(0, 0, 10cm);
            left: ${line.x > 50 ? line.x * 1.5 : line.x - line.x*1.5}vw;
        }
    ` 

    const Text = styled.p`
        font-family: 'Share Tech Mono', monospace;
        width: 1ch;
        color: lime;
        word-break: break-all;
        animation: ${wordZoom} 20s cubic-bezier(0.13, 0.93, 0, 1.06) forwards;
        position: absolute;
    `
        
    return (
        <Text style={{top: `${line.y}vh`, left: `${line.x}vw`}}>{line.content}</Text>
    );
}
 
export default MatrixText;