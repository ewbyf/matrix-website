import './App.css';
import { useState, useEffect } from 'react';
import MatrixText from './components/MatrixText';

function App() {
    const [lines, setLines] = useState([]);

    useEffect(() => {
        // let arr = [];

        // const numSpawners = Math.random() * 10 + 10;
        // for (let i = 0; i < numSpawners; i++) {
        //   setTimeout(() => {
        //     makeMatrixTextLine(arr);
        //   }, Math.random() * 2000);
        // }
    }, []);

    function rand(max) {
        return Math.floor(Math.random() * max);
    }

    function skewedRandf() {
        let num = Math.random();
        return num;
        // return num > 0.5 ? num * .6 + .4 : num * 0.7;
    }

    function makeMatrixTextLine() {
        const x = skewedRandf() * 100,
            y = skewedRandf() * 95 + 5;

        // arr.push({ content: 'pickhacks', x, y })

        // setLines(arr);
        setLines([...lines, { content: 'pickhacks', x, y }])

        setTimeout(() => {
            let temp = lines;
            temp.shift();
            setLines(temp);
        }, 5 * 1000);
    }

    return (
        <div>
            <button id="btn" onClick={() => makeMatrixTextLine()}>Add Text</button>
            <div id="main">
                <div className="progress">
                    <span id="number">0</span>
                    <span>%</span>
                </div>
                {lines.map((line) => (
                    <MatrixText line={line} />
                ))}
            </div>
        </div>
    );
}

export default App;

