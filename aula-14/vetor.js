let valores = [9,8,6,4,3]
console.log(valores[4])
/*for(let pos = 0;pos < valores.length;pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/
valores.sort()
for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}