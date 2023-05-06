const btn = document.getElementById('btn');
const main = document.getElementById('main');

function rand(max) {
	return Math.floor(Math.random() * max);
}

function skewedRandf() {
	let num = Math.random();
	return num > 0.5 ? 1 - (num - 0.5) * 0.7 : num * 0.7;
}

function makeMatrixTextLine() {
	const text = document.createElement('div');
	const textLength = rand(25) + 5;
	text.textContent = generateRandomText(textLength);
	text.className = 'matrix-text';
	const x = skewedRandf() * 100,
		y = skewedRandf() * 95;

	text.style.left = `${x}vw`;
	text.style.top = `${y + 5}vh`;

	const interval = setInterval(() => {
		text.textContent = generateRandomText(textLength);
	}, 100);

	setTimeout(() => {
		clearInterval(interval);
		text.remove();
	}, 6 * 1000);

	main.appendChild(text);
}

btn.addEventListener('click', makeMatrixTextLine);

const numSpawners = Math.random() * 10 + 10;
const spawnerTimeouts = [];
for (let i = 0; i < numSpawners; i++) {
	setTimeout(() => {
		spawner(i)();
	}, Math.random() * 2000);
}

function spawner(idx) {
	return function spawn() {
		makeMatrixTextLine();
		spawnerTimeouts[idx] = setTimeout(spawn, Math.random() * 6 * 1000);
	};
}

let progress = 0;
const progressInterval = setInterval(() => {
	document.getElementById('number').textContent = ++progress;

	if (progress >= 100) {
		for (let i = 0; i < numSpawners; i++) {
			clearTimeout(spawnerTimeouts[i]);
		}
		clearInterval(progressInterval);
	}
}, 1000);