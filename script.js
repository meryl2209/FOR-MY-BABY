/* ==========================
      LOADING SCREEN
========================== */

let progress = 0;

let bar = document.getElementById("progress");
let text = document.getElementById("loading-text");

let loading = setInterval(function(){

    progress++;

    bar.style.width = progress + "%";

    text.innerHTML = progress + "%";

    if(progress == 100){

        clearInterval(loading);

        document.getElementById("loading-screen").style.display="none";

        document.getElementById("password-page").classList.remove("hidden");

    }

},40);


/* ==========================
      PASSWORD
========================== */

function checkPassword(){

    let password =
    document.getElementById("password").value;

    if(password=="MERYLOVESJAYDEN"){

        document.getElementById("password-page").style.display="none";

        document.getElementById("main").classList.remove("hidden");

    }

    else{

        document.getElementById("wrong").innerHTML=
        "❌ Wrong Password";

    }

}


/* ==========================
      LETTER
========================== */

function openLetter(){

    document.getElementById("letter-box")
    .classList.remove("hidden");

}


/* ==========================
      FINAL SURPRISE
========================== */

function surprise(){

    document.getElementById("gift")
    .classList.remove("hidden");

    alert("🎉 Happy Birthday! I Love You ❤️");

}


/* ==========================
      PHOTO SLIDESHOW
========================== */

let images=[

"PIC 1.jpeg",

"PIC 2.jpeg",

"PIC 3.jpeg",

"PIC 4.jpeg",

"PIC 5.jpeg",

"PIC 6.jpeg",

"PIC 7.jpeg",

"PIC 8.jpeg",

"PIC 9.jpeg",

"PIC 10.jpeg",

];

let current=0;

function next(){

    current++;

    if(current>=images.length){

        current=0;

    }

    document.getElementById("slide").src=images[current];

}

function previous(){

    current--;

    if(current<0){

        current=images.length-1;

    }

    document.getElementById("slide").src=images[current];

}

setInterval(next,3000);


/* ==========================
      FLOATING HEARTS
========================== */

setInterval(createHeart,500);

function createHeart(){

    let heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=
    Math.random()*20+15+"px";

    document.body.appendChild(heart);

    setTimeout(function(){

        heart.remove();

    },6000);

}