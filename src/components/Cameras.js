import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import Screen from './Screen';

const Container = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: black;
`;

const Keyboard = styled(motion.img)`
    height: 200px;
    perspective: 800px;
`

const Camera = styled(motion.div)`
    box-sizing: border-box;
    border: 35px gray solid;
    width: 70%;
    height: 75vh;
    background-color: black;
    display: flex;
    align-items: center;
`;

const Top = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    z-index: 3;
`

const LiveText = styled.p`
    font-size: 24px;
    font-weight: bold;
    padding: 10px 15px 0px 20px;
    color: red;
`

const blink = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`;

const Blinker = styled.div`
    width: 20px;
    height: 20px;
    margin-top: 12.5px;
    border-radius: 20px;
    background-color: red;
    animation: ${blink} 1s infinite;
`

const Cameras = () => {

    return (
        <Container
            as={motion.div}
            initial={{ backgroundColor: 'black' }}
            animate={{ backgroundColor: '#9BDBFF' }}
            exit={{ backgroundColor: 'black' }}
            transition={{ type: 'tween', duration: 2 }}
        >
            <Camera
                as={motion.div}
                initial={{ opacity: 0, transform: "scale(2)" }}
                animate={{ opacity: 1, transform: "scale(1)" }}
                exit={{ opacity: 0, transform: "scale(2)", transition: {type: 'spring', duration: 1 }}}
                transition={{ type: 'spring', duration: 2, ease: "ease-in" }}
            >
                <Top>
                    <LiveText>LIVE</LiveText>
                    <Blinker/>
                </Top>
                <Screen></Screen>
            </Camera>
            <Keyboard
                src="/images/keyboard.png" 
                as={motion.img}
                initial={{ opacity: 0, transform: "scale(2)" }}
                animate={{ opacity: 1, transform: "scale(1)" }}
                exit={{ opacity: 0, transform: "scale(2)", transition: {type: 'spring', duration: 1 }}}
                transition={{ type: 'spring', duration: 2, ease: "ease-in" }}
            />
        </Container>
    );
};

export default Cameras;
