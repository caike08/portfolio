function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 80,
            header = document.querySelector("header");
        if (distanceY > shrinkOn) {
            classie.add(header,"smaller");
        } else {
            if (classie.has(header,"smaller")) {
                classie.remove(header,"smaller");
            }
        }
    });

    var menu = document.getElementById("menu");

    

    document.getElementById("toggle-menu").addEventListener("click", function(){
        
        console.log("clicked");

        if(menu.style.display != "block") {
            menu.style.display = "block";
        }
        else menu.style.display = "none";

        var menuOpt = document.addEventListener("click", function(e) {

        });
    });
}

window.onload = init();