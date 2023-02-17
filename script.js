var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link")
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab")
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}


// theme change
let btn = document.getElementById("btn");
let btnText = document.getElementById("btnText");
let btnIcon = document.getElementById("btnIcon");
btn.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        btnIcon.src = "dark/sun.png";
        btnText.innerHTML = "Light";
    }
    else {
        btnIcon.src = "dark/moon.png";
        btnText.innerHTML = "Dark";
    }
}

// scroll to top button

const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", ()=>{
    if(window.pageYOffset > 200){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})