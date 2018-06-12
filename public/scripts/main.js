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
					const about = document.querySelector('.about-content');
					body.style.backgroundColor = 'whitesmoke';
					about.style.display = 'none';
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
		column.style.maxHeight = toggle ? '100vh' : '3.3rem';
	});
	const showcase = document.querySelector('.showcase');
	showcase.style.display = toggle ? 'none' : 'grid';
	showcase.style.maxHeight = toggle ? '0' : '100%';
	showcase.style.height = toggle ? '0' : '80vh';
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
		left.classList.replace('left', 'right');
		main.classList.replace('main', 'left');
		right.classList.replace('right', 'main');
	}
}

function changeContent(target) {
	const about = document.querySelector('.about-content');
	const showcase = document.querySelector('.showcase');
	const body = document.querySelector('body');
	const imgs = document.querySelectorAll('.showcase-img');
	const desc = document.querySelector('.desc');
	let imagesSrcArray = [];

	if (target.classList.contains('atob')) {
		about.style.display = 'none';
		desc.innerHTML = `Growing up in the Welsh country Gwennan found herself able to navigate around without the help of road signs, to be dropped in the middle of nowhere, and knowing where she was based on the landscape's familiarities. This is what the pattern portrays, but not through the country side but rather Gwennan’s walk to University; from Peckham to Camberwell. Every square represents a different checkpoint in the landmarks on her route. Using these checkpoints as an indicator of how long she has left to walk.`;
		showcase.style.display = 'grid';
		body.style.backgroundColor = 'rgb(244,113,193)';
		imagesSrcArray = [
			'second-image-for-AIB.jpg',
			'final-peice-save-for-web.jpg',
			'image-to-go-in-AIB.jpg'
		];
	} else if (target.classList.contains('homage')) {
		about.style.display = 'none';
		desc.innerHTML = `Homage was a commentary piece on Gwennan's identity. She portrayed her torn feelings about her connection with Wales by merging her roots and her life now in London. Each ceramic symbolises different elements that she has taken with her from Wales to each of her houses in London, such as the importance of tea and the communal area. As a twist each ceramic has a design flaw, they cannot be used for their visual function. By displaying the ceramic pieces on the traditional Welsh dresser that has been in her family for generations evokes the closeness she feels towards Wales but also her displacement within.`;
		showcase.style.display = 'grid';
		body.style.backgroundColor = 'rgb(236,209,69)';
		imagesSrcArray = [
			'dresser.jpg',
			'dresser-main-photo.jpg',
			'image-of-the-right.jpg'
		];
	} else if (target.classList.contains('community-garden')) {
		about.style.display = 'none';
		desc.innerHTML = `Community Garden was a collaborative project with Surface Designer & Illustrator Charlotte Cropper. The collaboration sparked from their shared joy of colour and patterns. They created a starter pack for local garden allotments around Camberwell to encourage home growing and less waste. Using Beetroot as the main focus of design both creatives designed accessible and durable gardening tools along with a welcome and a how to guide.`;
		showcase.style.display = 'grid';
		body.style.backgroundColor = 'rgb(76,100,198)';
		imagesSrcArray = [
			'welcome-pack-real-size.jpg',
			'table-top-real-size.jpg',
			'table-top-view-2-real-size.jpg'
		];
	} else if (target.classList.contains('about')) {
		about.style.display = 'grid';
		body.style.backgroundColor = 'rgb(235,80,163)';
		showcase.style.display = 'none';
		desc.innerHTML = '';
	}

	imgs.forEach((img, i) => {
		img.src = `./img/${imagesSrcArray[i]}`;
	});
}
