input = document.querySelector('#name')
button = document.querySelector("#button")
button.addEventListener('click', submit)

function submit() {
    if (input.value == 'IKEA') {
        document.location.replace("finish_10.html")
    }
}