// Your code goes here
function randomColor(pastel){
    // generates a random hex color;
    colors = pastel ? "bcdef":"abcdef1234567890";
    let newColor = "#";
    for(i=0;i<6;i++){
    let num = Math.floor(Math.random() * colors.length);
    newColor += colors[num];
    }

    return newColor;
}

let cute = false; // whats up with this?

// #1
// i want to put this on everything !!!!!
const conts = document.querySelector("body");
conts.addEventListener("click", function(event){
    event.target.style.color = randomColor();
});

// #2
const navItems = document.querySelectorAll("nav a");
navItems.forEach(function(item){
    item.addEventListener("click", function(event){
        event.target.style.cColor = randomColor();
        event.preventDefault();
        event.stopPropagation();
    })
})

// #3
const btns = document.querySelectorAll(".btn");
btns.forEach(function(btn){
    btn.addEventListener("mouseover", function(event){
        event.currentTarget.style.backgroundColor = randomColor(true);
    });
});

// #4
const h2 = document.querySelectorAll("h2");
h2.forEach(function(heading){
    heading.addEventListener("dblclick", function(event){
        let currentSizeText = event.currentTarget.style.fontSize;
        if(!currentSizeText || parseInt(currentSizeText.split("r")[0]) > 10){
            event.currentTarget.style.fontSize = "2rem";
        } else {
            //that duck typing tho :joy:
            event.currentTarget.style.fontSize = (currentSizeText.split("r")[0] * 1.5) + "rem";
        }
        
        event.stopPropagation();
    });
});

// #5 
// its the same but different.
const h4 = document.querySelectorAll("h4");
h4.forEach(function(heading){
    heading.addEventListener("dblclick", function(event){
        let currentSizeText = event.currentTarget.style.fontSize;
        if(!currentSizeText || parseInt(currentSizeText.split("r")[0]) > 10){
            event.currentTarget.style.fontSize = "3rem";
        } else {
            //that duck typing tho :joy:
            event.currentTarget.style.fontSize = (currentSizeText.split("r")[0] * 1.25) + "rem";
        }
    });
});

// #6
const header = document.querySelector(".main-navigation");
header.addEventListener("click", function(event){
    event.currentTarget.style.backgroundColor = randomColor();
    event.stopPropagation();
})


// this isnt an event handler :thinking:
let kitten = new Image();
kitten.src = "http://oxmg23usfvkkg5uy1jypi6w8-wpengine.netdna-ssl.com/wp-content/uploads/cats-animals-kittens-background.jpg"

// #7 && #8 issa twofur... pun intended
const imgs = document.querySelectorAll("img");
kitten.onload = function(){ //this just makes sure the image is loaded in the background before letting you turn things into a kitten;
    
    imgs.forEach(function(img){
        img.addEventListener("click", function(){
            img.src = kitten.src;
            cute = true;
        })
    })

    // #9
    const body = document.querySelector("body");
    window.addEventListener("resize", function(event){
        if(cute){
            body.style.background = `url(${kitten.src})`;
            body.style.backgroundSize = "100%";
            body.style.backgroundAttachment = "fixed";
        }
    });

    // #10
    window.addEventListener("dblclick", function(event){
        if(cute){
            body.style.background = "none"
            cute = false;
        }
    });
    
}
