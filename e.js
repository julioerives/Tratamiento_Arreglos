var datos = [
    { nombre:"Julio",calificaciones:[10,9,9,10,9],matricula:"1122150066"}
];
var profe =  {nombre: "Juan Carlos",Alumnos :[]};

var bandera1 = false;
var bandera2 = false;
// ----------------------------------------------------------Funcion mostrar Personas---------------------------------------------------
function show(personas){
    let a=0;
    var ul = document.querySelector("#mostrar");
    ul.innerHTML="";
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var li4 = document.createElement("li");
    li1.textContent ="Nombre: "+ personas.nombre;
    li2.textContent ="Matricula: "+ personas.matricula;
    li4.textContent ="Calificaciones: "
    personas.calificaciones.forEach(element => {
        li4.textContent = li4.textContent+ " [ "+element+ " ] ";
        a+= element;
    });
    li3.textContent = "Calificacion fianl: "+a/ personas.calificaciones.length;
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    if (bandera1) {
        bandera1 = !bandera1;
        showP();
    }
}
//----------------------------------------------------------------Funcion agregar alumnos-------------------------------------------------
function agregar(){
    let variable="";
    var nombre = document.querySelector("#Nombre").value;
    var matricula = document.querySelector("#Matricula").value;
    var califonas = document.querySelector("#Califonas").value;
    if (califonas){
        var califonasA =[];
    var personas;
    if (nombre == "") nombre = "Nombre no ingresado";
    if(matricula == "") matricula= "Matricula no ingresada";
    for(let i = 0; i<=califonas.length; i++){
        if(califonas[i] ==="," || califonas[i]==" "){
            califonasA.push(parseFloat(variable));
            variable="";
        }else{
            variable+=califonas[i];
        }
       
    }
    variable.replace(" ", "")
      califonasA.push(parseFloat(variable))
    califonasA= califonasA.filter(function(valor) {
        return !isNaN(valor);
      });
    personas = {
        nombre: nombre,
        calificaciones: califonasA,
        matricula: matricula
    }
    datos.push(personas);
    show(personas);
    console.log(variable)
    console.log(califonasA)
    }else{
        window.alert("Ingrese sus califonas porfavor")
    }

}
//--------------------------------------------------------------Funcion mostrar alumno cuando se registra-------------------------------------------
function showP(){
    var personas = document.querySelector("#personasp");
    personas.innerHTML="";
    bandera1= !bandera1;
    if(bandera1){
        for (let index = 0; index < datos.length; index++) {
            var pN = document.createElement("p");
               var variableA=0;
                var a ="";
                let hola =datos[index].calificaciones.length
                var b;
                for (let index2 = 0; index2 < hola; index2++) {
                    a = a+` ${datos[index].calificaciones[index2]} `
                    variableA+= parseFloat(datos[index].calificaciones[index2])
                    b=datos[index].calificaciones.length;
                }
                
                pN.textContent = "Nombre: "+datos[index].nombre+ " Matricula: "+datos[index].matricula+ " Calificaciones: "+a+ " Promedio final "+ (variableA/b);
                personas.appendChild(pN);
                console.log()
            
           }
    }else{
        personas.innerHTML="";
    }
}
//-----------------------------------------------------------Funcion agregar alumno al profesor por matricula---------------------------------------
function profesor(){
    let a = false;
    var matriculaA = document.querySelector("#alumno").value;
    var error = document.querySelector("#error");
    error.innerHTML="";
    for (const element of datos){
        if (element.matricula == matriculaA){
            profe.Alumnos.push(matriculaA);
            a = !a;
            break;
        }
    }
    if (!a){
        error.style.color ="red"
        error.textContent ="No Encontrado";
    }else{ error.textContent="Encontrado :)"; error.style.color ="black";}
    console.log(profe.Alumnos);
    if(bandera2){
        bandera2=!bandera2;
        mostrarA();
    }
}
//---------------------------------------------------------Fuuncion mostrarmatricula de los alumnos del profe----------------------------------------------------
function mostrarA(){
    var AlumnosPR = document.querySelector("#alumnosM");
    AlumnosPR.innerHTML="";
     bandera2 = !bandera2;
    console.log(bandera2);
    if (bandera2){
        if (!profe.Alumnos){
            AlumnosPR.innerHTML="No hay alumnos";
        }else{
            profe.Alumnos.forEach(element => {
                var li= document.createElement("li");
                li.textContent = element;
                AlumnosPR.appendChild(li);
            });
        }
    }else AlumnosPR.innerHTML="";
}