let num = [5,3,6,9,2]
console.log(num)
num[5] = 8
num.push(4)
console.log(num)
let pos = num.indexOf(10)
if(pos == -1){
    console.log('o valor não foi encontrado')
}else{
    console.log(`O valor 9 esta na posição ${pos}`)
}
