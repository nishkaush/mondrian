var row1 = document.getElementById("row1"); //for choosing color purposes
var row2 = document.getElementById("row2");
var row3 = document.getElementById("row3");
var row4 = document.getElementById("row4");

var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");
var div4 = document.getElementById("div4");

var lime = document.getElementById("lime");
var blue = document.getElementById("blue");
var red = document.getElementById("red");


//create a for loop on all div elements so add event listener can be assigned to all
//and if a click occurs, a random variable will tell us the vairbale name the element is associated with. so if div4 is clicked, the variable should give us "div4";



lime.addEventListener("click", func1);
red.addEventListener("click", func2);
blue.addEventListener("click", func3);

function func1() {
    finalfun("lime");
}

function func2() {
    finalfun("red");
}

function func3() {
    finalfun("blue");
}


function finalfun(color) {

    div1.addEventListener("click", fundiv1);

    function fundiv1() {
        div1.style.backgroundColor = color;
    }

    div2.addEventListener("click", fundiv2);

    function fundiv2() {
        div2.style.backgroundColor = color;
    }

    div3.addEventListener("click", fundiv3);

    function fundiv3() {
        div3.style.backgroundColor = color;
    }

    div4.addEventListener("click", fundiv4);

    function fundiv4() {
        div4.style.backgroundColor = color;
    }

    //ev.stopPropagation();

    row1.addEventListener("click", funrow1);

    function funrow1(e) {
        row1.style.backgroundColor = color;
        e.stopPropagation();
    }

    row2.addEventListener("click", funrow2);

    function funrow2(e) {
        row2.style.backgroundColor = color;
        e.stopPropagation();
    }

    row3.addEventListener("click", funrow3);

    function funrow3(e) {
        row3.style.backgroundColor = color;
        e.stopPropagation();
    }

    row4.addEventListener("click", funrow4);

    function funrow4(e) {
        row4.style.backgroundColor = color;
        e.stopPropagation();
    }
}
