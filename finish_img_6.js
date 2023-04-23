imgNum = 1
imgEl = document.getElementById('image')

b1 = document.getElementById('b1')
b2 = document.getElementById('b2')

b1.addEventListener('click', b1F)
b2.addEventListener('click', b2F)

des = document.getElementById('describtion')

descs = [
    'Meg på Helsfyr som ikke forstår bussene. (Jeg skal kjøpe headset til deg :) )',
    'Meg som fant bussen min',
    'Meg som busser gjennom Alna. Det er ikke veldig fint.',
    'Utenfor elkjøp for å kjøpe headset.',
    'Meg bli fortalt av de som jobber på elkjøp at jeg ikke bestilte fra elkjøp, men Power. Det var awkward. Power er på andre siden av veien. (Strekfigur for illustrasjon)',
    'Meg på vei hjem. Med Headset.',
    'Meg på Nydalen for å hente sykkel. Men døra er låst og jeg kommer ikke inn. Jeg later som at jeg er Eric André.',
    'Meg på Rema for å hente russesaker. De ligger i postkassa.',
    'Meg programmere denne collagen. Innse at videoene jeg filmet måtte være bilder istedenfor :(',
    'Meg innse at jeg egt skulle kjøpe et annet headset. Jeg har kødda til mye i dag. Vi kan bytte det hvis du vil'
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