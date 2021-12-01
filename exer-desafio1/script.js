function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (nasc.value.length == 0 || Number(nasc.value) > ano){
        alert('[ERRO] Preecha os Dados Corretamente!')
    }
    else{
        var sexo = document.getElementsByName('radsex')
        var idade = ano - Number(nasc.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'fotos')
        if (sexo[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagens/menino.png')
            }else if (idade < 21){
                img.setAttribute('src', 'imagens/jovem.png')
            }else if (idade < 50){
                img.setAttribute('src', 'imagens/homem.png')
            }else{
                img.setAttribute('src', 'imagens/idoso.png')
            }
        }
        else if (sexo[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagens/menina.png')
            }else if (idade < 21){
                img.setAttribute('src', 'imagens/jovem-m.png')
            }else if (idade < 50){
                img.setAttribute('src', 'imagens/mulher.png')
            }else{
                img.setAttribute('src', 'imagens/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos` 
        res.appendChild(img)
    }
}