function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('resultado')
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] faltam Dados!')
    }
    else{
       res.innerHTML = 'Contando...<br>'
       let i = Number(ini.value)
       let f = Number(fim.value)
       let p = Number(passo.value)
       if (p <= 0){
           alert('Passo Inválido! Considerando Passo 1')
           p = 1
       }
       if(i < f){ //contagem crescente
          for (let c = i; c <= f; c += p){
              res.innerHTML += `${c} \u{1F449}`
           } 
       }else{ //contagem decrescente
           for(let c = 1; c >= f; c -= p ){
               res.innerHTML += `${c} \u{1F449}`
           }
       }
       res.innerHTML += '\u{1F3c1}'
    }
} 