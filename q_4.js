input = document.querySelector('#name')
button = document.querySelector("#button")
button.addEventListener('click', submit)

function submit() {
    if (input.value.toLowerCase() == 'ja') {
        document.location.replace("finish_4.html")
    }
    else if (input.value.toLowerCase() == 'nei') {
        document.write('bruh... ukult. (ja jeg brukte document write)')
    }
}