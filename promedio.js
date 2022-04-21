
let list =[];
let countList = document.getElementById("count-list");
let data = document.getElementById("list-number");
let result = document.getElementById("result");
let elements = document.getElementById("list-container");


function addList(){
     
    if(data.value != ""){
        elements.innerText="Los números en la lista son:" ;
        list.push(parseInt(data.value));
        countList.innerText = `Tu lista lleva: ${list.length} elementos`;
        
        list.forEach(element=>{
            elements.innerText+= "\n"+element  ;
        });

        elements.style.display="inline";
    }
    else{
       console.log("introduce un número válido");
    }
    calcularPromedio();
  
       
}
function clean(){
    list = [];
    countList.innerText = `La lista está vacía`;
    result.innerText = `No hay ningun elemento en la lista`;
    elements.style.display="none";
}

function calcularPromedio(){
    if(list.length>=1){
        const sumalist = list.reduce(
            function (valorAcumulado, nuevoElemento){
                return valorAcumulado + nuevoElemento;
            }
        );  
        promedio = sumalist/list.length
        result.innerText = `El promedio de la lista es: ${promedio}`;
        }
        else{
            result.innerText = `No hay ningun elemento en la lista`;
        }
}