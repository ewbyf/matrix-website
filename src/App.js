import './App.css';
import { useState, useEffect } from 'react';
import MatrixText from './components/MatrixText';
import PickHacksTitle from './components/PickHacksTitle';
import styled, { keyframes } from 'styled-components'
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import { useDetectScroll } from "@smakss/react-scroll-direction";
import Cameras from './components/Cameras';
import { AnimatePresence, motion } from 'framer-motion';

const Page = styled.div`
    height: 100vh;
    width: 100%;
    background-color: black;
    position: relative;
    padding: 50px;
`

const Text = styled.p`
    font-size: 24px;
    color: lime;
    text-align: center;
`

const Title = styled.p`
    font-size: 55px;
    font-weight: bold;
    color: lime;
    text-align: center;
`

function App() {
    const [lines, setLines] = useState([]);
    const [spawnerTimeouts, setSpawnerTimeouts] = useState([]);
    let ran = false;
    let ran2 = false;
    const [titleReady, setTitleReady] = useState(false);
    const [ready, setReady] = useState(false);
    const [showCameras, setShowCameras] = useState(false);
    const [scrollDir] = useDetectScroll({});

    useBottomScrollListener(() => setShowCameras(true));

    useEffect(() => {
        if (scrollDir == "up" && showCameras == true) {
            setShowCameras(false);
        }
    }, [scrollDir])


    useEffect(() => {
        makeMatrixTextLine();
    }, []);

    useEffect(() => {
        if (!ran2) {
            ran2 = true;
            const num = Math.ceil(Math.random() * 20 + 30);
            for (let i = 0; i < num; i++) {
                setTimeout(() => {
                    spawner(i, spawnerTimeouts)();
                }, Math.random() * 2000);
            }
        }
    }, [spawnerTimeouts]);

    useEffect(() => {
        if (!ran) {
            ran = true;
            let progress = 0;
            const progressInterval = setInterval(() => {
                progress += 50;
    
                if (progress >= 100) {
                    for (let i = 0; i < spawnerTimeouts.length; i++) {
                        clearTimeout(spawnerTimeouts[i]);
                    }
                    clearInterval(progressInterval);
                    setTitleReady(true);
                }
            }, 1000);
        }
    }, [spawnerTimeouts]);

    function spawner(idx, spawnerTimeouts) {
        return function spawn() {
            makeMatrixTextLine();
            let temp = spawnerTimeouts;
            temp[idx] = setTimeout(spawn, Math.random() * 6 * 1000)
            setSpawnerTimeouts(temp);
        };
    }

    function skewedRandf() {
        let num = Math.random();
        return num;
        // return num > 0.5 ? num * .6 + .4 : num * 0.7;
    }

    function makeMatrixTextLine() {
        const x = skewedRandf() * 100,
            y = skewedRandf() * 95 + 5;

        setLines(lines => [...lines, { content: 'pickhacks', x, y }]);

        setTimeout(() => {
            setLines(lines => lines.splice(0, 1));
        }, 2 * 1000);
    }

    return (
        <div>
            <div id="main">
                {lines.map((line, i) => (
                    <MatrixText line={line} key={i}/>
                ))}
                {titleReady &&
                    <PickHacksTitle setReady={setReady}/>
                }
            </div>
            {ready &&
                <Page>
                    <Title>INFO</Title>
                    <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero possimus sequi exercitationem atque voluptas pariatur quos delectus voluptate adipisci minus, quam eaque nemo nostrum est cupiditate. Voluptatibus vero necessitatibus ea?</Text>
                    <AnimatePresence mode="sync">
                        {showCameras &&
                            <Cameras key="camera"/>
                        }
                    </AnimatePresence>
                </Page>
            }
        </div>
    );
}

export default App;

