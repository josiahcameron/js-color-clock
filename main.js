//Solution:
(function() {
    "use strict"; //give an iffy that limits scope

    const $display = document.querySelector(".clock-display");
    const $progressBar = document.querySelector(".clock-progress-bar");
    const $clock = document.querySelector(".clock");

    let isHovering = false;

    $clock.addEventListener("mouseover", function(){
        isHovering = true;
    });

    $clock.addEventListener("mouseout", function(){
        isHovering = false;
    });

    setInterval(function() {
        const currentTime = new Date();
        let seconds, minutes, hour; 
        let hexseconds, hexminutes, hexhour;

        if(isHovering){
            seconds =  ('0' + currentTime.getSeconds().toString(16)).slice(-2); //toString turns it into a string and base 16 for hexadecimal
            minutes =  ('0' + currentTime.getMinutes().toString(16)).slice(-2);
            hour = ('0' + currentTime.getHours().toString(16)).slice(-2);

            $clock.style.backgroundColor = `#${hour}:${minutes}:${seconds}`;

        } else {
            seconds =  ('0' + currentTime.getSeconds()).slice(-2);
            minutes =  ('0' + currentTime.getMinutes()).slice(-2);
            hour = ('0' + currentTime.getHours()).slice(-2);
        }
        hexseconds =  ('0' + currentTime.getSeconds().toString(16)).slice(-2); //toString turns it into a string and base 16 for hexadecimal
        hexminutes =  ('0' + currentTime.getMinutes().toString(16)).slice(-2);
        hexhour = ('0' + currentTime.getHours().toString(16)).slice(-2);

        $clock.style.backgroundColor = `#${hexhour}${hexminutes}${hexseconds}`;
        $progressBar.style.width = `${(seconds / 60) * 14}rem`;
        $display.textContent = `${hour}:${minutes}:${seconds}`;
    }, 1000);

})();











//DOM is a Web API - not a part of JavaScript. JavaScript just uses DOM to access the documents and their elements. The DOM is a collection, not a language.
//A script allows you to use DOM directly in JS. It's a program run by a browser.
//DOM is used by the program to change the webpage (html) by manipulating documents representing things on that page.
/*
ex.) This DOM specifies the querySelectorAll method must return a list of all 'p' elements in the document:
const paragraphs = document.querySelectorAll('p');
*/
//All things that can be manipulated are objects. "document." represents the entire document itself, HTMLTableElement interface accesses HTML table objects, etc
//Every object within a document is a 'node' of some kind. 
//The 'element' is a data type based on 'node'. It refers to an element returned by DOM. ex.) document.createElement() returns an element that DOM creates.
//'nodeList' is an array of elements. 'document.querySelectorAll()' returns a nodeList.
//'attr' aka 'attribute' is a data type that acts as an object reference that shows a special interface for attributes. It's also a node.
/* Items in a nodeList are accessed in two ways:
1. list.item(1) is the one method on the nodeList object
2. list[1] uses the usual array syntax
*/
//Objects implement interfaces, sometimes several.
//'document and 'window' objects are used the most in DOM. 'window' represents something like the browser. 'document' is the root of the document itself.
//'


//This function pulls the time based off of the date and local time zones. The 'new' operator returns the current date and time.
/*
const clock = setInterval(() =>{
    const time = document.querySelector(".clock-display");
    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(hour < 10){
        hour = "0" + hour;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    time.textContent = `${hour}:${minutes}:${seconds}`;
})


let percentSec = seconds / 60;

let i = 0;
function move(){
    if (i == 0){
        i = 1;
        let elem = document.querySelector(".clock-progress-bar");
        let width = 1;
        let id = setInterval(frame, 1000);
        function frame (){
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            }else {
                width++;
                elem.style.width = width + "%";
            }
        }        
    }
}

/*Pulls the clock display


//Switchest the clock text
const switchTime = document.querySelector(".clock-display");
switchTime.addEventListener("click", function(){
    clockDisplay.style. = 
})


*/