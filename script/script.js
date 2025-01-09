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