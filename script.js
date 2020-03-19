const MENU = document.getElementById("menu");
const PORTFOLIO = document.getElementById('portfolio-block')
const BUTTON = document.getElementById('btn');
const CLOSE = document.getElementById('close');
const SCREEN = document.getElementsByClassName('screen');
const TAB = document.getElementById('portfolio-nav');
const NEXT = document.getElementById('next');

MENU.addEventListener('click', (event) => {
	MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
	event.target.classList.add('active');
});

let sliders = document.querySelectorAll('.slider');
let currentSlider = 0;
let isEnabled = true;

function changeCurrentSlider(n) {
    currentSlider = (n + sliders.length) % sliders.length;
}

function hideSlider(argument) {
    isEnabled = false;
    sliders[currentSlider].classList.add(argument);
    sliders[currentSlider].addEventListener('animationend', function () {
        this.classList.remove('slide-active', argument);
    });
}

function showSlider(argument) {
    sliders[currentSlider].classList.add('slide-next', argument);
    slider[currentSlider].classList.add('')
    sliders[currentSlider].addEventListener('animationend', function () {
        this.classList.remove('slide-next', argument);
        this.classList.add('slide-active');
        isEnabled = true;
    });
}

function previousSlider(n) {
    hideSlider('to-right');
    changeCurrentSlider(n - 1);
    showSlider('from-left')
}

function nextSlider(n) {
    hideSlider('to-left');
    changeCurrentSlider(n + 1);
    showSlider('from-right')
}

document.querySelector('.prew').addEventListener('click', function () {
    if (isEnabled) {
        previousSlider(currentSlider);
    }
});

document.querySelector('.next').addEventListener('click', function () {
    if (isEnabled) {
        nextSlider(currentSlider);
    }
});



TAB.addEventListener('click', (event) => {
	let arrPortf = ['1','2','3','4','5','6','7','8','9','10','11','12'];
	function shuffle(arr){
		arr.sort(() => Math.random() - 0.5)
	};
	shuffle(arrPortf);
	TAB.querySelectorAll('span').forEach(el => el.classList.remove('active'))
	event.target.classList.add('active');
	const workClass = document.getElementById('portfolio-block');
	workClass.querySelectorAll('img').forEach(el => {
		for(let i = 1; i <= 12; i++){
			el.classList.remove('work' + i);
		}
	});
	for (var i = 0; i < 12; i++) {
		workClass.children[i].classList.add('work' + arrPortf[i]);
	}
	
			

	
})
PORTFOLIO.addEventListener('click', (event) => {
	PORTFOLIO.querySelectorAll('img').forEach(el => el.classList.remove('active'));
	event.target.classList.add('active');
});

const filterPictures = () => {
    let img = {};
    let arr = [0,1,2,3,4,5,6,7,8,9,10,11];
    var shuffledPictures = arr.sort(function(){
        return Math.random() - 0.5;
    });
    const gallery = document.querySelectorAll(".portf");
    for(const [index, pic] of gallery.entries()){
        let tmp = pic.querySelector('.pic');
        img[index] = tmp;
        tmp.remove();
    }
    gallery.forEach((el, i) => {
        el.append(img[shuffledPictures[i]]);        
    })    
}

BUTTON.addEventListener('click', () => {
	const subject = document.getElementById('subject').value;
	const description = document.getElementById('describe').value;
	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;

	if(email === '' || name === ''){
		false;
	}else{
		if(subject === '' && description === ''){
			document.getElementById('resultSubject').innerText = 'Нет темы';
			document.getElementById('resultDescribe').innerText = 'Нет описания';
		}else{
			document.getElementById('resultSubject').innerText = 'Тема: ' + subject;
			document.getElementById('resultDescribe').innerText = 'Описание: ' + description;
		}
		document.getElementById('modal').classList.remove('hidden');
		document.form.reset();
	}
	
});
CLOSE.addEventListener('click', () => {
	document.getElementById('resultSubject').innerText = '';
	document.getElementById('resultDescribe').innerText = '';
	document.getElementById('modal').classList.add('hidden');
});