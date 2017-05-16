function agregar(){ 

	 

	/* guardo tarea ingresada por usuario y limpio dicha área*/
	var tareas = document.getElementById('tarea').value;
	document.getElementById("tarea").value = "";

	/*valida que text area no esté vacía al presionar el botón aceptar*/
    if (tareas == null || tareas.length == 0) {
    	alert("¡Error! Debe ingresar una tarea");
    	return false;
    } 

	/*creamos un contenedor para guardar las nuevas tareas*/
	var cont = document.getElementById("contenedor");

	/* nuevos nodos elementos*/
	var nuevasTareas = document.createElement("div");
	var textoNuevaTarea = document.createTextNode("tareas");
	var elementoContenedor = document.createElement("span");

	/* Asignamos padreas a los nodos creados*/
	elementoContenedor.appendChild(textoNuevaTarea);
	nuevasTareas.appendChild(elementoContenedor);
	cont.appendChild(nuevasTareas);

	/*creamos checkbox e iconos, le damos atributos y clases*/
	var chck = document.createElement("input");
	chck.type = "checkbox";
	chck.setAttribute("class", "check");
	var basura = document.createElement("span");
	basura.classList.add("fa", "fa-trash-o");
	var cora = document.createElement("span");
	cora.classList.add("fa", "fa-heart");
    
    /*asignamos padres a los nodos creados*/
    nuevasTareas.appendChild(chck);
    nuevasTareas.appendChild(basura);
    nuevasTareas.appendChild(cora);

    /*evento para cuando el usuario haga click para eliminar o agregar tachado*/
    chck.addEventListener("click", function(){

    	elementoContenedor.classList.toggle("tachado");
    })
	
	/*removemos el icono basurero al hacer click sobre este*/
	basura.addEventListener("click", function(){
		cont.removeChild(nuevasTareas);
	})

	/*función click para el corazón + asignar clase red para el corazón*/
    cora.addEventListener("click", function(){
    	cora.classList.toggle("red");
    })



}







