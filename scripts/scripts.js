var moonState = document.getElementById("sub-start-section");
var prepareState = document.getElementById("prepare-section");
var aboutInfo = document.getElementById("about-section");
var stat = document.getElementById("stat-section");
var special = document.getElementById("special-section");
var count = 0;
var counted = false;
let intervalId;

window.addEventListener("scroll", function () {
  var divTop = moonState.getBoundingClientRect().top;
  var aboutTop = aboutInfo.getBoundingClientRect().top;
  var statTop = stat.getBoundingClientRect().top;
  var specialTop = special.getBoundingClientRect().top;
  var ufo_1_movement = screen.width + 10;

  if (specialTop < 0) {
    entrance.classList.add("entrance-animation-class");
  }

  if (divTop <= 0) {
    document.querySelector(".moon-zone").style.position = "fixed";
    document.querySelector(".mountain").style.position = "absolute";
    document.querySelector(".credit").style.display = "flex";
    document.querySelector(".credit").style.opacity = "1";
    document.getElementById("ufo-one").style.position = "absolute";
    document.getElementById("ufo-one").style.left =
      ufo_1_movement.toString() + "px";
    document.getElementById("ufo-two").style.position = "absolute";
    document.getElementById("ufo-two").style.right =
      ufo_1_movement.toString() + "px";
    document.getElementById("tree-layer-2").style.bottom = "0px";
    document.getElementById("start-section").style.paddingTop = "150px";
  } else {
    document.querySelector(".moon-zone").style.position = "unset";
    document.querySelector(".credit").style.display = "none";
    document.querySelector(".credit").style.opacity = "0";
    document.getElementById("ufo-one").style.left = "-72px";
    document.getElementById("ufo-two").style.right = "-72px";
    document.querySelector(".mountain").style.position = "fixed";
    document.getElementById("tree-layer-2").style.bottom = "-500px";
  }

  if (aboutTop <= 200) {
    document.getElementById("bg-parallax").style.display = "block";
  } else {
    document.getElementById("bg-parallax").style.display = "none";
  }

  if (aboutTop <= 350) {
    console.log("active");
    document.querySelector(".about-contain").style.opacity = "1";
    document.querySelector(".credit").style.display = "none";
    document.querySelector(".moon").style.display = "none";
  } else {
    document.querySelector(".credit").style.display = "flex";
    document.querySelector(".about-contain").style.opacity = "0";
    document.querySelector(".moon").style.display = "block";
  }

  if (statTop <= 300) {
    intervalId = setInterval(startCount, 10);
  }

  if (statTop >= this.screen.height) {
    count = 0;
  }

  if (specialTop <= 200) {
    document.querySelector(".sp-contain").style.opacity = 1;
  } else {
    document.querySelector(".sp-contain").style.opacity = 0;
  }
});

const startCount = () => {
  if (count === 100) {
    clearInterval(intervalId);
  } else {
    count++;
    document.getElementById("counter-1").innerHTML = count;
    document.getElementById("counter-2").innerHTML = count;
    document.getElementById("counter-3").innerHTML = count;
    document.getElementById("counter-4").innerHTML = count;
    document.getElementById("counter-5").innerHTML = count;
    document.getElementById("counter-6").innerHTML = count;
  }
};
