"use strict";

let btn = document.querySelector(".over"),
  btn2 = document.querySelector(".btn2"),
  link = document.querySelector("a"),
  over = document.querySelector(".over"),
  hiden2 = document.getElementsByClassName("hiden2"),
  animate = document.querySelector(".animate"),
  elem = document.querySelector("body");
console.log(elem);

btn.addEventListener("click", function () {

  hiden2[0].style.visibility = "visible";
  hiden2[0].style.display = "block";
  btn.style.opacity = "0.25";
  btn.style.transition = "1s";

});

btn2.addEventListener("click", function () {
  hiden2[0].style.visibility = "hidden";
  btn.style.opacity = "1";
  btn.style.transition = "1s";

});