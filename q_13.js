input = document.querySelector('#name')
button = document.querySelector("#button")
button.addEventListener('click', submit)

function submit() {
    if (input.value.toLowerCase() == 'bæsja under bordet') {
        document.location.replace("finish_13.html")
    }
}