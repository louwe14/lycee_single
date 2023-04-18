import {tl, tl_phone, tl_0, tl_1, tl_2, tl_phone_0, tl_phone_1, tl_phone_2} from './menu_animation.js'
import {support} from '../first/responsive.js'
import {change_roll} from '../first/header_roll.js'

/*------------------------------------------------------commun------------------------------------------------------*/

document.getElementById("ham-menu").addEventListener("click", () => {
    change_menu_state()
})
document.getElementById("menu-laptop-etablissement").addEventListener("mouseenter", () => {
    gsap.fromTo("#menu-laptop-fleche0",{opacity:0},{opacity:1})
})
document.getElementById("menu-laptop-etablissement").addEventListener("mouseleave", () => {
    gsap.fromTo("#menu-laptop-fleche0",{opacity:1},{opacity:0})
})
document.getElementById("menu-laptop-lycee").addEventListener("mouseover", () => {
    gsap.fromTo("#menu-laptop-fleche1",{opacity:0},{opacity:1})
})
document.getElementById("menu-laptop-lycee").addEventListener("mouseout", () => {
    gsap.fromTo("#menu-laptop-fleche1",{opacity:1},{opacity:0})
})
document.getElementById("menu-laptop-college").addEventListener("mouseover", () => {
    gsap.fromTo("#menu-laptop-fleche2",{opacity:0},{opacity:1})
})
document.getElementById("menu-laptop-college").addEventListener("mouseout", () => {
    gsap.fromTo("#menu-laptop-fleche2",{opacity:1},{opacity:0})
})
document.getElementById("menu-laptop-etablissement").addEventListener("click", () => {
    change_state_laptop_fall(0)
})
document.getElementById("menu-laptop-lycee").addEventListener("click", () => {
    change_state_laptop_fall(1)
})
document.getElementById("menu-laptop-college").addEventListener("click", () => {
    change_state_laptop_fall(2)
})
document.getElementById("menu-laptop-blur-opened").addEventListener("click", () => {
    change_menu_state()
})
document.getElementById("thema_1").addEventListener("click", () => {
    change_state_phone_fall(0)
})
document.getElementById("thema_2").addEventListener("click", () => {
    change_state_phone_fall(1)
})
document.getElementById("thema_3").addEventListener("click", () => {
    change_state_phone_fall(2)
})

function disableScroll() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    window.onscroll = function() {
        window.scrollTo(scrollLeft, scrollTop);
    };
};
function enableScroll() {
    window.onscroll = function() {};
};

var menu_state = 'closed';
function change_menu_state() {
    change_roll()
    if (menu_state == 'closed') {
        menu_state = 'opened';
        if (support == "phone") {
            open_phone_menu();
        }
        else {
            open_laptop_menu();
            get_pressed();
        }
        disableScroll();
    } else {
        menu_state = 'closed';
        if (support == "phone") {
            close_phone_menu();
        }
        else {
            close_laptop_menu();
            delete_pressed();
        }
        enableScroll();
    }
};
/*-----------------------------------------------------laptop-----------------------------------------------------*/

function open_laptop_menu() {
    tl.play();
}

var state_laptop = [false, false, false]
function change_state_laptop_fall(n) {
    if (n==0) {
        tl_1.reverse()
        tl_2.reverse()
        if (state_laptop[n] == false) {
            tl_0.play()
        }
        else {
            tl_0.reverse()
        }
        state_laptop[1] = false
        state_laptop[2] = false
    }
    if (n==1) {
        tl_0.reverse()
        tl_2.reverse()
        if (state_laptop[n] == false) {
            tl_1.play()
        }
        else {
            tl_1.reverse()
        }
        state_laptop[0] = false
        state_laptop[2] = false
    }
    if (n==2) {
        tl_0.reverse()
        tl_1.reverse()
        if (state_laptop[n] == false) {
            tl_2.play()
        }
        else {
            tl_2.reverse()
        }
        state_laptop[0] = false
        state_laptop[1] = false
    }
    state_laptop[n] = !state_laptop[n]
}
function close_laptop_menu() {
    var duration = NaN;
    if (state_laptop[0]) {
        tl_0.reverse().progress(0.5)
        duration= tl_0.duration() * 0.5
    }
    if (state_laptop[1]) {
        tl_1.reverse().progress(0.5)
        duration= tl_1.duration() * 0.5
    }
    if (state_laptop[2]) {
        tl_2.reverse().progress(0.5)
        duration= tl_2.duration() * 0.5
    }
    state_laptop = [false, false, false]
    setTimeout(() => {
        tl.reverse().progress(0.5);
    }, duration*1000)
}

function get_pressed() {
    document.addEventListener('keydown', ge);    
};

function delete_pressed(event) {
    document.removeEventListener('keydown', ge)
};

function ge(event) {
    if(event.key == "Escape") {
        change_menu_state();
    };
};



/*-----------------------------------------------------phone-----------------------------------------------------*/

function open_phone_menu() {
    tl_phone.play();
    gsap.set("#phone_menu_container", {display: 'block'});
};

var state_phone = [false, false, false]
function change_state_phone_fall(n) {
    if (n==0) {
        tl_phone_1.reverse()
        tl_phone_2.reverse()
        if (state_phone[n] == false) {
            tl_phone_0.play()
        }
        else {
            tl_phone_0.reverse()
        }
        state_phone[1] = false
        state_phone[2] = false
    }
    if (n==1) {
        tl_phone_0.reverse()
        tl_phone_2.reverse()
        if (state_phone[n] == false) {
            tl_phone_1.play()
        }
        else {
            tl_phone_1.reverse()
        }
        state_phone[0] = false
        state_phone[2] = false
    }
    if (n==2) {
        tl_phone_0.reverse()
        tl_phone_1.reverse()
        if (state_phone[n] == false) {
            tl_phone_2.play()
        }
        else {
            tl_phone_2.reverse()
        }
        state_phone[0] = false
        state_phone[1] = false
    }
    state_phone[n] = !state_phone[n]
}
function close_phone_menu() {
    var duration = NaN;
    if (state_phone[0]) {
        tl_phone_0.reverse().progress(0.5)
        duration= tl_phone_0.duration() * 0.5
    }
    if (state_phone[1]) {
        tl_phone_1.reverse().progress(0.5)
        duration= tl_phone_1.duration() * 0.5
    }
    if (state_phone[2]) {
        tl_phone_2.reverse().progress(0.5)
        duration= tl_phone_2.duration() * 0.5
    }
    state_phone = [false, false, false]
    setTimeout(() => {
        tl_phone.reverse();
    }, duration*1000)
}