buscar = document.getElementById("btnBuscar");
document.addEventListener("keydown", opcion);
var teclas= {ENTER: 13};
let spamBtn = document.getElementById("btnSpamm");
let marca = document.getElementById("marca");
let stop = document.getElementById("btnStopSpamm");
let a =false;


document.getElementById("btnBuscar").addEventListener("click", capital);
document.getElementById("btnSpamm").addEventListener("click", spampls);
document.getElementById("btnStopSpamm").addEventListener("click", stopSpam);
/*buscar.onclick = capital();*/

function spampls() {
 
  console.log("Spam pls");
  spamBtn.style.color = "blue";
  marca.style.visibility = "visible";
  marca.style.fontSize = "50px";
  while(a==false){
    input = prompt("hola");
    if (input==1){
      a==false;
      break;
    }
    else{
      input = prompt("hola");
    }
  }

}
function stopSpam() { }



function capital() {
  console.log("se ejecuto la funcion capital");
let eleccion = document.getElementById("myText").value;
let input = eleccion.toLowerCase(); 

switch (input) {
  case "amazonas":
      document.getElementById("respuesta").textContent = "La capital de " + eleccion + " es Leticia";
    break;
    case "antioquia":
      document.getElementById("respuesta").textContent = "La capital de " + eleccion + " es Medellin";
    break;
    case "arauca":
      document.getElementById("respuesta").textContent = "La capital de " + eleccion + " es Arauca";
    break;
    case "atlantico":
      document.getElementById("respuesta").textContent = "La capital de " + eleccion + " es Barranquilla";
    break;
    case "bolivar":
      document.getElementById("respuesta").textContent = "La capital de " + eleccion + " es Cartagenta de indias";
    break;
    case "boyaca":
      document.getElementById("respuesta").textContent = "La capital de " + eleccion + " es Tunja";
    break;
    case "caldas":
      document.getElementById("respuesta").textContent = "La capital de " + eleccion + " es Manizales";
    break;
    case "caqueta":
      document.getElementById("respuesta").textContent = "La capital de " + eleccion + " es Florencia";
    break;
    case "casanare":
      document.getElementById("respuesta").textContent = "La capital de " + eleccion + " es Yopal";
    break;
    case "cauca":
      document.getElementById("respuesta").textContent = "La capital de " + eleccion + " es Popayan";
    break;
    case "cesar":
      document.getElementById("respuesta").textContent = "La capital de " + eleccion + " es Valledupar";
    break;
    case "choco":
      document.getElementById("respuesta").textContent = "La capital de " + eleccion + " es Quibdo";
    break;
    case "cordoba":
      document.getElementById("respuesta").textContent = "La capital de " + eleccion + " es Monteria";
    break;
    case "cundinamarca":
      document.getElementById("respuesta").textContent = "La capital de " + eleccion + " es Bogota";
    break;
    case "guaviare":
      document.getElementById("respuesta").textContent = "La capital de " + eleccion + " es San Jose del Guaviare";
    break;
    case "huila":
      document.getElementById("respuesta").textContent = "La capital de " + eleccion + " es Neiva";
    break;
    case "guajira":
      document.getElementById("respuesta").textContent = "La capital de " + eleccion + " es Riohacha";
    break;
    case "magadalena":
      document.getElementById("respuesta").textContent = "La capital de " + eleccion + " es Santa Maria";
    break;
    case "meta":
      document.getElementById("respuesta").textContent = "La capital de " + eleccion + " es Villavicencio";
    break;
    case "nariño":
      document.getElementById("respuesta").textContent = "La capital de " + eleccion + " es Pasto";
    break;
    case "norte de santander":
      document.getElementById("respuesta").textContent = "La capital de " + eleccion + " es San Jose de Cucuta";
    break;
    case "putumayo":
      document.getElementById("respuesta").textContent = "La capital de " + eleccion + " es Mocoa";
    break;
    case "risaralda":
      document.getElementById("respuesta").textContent = "La capital de " + eleccion + " es Pereira";
    break;
    case "san andres y providencia":
      document.getElementById("respuesta").textContent = "La capital de " + eleccion + " es San Andrés";
    break;
    case "santander":
      document.getElementById("respuesta").textContent = "La capital de " + eleccion + " es Bucaramanga";
    break;
    case "sucre":
      document.getElementById("respuesta").textContent = "La capital de " + eleccion + " es Sincelejo";
    break;
    case "tolima":
      document.getElementById("respuesta").textContent = "La capital de " + eleccion + " es Ibague";
    break;
    case "valle del cauca":
      document.getElementById("respuesta").textContent = "La capital de " + eleccion + " es Cali";
    break;
    case "vaupes":
      document.getElementById("respuesta").textContent = "La capital de " + eleccion + " es Mitu";
    break;
    case "vichada":
      document.getElementById("respuesta").textContent = "La capital de " + eleccion + " es Puerto Carreño";
    break;

    default:
      document.getElementById("respuesta").textContent = "Por favor ingresa el nombre del departamento otra vez sin tildes";
      while(true){
        a= input = prompt("Ingrese 'Colombia' para confirmar que esta en el sitio adecuado");
        if(a=="Colombia"){
          break;
        }
        
      }
      break;
}
}
function opcion(evento){
  console.log(evento);
  if(evento.keyCode == teclas.ENTER){ capital();}
}
