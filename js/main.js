//funcion auto invocada con promesa(async await), 
//para que se auto reproduzca al inicio de la pagina 
( async()=>{
    
const {value:nombre} = await Swal.fire({
        title: 'Bienvenido!',
        icon:'success',
        text:'Escribe tu nombre',
        padding:'3rem',
        confirmButtonColor:'teal',
        //input config
        input:'text',
        inputPlaceholder:'Nombre',
        inputValue:''
    });

    if (nombre) {
        Swal.fire({
            title:`Hola ${nombre}`,
            text:'Agrega tus tareas diarias',
            confirmButtonColor:'teal',
            padding:'3rem',
        });
    }

    let name = document.querySelector(".name");
     //name.textContent = nombre;
     if (!nombre) {
         name.textContent = "default user";
     } else {
        name.textContent = nombre;
        name.style.color = "white"
     }

})();


let input =  document.querySelector(".input")
let container = document.querySelector(".container") 
let botonAgregar = document.querySelector(".boton-agregar") 
//---------------------------------------------------------------
botonAgregar.addEventListener("click",chequearInput); 
//---------------------------------------------------
function chequearInput(){
    if (input.value == "") {                        
        /* alert("Escribi una Tarea"); */ 
        Swal.fire({
            title: 'Agrega una Tarea',
            icon:'warning',
            confirmButtonColor:'teal',
            footer:'<span class= "footerAlert">Es necesario escribir una tarea </span>',
            timer:"4000",
            timerProgressBar: true
        });
    } else {                                        
        new Item (input.value);
        input.value = "";
        Swal.fire({
            title: 'Tarea Agregada!',
           icon:'success',
           padding:'3rem',
           timer:"2000",
           timerProgressBar: true,
           showConfirmButton: false,
        })
    }
}  
//----------class Item------------------------------
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
      //2. -----------Trabajar Con Botones------------------
     let botonEditar = document.createElement("button");   
     botonEditar.innerHTML = '<i class="fas fa-lock"></i>';  
     botonEditar.classList.add("boton-editar");           

     let botonRemover = document.createElement("button");
     botonRemover.innerHTML = '<i class="fas fa-trash"></i>';
     botonRemover.classList.add("boton-remover"),
     //---Agregar elementos a la lista-------------------------------------------
     //2 botones y el input dentro del div1
     // y el div1 dentro del div class container
     div1.appendChild(inputItem)          
     div1.appendChild(botonEditar)         
     div1.appendChild(botonRemover)
     container.appendChild(div1)         
     //---------------Eventos--------------------------------------------------
     // ---Editar---
     botonEditar.addEventListener("click",function(){
     inputItem.disabled = !inputItem.disabled             
     if (true == inputItem.disabled){                      
     botonEditar.innerHTML = '<i class="fas fa-lock"></i>'}  
     else  {
        botonEditar.innerHTML = '<i class="fas fa-lock-open"></i>'}
    }) 
    
     botonRemover.addEventListener("click",function(){
     container.removeChild(div1);
    
     Swal.fire({
        title: 'Tarea Borrada!',
       icon:'success',
       padding:'3rem',
       timer:"2000",
       timerProgressBar: true,
       showConfirmButton: false,
    })
    })                     
      
    }
} 

 
  




















