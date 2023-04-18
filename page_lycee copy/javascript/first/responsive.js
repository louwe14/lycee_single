export {wi, he, support, first_load }
var wi = window.innerWidth;
var he = window.innerHeight;
function get_support() {
    wi = window.innerWidth;
    he = window.innerHeight;
    if (wi>992) {
        var support = "laptop"
    }
    else if (wi>768) {
        var support = "tablet"
    }
    else {
        var support = "phone"
    }
    return ([support, wi, he])
};
var support;

function responsive_laptop() {
    document.getElementById("phone_menu").style.cssText = "display:none;";
    console.log("resp lap")
};


function responsive_phone() {
    let pre_left = 0.7 * document.getElementById("presentation_left").clientHeight;
    let pre_right = 1.2 * document.getElementById("presentation_right_container").clientHeight;
    document.getElementById("lycee_presentation").style.height = `${pre_left + pre_right}px`;
    let pre_left_2 = 1.1 * document.getElementById("container_spe_right").clientHeight;
    let pre_right_2 = 1.1 * document.getElementById("container_spe_left").clientHeight;
    document.getElementById("specialites_container").style.height = `${pre_left_2 + pre_right_2}px`;
    document.getElementById("Titre").textContent = "JDA";
}



function first_load() {
    support = get_support()[0];
    if (support == "phone") {
        responsive_phone();
    }
    if (support == "laptop") {
        responsive_laptop();
    }
    window.addEventListener('resize', (resize_event) => {
        support = get_support()[0];
        setTimeout(() => {
            location.reload();
        }, 400)
    })
}
first_load()