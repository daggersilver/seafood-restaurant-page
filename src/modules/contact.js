

const contactpage = () => {
    var contactDiv = document.createElement("div");
    var form = document.createElement("form");
    var formh1 = document.createElement("h1");
    var formDiv = document.createElement("div");
    var inputEmail = document.createElement("input");
    var inputSub = document.createElement("input");

    formh1.innerText = "SIGN UP FOR FOOD UPDATES";
    inputEmail.setAttribute("type", "email");
    inputEmail.setAttribute("placeholder", "Enter your email");
    inputSub.setAttribute("type", "submit");

    formDiv.appendChild(inputEmail);
    formDiv.appendChild(inputSub);

    form.appendChild(formh1);
    form.appendChild(formDiv);

    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    p1.innerText = "221B Baker Street";
    p2.innerText = "344-5345-4554";

    contactDiv.appendChild(form);
    contactDiv.appendChild(p1);
    contactDiv.appendChild(p2);
    contactDiv.id = "contact-div";

    var nav = document.querySelector("nav");
    var foot = document.querySelector("footer");
    var homediv = document.getElementById("home");
    var menuDiv = document.getElementById("menu");

    if(content.contains(homediv)){
        content.removeChild(homediv)
    }
    if(content.contains(menuDiv)){
        content.removeChild(menuDiv)
    }
    
    content.appendChild(nav);
    content.appendChild(contactDiv);
    content.appendChild(foot);
}

export {contactpage};


