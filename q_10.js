input = document.querySelector('#name')
button = document.querySelector("#button")
button.addEventListener('click', submit)

function submit() {
    if (input.value.toLowerCase() == 'css') {
        document.location.replace("finish_10.html")
    }
}