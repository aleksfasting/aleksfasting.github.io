input = document.querySelector('#name')
button = document.querySelector("#button")
button.addEventListener('click', submit)

function submit() {
    if (input.value.toLowerCase() == 'mein shiza ko pasand karta hoon') {
        document.location.replace("finish_2.html")
    }
}