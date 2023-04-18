export {roll_header, change_roll}
import {he} from '../first/responsive.js'

var on_roll = false
var direction = 0;
function direction_function(self) {
    direction = self.direction
}
function roll_header() {
    ScrollTrigger.create({
        start: "top center",
        end: "bottom center",
        onUpdate: self => direction_function(self)
    });

    document.addEventListener("scroll", (scroll_event) => {
        var tl_scroll_duration = 0
        if (!on_roll) {
            on_roll = true
            if (direction == 1){
                let tl_scroll_timelinez = gsap.timeline({paused:true});
                tl_scroll_timelinez.add("start")
                tl_scroll_timelinez.to("#Titre", {y:-0.1157*he, duration:0.4, ease: Power2.easeIn}, "start")
                .to("#ham-menu", {y:-0.1157*he, duration:0.4, ease: Power2.easeIn}, "start")
                .to("header",{y:-0.1157*he, duration:0.4, ease: Power2.easeIn}, "start")
                tl_scroll_timelinez.play();
                tl_scroll_duration = tl_scroll_timelinez.duration()*1000;
            } else {
                let tl_scroll_timelinea = gsap.timeline({paused:true});
                tl_scroll_timelinea.add("start")
                tl_scroll_timelinea.to("#Titre", {y:0, duration:0.4, ease: Power2.easeOut}, "start")
                .to("#ham-menu", {y:0, duration:0.4, ease: Power2.easeOut}, "start")
                .to("header",{y:0, duration:0.4, ease: Power2.easeOut}, "start")
                tl_scroll_timelinea.play();
                tl_scroll_duration = tl_scroll_timelinea.duration()*1000;
            }
            setTimeout(() => {
                    on_roll = false
                }, tl_scroll_duration)
        }
    });
}

function change_roll() {
    on_roll = !on_roll
}
roll_header()