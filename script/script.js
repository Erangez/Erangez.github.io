// Статичная шапка
window.onscroll = function(){
    stick_Header();
}
const header = document.querySelector(".main-header-top");

function stick_Header(){
    let window_scroll_pos = window.scrollY;
    if (window_scroll_pos > 1){
        header.classList.add("main-header-stick")
    }
    else{ 
        header.classList.remove("main-header-stick")
    }
}
// Окно входа/регистрации
const modal = document.getElementById("modalOut");
const modalOpen = document.getElementById("modalOpen");
const modalClose = document.getElementById("modalClose");
const enterTab = document.getElementById("enterTab");
const registerTab = document.getElementById("registerTab");
const enterForm = document.getElementById("enterForm");
const registerForm = document.getElementById("registerForm");

modalOpen.onclick = function(){
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}
modalClose.onclick = function() {
    modal.style.display = "none";
    document.body.style.overflow = ""; 
}
enterTab.onclick = function(){
    enterTab.classList.add("active");
    registerTab.classList.remove("active");
    enterForm.classList.add("show");
    registerForm.classList.remove("show");
}
registerTab.onclick = function(){
    registerTab.classList.add("active");
    enterTab.classList.remove("active");
    registerForm.classList.add("show");
    enterForm.classList.remove("show");
}
// Проверка пароля на совпадение
const password = document.getElementById("password-reg");
const confirm_password = document.getElementById("repeat-password");
function validatePassword(){
    if (password.value != confirm_password.value){
        confirm_password.setCustomValidity("Пароли не совпадают");
    }
    else{
        confirm_password.setCustomValidity("");
    }
}
password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;
// Скроллинг
const blocks = document.querySelectorAll('.ad-block');
let currentIndex = 0;

function showNextBlock(){
    blocks[currentIndex].style.left = '-100vw';
    currentIndex = (currentIndex + 1) % blocks.length;
    blocks[currentIndex].style.left = '0';
}
setInterval(showNextBlock, 6000);
// Изменение содержания кнопки
const button = document.getElementById("modalOpen");
window.addEventListener("resize", function(){
    if(window.outerWidth < 300){
        button.innerText = "Войти / Зарег..";
    }
    else{
        button.innerText = "Войти / Зарегистрироваться";
    }
    console.log("F:", window.outerWidth);
})
