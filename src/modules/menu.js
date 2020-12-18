var menuArray = [{
    src: "images/1lobster.jpg" ,
    heading: "lobster party"
},
{
    src: "images/2salmon.jpg" ,
    heading: "salmon dinner"
},
{
    src: "images/3shrimpsalad.jpg" ,
    heading: "shrimp salad"
},
{
    src: "images/4oyesters.jpg" ,
    heading: "oyesters"
},
{
    src: "images/5shushi.jpg" ,
    heading: "roku shushi"
},
{
    src: "images/6salad.jpg" ,
    heading: "spinach salad"
},
{
    src: "images/7soup.jpg" ,
    heading: "fish curry"
},
{
    src: "images/8thainoodles.jpg" ,
    heading: "thai noodles"
}]

const menupage = ()=>{
    var menuDiv = document.createElement("div");
    var menuh1 = document.createElement("h1");
    var gridmenu = document.createElement("div");

    menuh1.innerText = "CHECK OUT OUR SPECIALS";
    menuDiv.appendChild(menuh1);

    for(var i=0; i<menuArray.length; i++){
        var menutile = document.createElement("div");
        var img = document.createElement("img");
        var imgh2 = document.createElement("h2");

        img.setAttribute("src", menuArray[i].src);
        imgh2.innerText = menuArray[i].heading.toUpperCase();

        menutile.appendChild(img);
        menutile.appendChild(imgh2);
        menutile.classList.add("menu-tile");
        gridmenu.appendChild(menutile);
      
    }
    gridmenu.id = "grid-menu";
    menuDiv.appendChild(gridmenu);
    menuDiv.id = "menu";


    var nav = document.querySelector("nav");
    var foot = document.querySelector("footer");
    var homediv = document.getElementById("home");
    var contactDiv = document.getElementById("contact-div");

    if(content.contains(homediv)){
        content.removeChild(homediv)
    }
    if(content.contains(contactDiv)){
        content.removeChild(contactDiv)
    }

    content.appendChild(nav);
    content.appendChild(menuDiv);
    content.appendChild(foot);
}

export {menupage}




