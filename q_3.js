const items = document.getElementsByClassName('item');

for (i = 0; i < 6; i++) {
    items[i].addEventListener('dragstart', dragStart);
}

const button = document.getElementById('button')
button.addEventListener('click', check)

function check() {
    ans = document.getElementById('placement').children
    
    cor = true

    for (i = 0; i < 6; i++) {
        div = ans[i].children[0]
        if (div) {
            if (div.id != i + 1) {
                cor = false
            }
        }
        else {
            cor = false
        }
    }

    if (cor) {
        document.location.replace("finish_3.html")
    }
}

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
}


/* drop targets */
const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
});


function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragLeave(e) {
    e.target.classList.remove('drag-over');
}

function drop(e) {
    e.target.classList.remove('drag-over');

    // get the draggable element
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);

    // add it to the drop target
    e.target.appendChild(draggable);

    // display the draggable element
    draggable.classList.remove('hide');
}