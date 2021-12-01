function carregar(){
var msg = window.document.querySelector('div#msg')
var img = window.document.querySelector('img.imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12){
    img.src = 'imagens/manha1.png'
    document.body.style.backgroun = 'skyblue'
}
else if (hora >= 12 && hora < 18){
    img.src = 'imagens/tarde1.png'
    document.body.style.background = 'chocolate'
}
else {
    img.src = 'imagens/noite1.png'
    document.body.style.background = 'gray'
}
}