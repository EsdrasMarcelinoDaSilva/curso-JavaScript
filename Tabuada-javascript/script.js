function tabuada(){
    let n = document.getElementById('txtn')
    let t = document.querySelector('select#seltab')
    if(n.value.length == 0){
        alert('POR FAVOR DIGITE UM NUMERO!')
    }else{
        let num = n.value
        let c = 1
        t.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            t.appendChild(item)
            c++
        }
    }
}