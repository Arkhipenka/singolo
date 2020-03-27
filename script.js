window.onload = () => {
	onChangeScroll();
};
const MENU = document.getElementById("menu");

//mobile menu
const MobileMenu = document.getElementById("mobile");
const menuModal = document.querySelector(".mobile-modal")
const navMobile = document.querySelector(".nav-mobile")
const navDesktop = document.querySelector(".menu")
const headerWrapper = document.querySelector(".header")
let isMenuOpen = false

MobileMenu.addEventListener("click", menuClickHandler)
menuModal.addEventListener("click", closeMenuHandler)

function closeMenuHandler(event) {
  event.target.dataset.close && isMenuOpen ? closeMenu() : null
}

function menuClickHandler() {
  isMenuOpen ? closeMenu() : openMenu()
}

function openMenu() {
  toggleClasses()
  isMenuOpen = true
  navMobile.append(MENU)
}

function closeMenu() {
  toggleClasses()
  isMenuOpen = false
  menuModal.classList.add("menu-modal_hide")
  setTimeout(() => {
    menuModal.classList.remove("menu-modal_hide")
  }, 400)
  navDesktop.append(MENU)
}

function toggleClasses() {
  MobileMenu.classList.toggle("mobile-menu-active")
  menuModal.classList.toggle("menu-mobile")
  MENU.classList.toggle("mobile-nav")
  headerWrapper.classList.toggle("header_wrapper_menu-open")
}

const BUTTON = document.getElementById('btn');
const CLOSE = document.getElementById('close');



const TAB = document.getElementById('portfolio-nav');
const NEXT = document.getElementById('next');

//HEADER NAV



MENU.addEventListener('click', (event) => {
	MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
	event.target.classList.add('active');
});

window.addEventListener('scroll', onChangeScroll);

function onChangeScroll(){
	onChangeHeader()
	const HEADER_HEIGHT = 40;
	const servicesPos = document.getElementById("services").offsetTop - HEADER_HEIGHT;
  	const portfolioPos = document.getElementById("portfolio").offsetTop - HEADER_HEIGHT;
  	const aboutPos = document.getElementById("about").offsetTop - HEADER_HEIGHT;
  	const contactPos = document.getElementById("contact").offsetTop - HEADER_HEIGHT;

  	const currentPos = window.pageYOffset;
  	if (currentPos < servicesPos) changeActiveNav(0);
  	else if (currentPos >= servicesPos && currentPos < portfolioPos) changeActiveNav(1);
  	else if (currentPos >= portfolioPos && currentPos < aboutPos) changeActiveNav(2);
  	else if (currentPos >= aboutPos && currentPos < contactPos && !isPageEnd()) changeActiveNav(3);
  	if (isPageEnd() || currentPos >= contactPos) changeActiveNav(4);
}
function isPageEnd() {
  return window.pageYOffset >= document.documentElement.offsetHeight - innerHeight
}

function changeActiveNav(i) {
  const navLinks = MENU.querySelectorAll(".navbar-item")
  navLinks.forEach(item => {
    item.classList.remove("active")
  })
  navLinks[i].classList.add("active")
}


const HEADER = document.getElementById('header-nav');
function onChangeHeader() {
  if (window.pageYOffset > 100) {
 
    HEADER.classList.add("small-header")
  } else {
    
 	HEADER.classList.remove("small-header")
  }
}

const HOME = document.getElementById("home")
HOME.addEventListener("click", scrollTopHandler)

function scrollTopHandler() {
  window.scrollTo({ top, behavior: "smooth" })
}

//slider



const Left = document.getElementById("prew")
const Right = document.getElementById("next")
const slides = document.querySelectorAll(".slider")
const slider = document.getElementById("slider")

Left.addEventListener("click", changeSlideRight)
Right.addEventListener("click", changeSlideLeft)

function changeSlideLeft() {
  changeSlide("left")
}

function changeSlideRight() {
  changeSlide("right")
}

function changeSlide(direction) {
  for (let slide of slides) {
    slide.classList.toggle("slide-hidden")
  }
  for (let slide of slides) {
    if (!slide.classList.contains("slide-hidden")) {
      changeSlideClass(slide, `slider-${direction}`)
    } else changeSlideClass(slide, `slider-${direction}-gone`)
  }
  slider.classList.toggle("slider_two")
}

function changeSlideClass(el, newClass) {
  el.classList.add(newClass)
  setTimeout(() => {
    el.classList.remove(newClass)
  }, 300)
}

//sleep phone
const phones = document.querySelectorAll(".slider_image_box")
for (let phone of phones) phone.addEventListener("click", togglePhone)

function togglePhone(event) {
  const phone = event.target;
  if (phone.classList.contains("phone")) {
    phone.nextElementSibling.classList.toggle("sleep");
  } else if (phone.classList.contains("screen")); phone.classList.toggle("sleep")
}


//Portfolio sort
const PORTFOLIO = document.getElementById('portfolio');

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
		for(let i = 1; i <= workClass.children.length; i++){
			el.classList.remove('work' + i);
		}
	});
	for (var i = 0; i < workClass.children.length; i++) {
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


// form
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