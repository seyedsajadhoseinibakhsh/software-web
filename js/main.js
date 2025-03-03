// menu Selectors 
const hamburgerMenu = document.querySelector('.hamburger');
const hamburgerItem = document.querySelectorAll('.hamburger__menu');
const mobileMenu =  document.querySelector('.menu__mobile');
// functions
const menuShowing = function () {
  hamburgerItem[0].classList.toggle('hamburger__lineone--action');
  hamburgerItem[1].classList.toggle('hamburger__linetwo--action');
  hamburgerItem[2].classList.toggle('hamburger__linethree--action');
  mobileMenu.classList.toggle('helping--class');
}
// functionality menu
hamburgerMenu.addEventListener('click' , function () {
  if (mobileMenu.classList.contains('helping--class')) {
    mobileMenu.classList.add('open_menu');
    mobileMenu.classList.remove('close_menu');
    menuShowing();
    mobileMenu.style.transform = 'translateX(0)';
  }
  else if (!mobileMenu.classList.contains('helping--class')) {
    mobileMenu.classList.add('close_menu');
    mobileMenu.classList.remove('open_menu');
    menuShowing();
    mobileMenu.style.transform = 'translateX(-100%)';
  }
});
// teamBtn selectors
const openBtn = document.getElementById('team-Btn');
const modalWindow = document.querySelector('.team-modal');
const closeTab = document.querySelector('.modal-bgc');
const openBtnHeader = document.querySelector('.team-btn');
// options selectors
const btn0 = document.querySelector('.option--0');
const btn1 = document.querySelector('.option--1');
const input0 = document.querySelector('.team-input-title-0');
const input1 = document.querySelector('.team-input-title-1');
// functionality modal-Tab
const modalMoving = function () {
  modalWindow.classList.toggle('hidden');
  modalWindow.style.position = 'fixed';
};
openBtnHeader.addEventListener('click', modalMoving);
openBtn.addEventListener('click', modalMoving);
closeTab.addEventListener('click', modalMoving);
window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
    modalMoving();
  }
});
// functionality window
const btn0Process = function () {
  btn0.classList.add('active');
  btn0.classList.remove('regular');
  btn1.classList.add('regular');
  btn1.classList.remove('active');
  input0.textContent = 'Company';
  input1.textContent = 'Your Name';
};
const btn1Process = function () {
  btn1.classList.remove('regular');
  btn0.classList.add('regular');
  btn0.classList.remove('active');
  input0.textContent = 'Phone Number';
  input1.textContent = 'Email';
};
btn0.addEventListener('click', btn0Process);
btn1.addEventListener('click', btn1Process);


// MMD
const slideBtnsExpertise = document.querySelectorAll(".expertise_slidebtns button");
const sliderBox = document.querySelector(".expertise_box--wrapper");

const slideExpertise=(e)=>{
  sliderBox.style.transform=`translateX(${-100*e.id}%)`
}
[...slideBtnsExpertise].forEach((btn)=>{
    btn.addEventListener("click",()=>slideExpertise(btn))
})
