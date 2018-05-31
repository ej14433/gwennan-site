'use strict';

window.addEventListener('load', e => {
	let toggle = false;
	document.addEventListener('click', e => {
		const target = e.target;

		if (target.classList.contains('project')) {
			changeContent(target);
		}

		if (target.classList.contains('focus')) {
			if (
				(target.classList.contains('project') && !toggle) ||
				(target.classList.contains('title') && toggle)
			) {
				changeFocus(toggle);
				if (target.classList.contains('title')) {
					const body = document.querySelector('body');
					body.style.backgroundColor = 'whitesmoke';
				}
				toggle = !toggle;
			}
		}

		if (target.classList.contains('showcase-box')) {
			selectProject(target);
		}
	});
});

function changeFocus(toggle) {
	const columns = document.querySelectorAll('.column');
	columns.forEach(column => {
		column.style.maxHeight = toggle ? '100vh' : '3rem';
		column.firstElementChild.style.color = toggle ? '' : 'black';
	});
	const showcase = document.querySelector('.showcase');
	showcase.style.display = toggle ? 'none' : 'grid';
	showcase.style.maxHeight = toggle ? '0' : '100%';
}

function selectProject(target) {
	const right = document.querySelector('.right');
	const main = document.querySelector('.main');
	const left = document.querySelector('.left');

	if (target == left) {
		right.classList.replace('right', 'left');
		main.classList.replace('main', 'right');
		left.classList.replace('left', 'main');
	} else if (target == right) {
		right.classList.replace('right', 'main');
		main.classList.replace('main', 'left');
		left.classList.replace('left', 'right');
	}
}

function changeContent(target) {
	const body = document.querySelector('body');
	const imgs = document.querySelectorAll('.showcase-img');
	let imagesSrcArray = [];

	if (target.classList.contains('atob')) {
		body.style.backgroundColor = 'rgb(244,113,193)';
		imagesSrcArray = [
			'final-peice-save-for-web.jpg',
			'final-peice-save-for-web.jpg',
			'final-peice-save-for-web.jpg'
		];
	} else if (target.classList.contains('homage')) {
		body.style.backgroundColor = 'rgb(236,209,69)';
		imagesSrcArray = ['home.jpg', 'sustainability.jpg', 'atob-pattern.jpg'];
	} else if (target.classList.contains('community-garden')) {
		body.style.backgroundColor = 'rgb(76,100,198)';
		imagesSrcArray = [
			'welcome-pack-real-size.jpg',
			'table-top-view-2-real-size.jpg',
			'table-top-real-size.jpg'
		];
	} else if (target.classList.contains('about')) {
		body.style.backgroundColor = 'rgb(235,80,163)';
		imagesSrcArray = [
			'mamgu.jpg',
			'sustainability.jpg',
			'atob-pattern.jpg'
		];
	}

	imgs.forEach((img, i) => {
		img.src = `./img/${imagesSrcArray[i]}`;
	});
}
