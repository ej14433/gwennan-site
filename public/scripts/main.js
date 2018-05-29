'use strict';

window.addEventListener('load', e => {
	let toggle = false;
	document.addEventListener('click', e => {
		const target = e.target;

		if (target.classList.contains('focus')) {
			changeFocus(e, toggle);
			toggle = !toggle;
		}

		if (target.classList.contains('showcase-box')) {
			selectProject(target);
		}
	});
});

function changeFocus(e, toggle) {
	const columns = document.querySelectorAll('.column');
	columns.forEach(column => {
		column.style.maxHeight = toggle ? '100vh' : '3rem';
		column.style.backgroundColor = toggle ? '' : 'whitesmoke';
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
