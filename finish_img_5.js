imgNum = 1
imgEl = document.getElementById('image')

b1 = document.getElementById('b1')
b2 = document.getElementById('b2')

b1.addEventListener('click', b1F)
b2.addEventListener('click', b2F)

des = document.getElementById('desc')

descs = [
    'Deg i rue du chateau',
    'Deg ved fossen i Nice',
    'Stemmer det Shiza; det er en foss...',
    'Den ville utsikten fra togstasjonen i Monaco',
    'Deg som catcha meg i å ta instagram worthy bilder av deg.',
    'Utsikten etter en enorm miskalkulasjon av en gåtur fra vår side.',
    'Casinoet fra Biler 2. (Og den filmen til Selena Gomez i guess (den Grimaldi og alt det der))',
    'Du som sitter og chiller'
]

function b1F() {
    imgNum--
    if (imgNum == 0) imgNum = 8
    imgEl.src = 'img/'+imgEl.src.split('/')[10]+'/img'+String(imgNum)+'.jpg'
    des.innerHTML = descs[imgNum-1]
}

function b2F() {
    imgNum++
    if (imgNum == 9) imgNum = 1
    imgEl.src = 'img/'+imgEl.src.split('/')[10]+'/img'+String(imgNum)+'.jpg'
    des.innerHTML = descs[imgNum-1]
}