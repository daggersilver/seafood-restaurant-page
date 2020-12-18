
const homepage = ()=>{
    //nav bar
    var navBar = document.createElement("nav");
    var navSpan1 = document.createElement("span");
    var navSpan2 = document.createElement("span");
    var navlink1 = document.createElement("a");
    var navlink2 = document.createElement("a");
    var navlink3 = document.createElement("a");
    
    navlink1.innerText = "Home";
    navlink1.setAttribute("href", "./index.html")
    navlink1.id = "home-link"

    navlink2.innerText = "Menu";
    navlink2.setAttribute("href", "#")
    navlink2.id = "menu-link"

    navlink3.innerText = "Contact Us";
    navlink3.setAttribute("href", "#")
    navlink3.id = "contact-link"

    navSpan2.appendChild(navlink1);
    navSpan2.appendChild(navlink2);
    navSpan2.appendChild(navlink3);
    navSpan2.classList.add("nav-links");
    navSpan1.classList.add("logo-con")

    navBar.appendChild(navSpan1);
    navBar.appendChild(navSpan2);
    navBar.id = "nav-bar";

    //banner
    var homediv = document.createElement("div");
    var h1 = document.createElement("h1");
    
    homediv.id = "home";
    h1.innerHTML = `GET THE BEST SEAFOOD IN TOWN <i class="fas fa-fish"></i>`
    homediv.appendChild(h1);

    //footer
    var foot = document.createElement("footer");
    var footP = document.createElement("p");
    var footSpan = document.createElement("span");

    footP.innerHTML = `&copy; Copyright . All rights reserved`;
    footSpan.innerHTML = `<a href="#"><i class="fab fa-facebook-f"></i></a>
                          <a href="#"><i class="fab fa-instagram"></i></a>
                          <a href="#"><i class="fab fa-twitter"></i></a>`;
    
    foot.appendChild(footP);
    foot.appendChild(footSpan);

    //complete webpage
    content.appendChild(navBar);
    content.appendChild(homediv);
    content.appendChild(foot);
}

export {homepage}


