var amigos=[];
let btnEliminar = document.querySelector("#btnEliminas");
let btnGuardar = document.querySelector("#btnGuardar");
let btnCancelar = document.querySelector("#btnCancelar");
let lista = document.querySelector(".listaAmigos");
let formulario = document.querySelector("#formulario");

pintar();

function limpiar(){
    formulario[0].value="";
    formulario[1].value="";
    formulario[2].value="";
    formulario[3].value="";
};

function pintar(){
    if (amigos.length>0){
        lista.innerHTML="";
        amigos.forEach((contacto) =>{
            let amigo = document.createElement("div");
            amigo.innerHTML = `<p> ${contacto.nombre} </p> <button class="muestraDetalles"><input type="hidden" value="${contacto.telefono}"/>Detalles</button>
            <button class="btnEliminar" id="btnEliminar"> <input type="hidden" value="${contacto.telefono}"/>Eliminar </button>`;
            lista.appendChild(amigo);
        });
        let botones = document.getElementsByClassName("muestraDetalles");
        for (let i = 0; i < botones.length; i++){
            const element = botones[i];
            element.addEventListener("click",()=>{
                showDetalles(element.children[0].value)
            });
        }
    }
    else{
        lista.innerHTML = "<h2>No tenemos amigos.</h2>";
    }
}
function showDetalles(tel){
    let detalles = document.getElementById("detallesAmigo");
    let amigo = amigos.find(a=>{
        if(a.telefono==tel)
        {
            return a;
        }
    });
    detalles.innerHTML=  `<img src="${amigo.foto}" alt="">
    <h3>${amigo.nombre}</h3>
    <p><span>Telefono:</span>${amigo.telefono}</p>
    <p><span>Correo:</span>${amigo.correo}</p>
    <button id="cerrardetalles">cerrar</button>`;
    detalles.classList.remove("oculto");
    cerrardetalles();
}
function cerrardetalles(){
    let cerrar = document.getElementById("detallesAmigo");
    cerrar.addEventListener("click", quitar =>{
        let detalles = document.getElementById("detallesAmigo");
        detalles.classList.add("oculto");
    });

}
btnEliminar.addEventListener("click",(event)=>{
    let Eliminar = document.getElementById("listaAmigos");
    if (p.nombre = formulario[0]){

  
            var removed = amigos.splice(1, 1);
            event.preventDefault();
        }
 });



btnCancelar.addEventListener("click",(event)=>{
  limpiar();
    event.preventDefault();

});
btnGuardar.addEventListener("click",(event)=>{

    if(formulario[0].value == "" ){
        alert("Rellena todos los campos");
        event.preventDefault();
    }
        else if(formulario[1].value  == "" ){
            alert("Rellena todos los campos");
            event.preventDefault();
        }  
            else if(formulario[2].value  == "" ){
                alert("Rellena todos los campos");
                event.preventDefault();
            }   
                else if(formulario[3].value  == "" ){
                    alert("Rellena todos los campos"); 
                    event.preventDefault();   
            }else if(formulario[0,1,2,3].value !== ""){


    let contacto={
        nombre:formulario["nombre"].value,
        telefono:formulario["telefono"].value,
        correo:formulario["correo"].value,
        foto:formulario["foto"].value
        
    };
    amigos.push(contacto);
    limpiar();
    pintar();
    event.preventDefault();
}
});



