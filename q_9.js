input = document.querySelector('#name')
button = document.querySelector("#button")
button.addEventListener('click', submit)

function submit() {
    if (input.value.toLowerCase() == 'mystic') {
        document.location.replace("finish_9.html")
    }
}