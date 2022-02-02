var letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g"
]
function teste() {
    demoInput = document.getElementById("demoInput");
    demoLabel = document.getElementById("demoLabel");
    demoInput.addEventListener("keydown", function (key) {
        if (key.code == "Enter") {
            rightLetters = true
            demoInputValue = document.getElementById("demoInput").value
            if (isWord(demoInputValue)) {
                for (let i = 0; i < demoInputValue.length; i++) {
                    if (letters.includes(demoInputValue.charAt(i)) === false) {
                        rightLetters = false
                    }   
                }
                if (rightLetters) {
                    demoLabel.innerHTML = "Congrats, that word works!"
                    demoLabel.style.color = "green"
                } else {
                    demoLabel.innerHTML = "Uh oh, you can't use some of those letters!"
                    demoLabel.style.color = "red"
                }
            } else {
                demoLabel.innerHTML = "Not a real word!"
                demoLabel.style.color = "red"
            }

        }
    });
}