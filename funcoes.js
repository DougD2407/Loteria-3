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
    console.log(numSort)
}
function lerNumero(value,pos){
if(value < 1){
    alert("Numero não pode ser 0 ou negativo seu otário! Digita essa coisa certa irmão!!!!")
} else if(value > 60){
    alert("Numeros não podem ser maiores que 60, tu é burro ou oque???")
}else if(numEsc.includes(value)){
    alert("Cara... tu é muito burro, o numero tá repetido! Arruma isso ae!!!")
}else{
    numEsc[pos]=value
console.log(numEsc)
}
}