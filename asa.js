function Calcular(){
    let a= parseFloat(document.getElementById('a').value)
    let b= parseFloat(document.getElementById('b').value)
    let c= parseFloat(document.getElementById('c').value)
    let res= document.querySelector('.res')
    res.innerHTML=''
    let delta = Math.pow (b,2) - 4 * a * c
    if(delta<0 || a ==0){
        res.innerHTML='Impossivel Calcular'
    }else{
    if(!isNaN(a)||!isNaN(b)||!isNaN(c)){
        let X1 =  (- b + Math.sqrt(delta)) /(2*a)
        let X2 =  (- b - Math.sqrt(delta)) /(2*a)
        res.innerHTML=`X1:${X1.toFixed(1)} ; X2:${X2.toFixed(1)}`
    }else{
        res.innerHTML='Falta dados'
    }}
function Limpar(){
    document.getElementById('a').value=""
    document.getElementById('b').value=""
    document.getElementById('c').value=""
    document.querySelector('.res').innerHTML="Resultado:"
}}
document.addEventListener('keypress', e => {
    if(e.key == 'Enter'){
        Calcular(); 
    }})
document.addEventListener('keydown', e => {
    if(e.key == 'Escape'){
        Limpar(); 
    }})