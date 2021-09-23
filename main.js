let input =  document.querySelector(".input")
let container = document.querySelector(".container") 
let botonAgregar = document.querySelector(".boton-agregar") 
//---------------------------------------------------------------
botonAgregar.addEventListener("click",chequearInput); 
//---------------------------------------------------
function chequearInput(){
    if (input.value == "") {                        
        alert("Escribi una Tarea");
    } else {                                        
        new Item (input.value);
        input.value = ""
    }
} 
//----------------------------------------
class Item {
    constructor(nuevatarea){
   this.crearDiv (nuevatarea)}
   
     crearDiv(){
     let inputItem = document.createElement("input") 
     inputItem.type = "text"                        
     inputItem.value =  input.value                 
     inputItem.disabled = "true"                  
     inputItem.classList.add("itemInput")         
     let div1 = document.createElement("div")    
     div1.classList.add("Item")                 
      //2. Trabajar Con Botones
     let botonEditar = document.createElement("button");   
     botonEditar.innerHTML = '<i class="fas fa-lock"></i>';  
     botonEditar.classList.add("boton-editar");           

     let botonRemover = document.createElement("button");
     botonRemover.innerHTML = '<i class="fas fa-trash"></i>';
     botonRemover.classList.add("boton-remover"),
     //---Agregar elementos a la lista-------------------------------------------
     div1.appendChild(inputItem)          
     div1.appendChild(botonEditar)         
     div1.appendChild(botonRemover)
     container.appendChild(div1)         
     //-----------------------------------------------------------------
     botonEditar.addEventListener("click",function(){
     inputItem.disabled = !inputItem.disabled             
     if (true == inputItem.disabled){                      
     botonEditar.innerHTML = '<i class="fas fa-lock"></i>'}  
     else  {
        botonEditar.innerHTML = '<i class="fas fa-lock-open"></i>'}
    }) 
     botonRemover.addEventListener("click",function(){
     container.removeChild(div1)})                     

    }
} 

 
  




















