//Solution:
(function () {
  "use strict"; //give an iffy that limits scope

  const $display = document.querySelector(".clock-display");
  const $progressBar = document.querySelector(".clock-progress-bar");
  const $clock = document.querySelector(".clock");

  let isHovering = false;

  //   Listens for the mouse to hover over the clock and will call the isHovering function
  $clock.addEventListener("mouseover", function () {
    isHovering = true;
  });
  //   When the mouse isn't hovering over the clock, isHovering won't run
  $clock.addEventListener("mouseout", function () {
    isHovering = false;
  });

  //   Function creates a new time on an interval of 1000ms
  setInterval(function () {
    const currentTime = new Date();
    let seconds, minutes, hour;
    let hexseconds, hexminutes, hexhour;

    if (isHovering) {
      seconds = ("0" + currentTime.getSeconds().toString(16)).slice(-2);
      minutes = ("0" + currentTime.getMinutes().toString(16)).slice(-2);
      hour = ("0" + currentTime.getHours().toString(16)).slice(-2);
    } else {
      seconds = ("0" + currentTime.getSeconds()).slice(-2);
      minutes = ("0" + currentTime.getMinutes()).slice(-2);
      hour = ("0" + currentTime.getHours()).slice(-2);
    }
    //toString turns it into a string and base 16 for hexadecimal
    hexseconds = ("0" + currentTime.getSeconds().toString(16)).slice(-2);
    hexminutes = ("0" + currentTime.getMinutes().toString(16)).slice(-2);
    hexhour = ("0" + currentTime.getHours().toString(16)).slice(-2);

    $clock.style.backgroundColor = `#${hexhour}${hexminutes}${hexseconds}`;
    $progressBar.style.width = `${(seconds / 60) * 14}rem`;
    $display.textContent = `${hour}:${minutes}:${seconds}`;
  }, 1000);
})();
