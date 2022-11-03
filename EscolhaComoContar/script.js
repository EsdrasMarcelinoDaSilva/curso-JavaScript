function iniciar(){
    var ini = document.querySelector('input#inicio')
    var fim = document.querySelector('input#final')
    var p = document.querySelector('input#passo')
    var res = document.getElementById('res')
    if(ini.value.length == 0 || fim.value.length == 0 || p.value.length == 0){
        res.innerHTML = ' IMPOSSIVEL CONTAR!!'
        alert('[ERRO] VERIFIQUE OS DADOS!!')
    }else {
        res.innerHTML = 'Contando:'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var ps = Number(p.value)
        if(ps <= 0){
            alert('PASSO INVALIDO! CONSIDERANDO PASSO 1')
            ps = 1
        }
        if(i < f){
            for(var c = i; c <= f; c += ps){
                res.innerHTML += `${c} \u{1F449}`
            }
        }else {
            for(var c = i; c >= f; c -= ps ){
                res.innerHTML += `${c} \u{1F449}`
            }
        }

    }res.innerHTML += `\u{1F3C1}`
}