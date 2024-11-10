window.onload = initAll;

let timer, timerInterval, nextButtonCont;
let timerText
let timerIntervalOngoing = true
let timerTextHandler;

function initAll() {
    getAllElements();
    setAllActions();
}

function getAllElements() {

    timerText = document.getElementById("timer_text")
    timer = document.getElementById("timer");
    nextButtonCont = document.getElementById("next_button_cont");

}

function timerFunction() {
    if (timer.innerText === "0") {

        clearInterval(timerInterval)
        timerIntervalOngoing = false
        timerText.removeEventListener("click", timerTextHandler)
        return;
    }
    timer.innerText = +(timer.innerText) - 1
}

function setAllActions() {
    timerInterval = setInterval(timerFunction, 1000)
    timerTextHandler = function() {
        if (timerIntervalOngoing) {
            clearInterval(timerInterval)
            timerIntervalOngoing = false
            timer.setAttribute("contenteditable", true)
            timer.setAttribute("style", "color : tomato");
        } else {
            timerIntervalOngoing = true
            timerInterval = setInterval(timerFunction, 1000)
            timer.removeAttribute("style");
        }


    }
    timerText.addEventListener("click", timerTextHandler)
    let nextBtnKeyUpHandler = function() {
        if (nextButtonCont.innerText.toLowerCase() === "<button>next</button>") {
            nextButtonCont.innerHTML = ""
            nextButtonCont.setAttribute("contenteditable", false);
            nextButtonCont.removeEventListener("keyup", nextBtnKeyUpHandler)
            setTimeout(() => {
                nextButtonCont.innerHTML = `<button class="next_btn id="next_btn_EL">Next</button>`
            }, 500)
        }
    }
    nextButtonCont.addEventListener("keyup", nextBtnKeyUpHandler)
}