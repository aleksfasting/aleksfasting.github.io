imgNum = 1
imgEl = document.getElementById('image')

b1 = document.getElementById('b1')
b2 = document.getElementById('b2')

b1.addEventListener('click', b1F)
b2.addEventListener('click', b2F)

pack = imgEl.src.split('/')[imgEl.src.split('/').length-2]

function b1F() {
    imgNum--
    if (imgNum == 0) imgNum = 5
    imgEl.src = 'img/'+pack+'/img'+String(imgNum)+'.jpg'
}

function b2F() {
    imgNum++
    if (imgNum == 6) imgNum = 1
    imgEl.src = 'img/'+pack+'/img'+String(imgNum)+'.jpg'
}