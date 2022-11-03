
function verificar(){
    var data = new Date()
    var anoA = data.getFullYear()
    var anoN = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    if(anoN.value.length == 0 || anoN.value > anoA){
        alert('[ERRO] Verifique os Dados e tente novamente!')
    }else{
        var sex = document.getElementsByName('rd')
        var idade = anoA - anoN.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(sex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'bebe-homem1.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'jovem-homem1.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'homem-adulto1.png')
            }else{
                //idoso
                img.setAttribute('src', 'idoso1.png')
            }
        } else {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'bebe-mulher1.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'jovem-mulher1.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'mulher-foto1.png')
            }else{
                //idoso
                img.setAttribute('src', 'idosa-foto1.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Voce é ${genero} e tem ${idade} Anos`
        res.appendChild(img)
        
    }
}