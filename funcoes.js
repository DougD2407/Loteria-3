var numEsc = []
var numSort =[]
function sortNumeros(){
    for(let i = 0; i < 6; i++){
   let num = Math.ceil(Math.random() * 60)
    console.log(num)
    if(!numSort.includes(num)){
    numSort[i]=num;
    }else{
        i=i-1;
    }
    }
    document.getElementById("sorteados").innerHTML = numSort;
    contarAcertos()
}
function lerNumero(value,pos){

let num = Number(value)

if(num < 1){
    alert("Numero não pode ser 0 ou negativo seu otário! Digita essa coisa certa irmão!!!!")
} else if(num > 60){
    alert("Numeros não podem ser maiores que 60, tu é burro ou oque???")
}else if(numEsc.includes(num)){
    alert("Cara... tu é muito burro, o numero tá repetido! Arruma isso ae!!!")
}else{
    numEsc[pos]=num
console.log(numEsc)
}
}

function contarAcertos(){
    let cont = 0
    numEsc.forEach(function(value, index){
        if(numSort.includes(value)){
            cont++;
        }
    })
document.getElementById("acertos").innerHTML = cont;
}