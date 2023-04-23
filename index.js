input = document.querySelector('#name')
button = document.querySelector("#button")
button.addEventListener('click', submit)

function submit() {
    if (input.value == 'Nice') {
        document.location.replace("finish_1_1.html")
    }
}