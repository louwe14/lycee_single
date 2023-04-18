var hei = document.getElementById("presentation_right_container").clientHeight;
var hei_2 = document.getElementById("lycee_presentation").clientHeight;
var height_final;
console.log(hei_2<hei && window.innerWidth>768);
if (hei_2<hei && window.innerWidth>768) {
  height_final = 1.3*hei;
  var hei_r = 0.15*hei;
  document.getElementById("spacer").style.height = hei_r.toString() + "px";
  document.getElementById("div_img").style.cssText = "width:40vw;height:70vh;object-fit:cover;margin-top:0vh;margin-left:5vw;";
  gsap.to("#div_img", {
    ease: "none",
    markers:true,
    scrollTrigger: {
      trigger: "#div_img",
      scrub: true,
      pin: true,
      start: `center center`,
      end: () => "+=" + h + "px",
    },
  });
}
else {
  height_final = hei_2
}
document.getElementById("lycee_presentation").style.height = `${height_final}px`;
var h = document.getElementById("presentation_right_container").clientHeight - document.getElementById("div_img").clientHeight;
