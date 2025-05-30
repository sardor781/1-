const body = document.querySelector('body');
const h2 = document.querySelector('.logo');
const nava = document.querySelector('.nava');
const href = document.querySelector('.href');
const href1 = document.querySelector('.href1');
const href2 = document.querySelector('.href2');
const text = document.querySelector('.text');
const text2 = document.querySelector('.text2');
const btn3 = document.querySelector('.btn3');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
function dark() {
    body.style.backgroundColor = 'black';
    href.style.color = 'white';
    href1.style.color = 'white';
    href2.style.color = 'white';
    h2.style.color = 'white';
    text.style.color = 'white';
    text2.style.color = 'white';
    btn3.style.color = 'white';
    btn1.style.backgroundColor = 'rgb(196, 181, 165)'
    btn2.style.backgroundColor = 'rgb(250, 144, 33)'
    alert('DarkMode yoqildi')
}
function light() {
    body.style.backgroundColor = 'rgb(196, 181, 165)';
    href.style.color = 'black';
    href1.style.color = 'black';
    href2.style.color = 'black';
    h2.style.color = 'black';
    text.style.color = 'black';
    text2.style.color = 'black';
    btn3.style.color = 'black';
    btn1.style.backgroundColor = 'rgb(251, 152, 47)'
    btn2.style.backgroundColor = 'rgb(0, 0, 0)'
    alert('LightMode yoqildi')

}
