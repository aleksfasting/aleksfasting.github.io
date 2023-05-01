input = document.querySelector('#name')
button = document.querySelector("#button")
button.addEventListener('click', submit)

function submit() {
    if (input.value.toLowerCase() == 'tatakii') {
        document.write("Kjempebra Shiza!")
    }
}