
import {homepage} from "./modules/home"
import {menupage} from "./modules/menu"
import {contactpage} from "./modules/contact"

var content = document.getElementById("content");


window.addEventListener("load", ()=>{
    homepage(); 
    
    var menuLink = document.getElementById("menu-link");
    var contactLink = document.getElementById("contact-link");
    var toggleLinks = 0;

    menuLink.addEventListener("click", ()=>{
        if(toggleLinks != "menupage"){
            menupage();
            toggleLinks = "menupage";
        }
    })

    contactLink.addEventListener("click", ()=>{
        if(toggleLinks != "contactpage"){
            contactpage();
            toggleLinks = "contactpage";
        }
    })
})



