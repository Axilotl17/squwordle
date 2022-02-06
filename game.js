const timeTotal = document.getElementById('timeTotal')
function updateLabel(ID, text) {
    labelID = ID + "Label"
    document.getElementById(labelID).innerHTML = document.getElementById(ID).value + text
}
timeTotal.addEventListener("change", function(e) {
    if (e.target.value != "") {
        document.getElementById(e.target.id + "Label").innerHTML = e.target.value + " seconds"
    } else {
        document.getElementById(e.target.id + "Label").innerHTML = '60 seconds'
    }
})
function game() {
    
}
