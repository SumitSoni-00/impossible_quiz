window.onload = initAll;

let howAreYou, btns, yesBtn, buttonsId, coderQuestion;

let howAreYouStatus = false,
    howAreYouDone = false;

function getAllElements() {
    howAreYou = document.getElementById("how_are_you");
    btns = document.getElementsByClassName("btns");
    yesBtn = document.getElementById("yes_btn");
    buttonsId = document.getElementById("buttons_id");
    coderQuestion = document.getElementById("coder_question")
}
let contentEditableHandler = function() {
    howAreYou.setAttribute("contenteditable", true);
    howAreYouStatus = true

}

function setAllActions() {

    howAreYou.addEventListener("click", contentEditableHandler)
    for (const iterator of btns) {
        iterator.addEventListener("click", function() {
            let result = howAreYouCheck()
            if (result === "NOT_EDITABLE") {
                howAreYou.classList.add("focus")
                setTimeout(() => {
                    howAreYou.classList.remove("focus")
                    howAreYou.classList.add("nothing")
                }, 1500)
            } else if (result === "NOT_CHANNGED") {
                howAreYou.classList.add("wrong")
                setTimeout(() => {
                    howAreYou.classList.remove("wrong")
                    howAreYou.classList.add("nothing")
                }, 1500)
            } else {
                howAreYou.removeEventListener("click", contentEditableHandler)
                howAreYou.setAttribute("contenteditable", false);
                howAreYouDone = true
            }



        })
    }


    yesBtn.addEventListener("click", function() {

        if (howAreYouDone) {
            buttonsId.style.display = "none"
            howAreYou.setAttribute("contenteditable", false);
            setTimeout(() => {
                coderQuestion.style.display = "block"
            }, 500)

        }
    })
}

function howAreYouCheck() {
    if (!howAreYouStatus) {

        return "NOT_EDITABLE"
    } else {
        let text = howAreYou.innerText
        let what = text.toLowerCase().trim() === "how are you?"
        return what ? "NOT_CHANNGED" : "CHANGED"

    }
}

function initAll() {
    getAllElements();
    setAllActions();
}