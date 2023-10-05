function media(){
    var tn1 = window.document.getElementById('txtn1')
    var tn2 = window.document.getElementById ('txtn2')
    var tn3 = window.document.getElementById ('txtn3')
    var res = window.document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var n3 = Number(tn3.value)
    var s = (n1 + n2 + n3) / 3
    res.innerHTML = `A média dos valores é igual a ${s}!`  
    }