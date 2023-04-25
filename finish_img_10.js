imgNum = 1
imgEl = document.getElementById('image')

b1 = document.getElementById('b1')
b2 = document.getElementById('b2')

b1.addEventListener('click', b1F)
b2.addEventListener('click', b2F)

des = document.getElementById('describtion')

descs = [
    'IKEA ER BEST',
    'JEG SKAL BLI MODELL IGJEN',
    'OG VI SKAL FAKTISK KJØPE TING',
    'tommel opp.',
    '(damn på denne tiden kunne jeg faktisk gå med den skjorta ute...)',
    'tommel opp.',
    'Jeg skal søren meg bli handyman når vi bor alene ass',
    'Sike jeg kommer garra til å bli håpløs',
    'Gleder meg skikkelig til å se på dette med deg :)',
    'KLARA!!!'
]

function b1F() {
    imgNum--
    if (imgNum == 0) imgNum = 10
    pack = imgEl.src.split('/')[imgEl.src.split('/').length-2]
    imgEl.src = 'img/'+pack+'/img'+String(imgNum)+'.jpg'
    des.innerHTML = descs[imgNum - 1]
}

function b2F() {
    imgNum++
    if (imgNum == 11) imgNum = 1
    pack = imgEl.src.split('/')[imgEl.src.split('/').length-2]
    imgEl.src = 'img/'+pack+'/img'+String(imgNum)+'.jpg'
    des.innerHTML = descs[imgNum - 1]
}