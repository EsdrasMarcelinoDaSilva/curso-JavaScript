function mostrar(){

var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora São ${hora} Horas`
if(hora >= 0 && hora < 12){
    img.src = 'foto-manha1.png'
    document.body.style.background = '#cda22e'
}else if(hora >= 12 && hora < 18){
    img.src = 'foto-tarde1.png'
    document.body.style.background = '#f96303'
}else{
    img.src = 'foto-noite1.png'
    document.body.style.background = '#33302d'

}
}