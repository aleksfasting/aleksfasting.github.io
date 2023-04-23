input = document.querySelector('#name')
button = document.querySelector("#button")
button.addEventListener('click', submit)

function submit() {
    if (input.value.toLowerCase() == 'mein shiza ko pesant karta hein') {
        document.location.replace("finish_2.html")
    }
}