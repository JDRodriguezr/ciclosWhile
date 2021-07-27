document.getElementById("igual").addEventListener("click", evaluar);
function evaluar(){
  try{
  document.calc.txt.value = eval(calc.txt.value);
  }
  catch(error){
  console.log(typeof a);
  document.calc.txt.value = '';
  while(true){
    input = prompt("Ingrese 'numero' para confirmar que sabe utilizar la calculadora (no usar 2 operadores seguidos) ");
    if (input == "numero")
     {
        break;
     }
  }

  }
}
