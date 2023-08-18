const time_first_stage = function () {
  setTimeout(() => {
    document
      .querySelector(".bunny_leg_right")
      .classList.add("myAnimationClass");
    document.querySelector(".bunny_leg_left").classList.add("myAnimationClass");
    document.querySelector(".bunny_body").classList.add("myAnimationClass");
    document.querySelector(".left").classList.add("myAnimationClass");
    document.querySelector(".right").classList.add("myAnimationClass");
    document.querySelector(".bottom").classList.add("myAnimationClass");
    document
      .querySelector(".bunny_head_earright")
      .classList.add("myAnimationClass");
    document
      .querySelector(".bunny_head_earleft")
      .classList.add("myAnimationClass");
    document.querySelector(".bunny_head").classList.add("myAnimationClass");
    document.querySelector(".hand-shape").classList.add("myAnimationClass");
    document
      .querySelector(".angel-crown-shape")
      .classList.add("myAnimationClass");
    document.querySelector("#btn_send").style.display = "none";
  }, 15000);
};

const time_second_stage = function () {
  setTimeout(() => {
    document.querySelector(".bunny_head_eyebrowright").style.display = "none";
    document.querySelector(".bunny_head_eyebrowleft").style.display = "none";
    document.querySelector(".bunny_head_eyeright").style.display = "none";
    document.querySelector(".bunny_head_eyeleft").style.display = "none";
    document.querySelector(".bunny_evil_eyeright").style.display = "block";
    document.querySelector(".bunny_evil_eyeleft").style.display = "block";
    document.querySelector(".bunny_head_hornright").style.display = "block";
    document.querySelector(".bunny_head_hornleft").style.display = "block";
    document
      .querySelector(".bunny_leg_right")
      .classList.remove("myAnimationClass");
    document
      .querySelector(".bunny_leg_left")
      .classList.remove("myAnimationClass");
    document.querySelector(".bunny_body").classList.remove("myAnimationClass");
    document.querySelector(".left").classList.remove("myAnimationClass");
    document.querySelector(".right").classList.remove("myAnimationClass");
    document.querySelector(".bottom").classList.remove("myAnimationClass");
    document
      .querySelector(".bunny_head_earright")
      .classList.remove("myAnimationClass");
    document
      .querySelector(".bunny_head_earleft")
      .classList.remove("myAnimationClass");
    document.querySelector(".bunny_head").classList.remove("myAnimationClass");
    document.querySelector(".hand-shape").classList.remove("myAnimationClass");
    document.querySelector("#btn_send").style.display = "none";
    document.querySelector(".demon-crown-shape").style.display = "block";
    document.querySelector(
      ".bunny_background"
    ).style.backgroundImage = `url("./images/hell.jpg")`;
  }, 45000);
};

const lighting_animation = document.getElementById("light-blind");
document.getElementById("btn_send").addEventListener("click", function () {
  lighting_animation.style.animation = "lightAnimation 15s linear alternate 4";
  time_first_stage();
  time_second_stage();
});
