let num = document.querySelector('input#num')
let list = document.querySelector('select#numero')
let res = document.querySelector('div#res') 
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function inlist(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}


function addNum() {
    if(isNumero(num.value) && !inlist(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        list.appendChild(item)
    }else{
        alert('Valor inválido ou ja encontrado na Lista!')
    }
    num.value = ''
    num.focus()
}
function calculo(){
    if(valores.length == 0){
        alert('Adicione Valores antes de finalizar!')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }
        media = soam / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao Todo Temos ${tot} numeros cadastrados</p>`
        res.innerHTML += `<p> O Maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O Menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores Temos ${soma}</p>`
        res.innerHTML += `<p>A Média dos valores digitados é ${media}</p>`
    }
}