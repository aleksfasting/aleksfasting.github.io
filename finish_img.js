imgNum = 1
imgEl = document.getElementById('image')

b1 = document.getElementById('b1')
b2 = document.getElementById('b2')

b1.addEventListener('click', b1F)
b2.addEventListener('click', b2F)

function b1F() {
    imgNum--
    if (imgNum == 0) imgNum = 5
    imgEl.src = 'img/'+imgEl.src.split('/')[10]+'/img'+String(imgNum)+'.jpg'
}

function b2F() {
    imgNum++
    if (imgNum == 6) imgNum = 1
    imgEl.src = 'img/'+imgEl.src.split('/')[10]+'/img'+String(imgNum)+'.jpg'
}