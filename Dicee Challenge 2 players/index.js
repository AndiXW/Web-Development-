var n = Math.floor(Math.random() * 6) + 1; 

if ( n===1 ) {
document.querySelector(".img2").setAttribute("src" , "images/dice1.png");
} else {
    if (n===2) {
        document.querySelector(".img2").setAttribute("src" , "images/dice2.png");
    } else {
        if (n===3) {
            document.querySelector(".img2").setAttribute("src" , "images/dice3.png");
        } else {
            if (n===4) {
                document.querySelector(".img2").setAttribute("src" , "images/dice4.png");
            } else {
                if (n===5) {
                    document.querySelector(".img2").setAttribute("src" , "images/dice5.png");
                }}}}}

var a = Math.floor(Math.random() * 6) + 1; 

if ( a===1 ) {
document.querySelector(".img1").setAttribute("src" , "images/dice1.png");
} else {
    if (a===2) {
        document.querySelector(".img1").setAttribute("src" , "images/dice2.png");
    } else {
        if (a===3) {
            document.querySelector(".img1").setAttribute("src" , "images/dice3.png");
        } else {
            if (a===4) {
                document.querySelector(".img1").setAttribute("src" , "images/dice4.png");
            } else {
                if (a===5) {
                    document.querySelector(".img1").setAttribute("src" , "images/dice5.png");
                }}}}}

if (a > n) {
    document.querySelector("h1").innerHTML = "Winner 1 WIN!"
} else {
    if (a < n) {
        document.querySelector("h1").innerHTML = "Winner 2 WIN!"
    } else {
        document.querySelector("h1").innerHTML = "D R A W!"
    }
}