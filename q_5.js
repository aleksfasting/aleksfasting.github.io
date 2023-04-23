input = document.querySelector('#name')
button = document.querySelector("#button")
button.addEventListener('click', submit)

function submit() {
    if (input.value.toLowerCase() == 'rue du chateau') {
        document.location.replace("finish_5.html")
    }
}