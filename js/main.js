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
         name.textContent = "default User";
         name.style.color = "white";
     } else {
        name.textContent = nombre;
        name.style.color = "gold";
        localStorage.setItem("user",nombre);
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
        Swal.fire({
            title: 'Tarea Agregada!',
            icon:'success',
            padding:'3rem',
            timer:"2000",
            timerProgressBar: true,
            showConfirmButton: false,
        });
        localStorage.setItem("tarea",input.value)
        input.value = "";

        
    }
}  
//----------class Item------------------------------



class Item {
    constructor(nuevatarea){
        
   this.crearDiv (nuevatarea)
    }
   
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
     botonEditar.innerHTML = '<i class="fas fa-lock"></i>';
     Swal.fire({
        title: 'Tarea Editada!',
       icon:'success',
       padding:'3rem',
       timer:"2000",
       timerProgressBar: true,
       showConfirmButton: false,
          });
    }  
     else  {
        botonEditar.innerHTML = '<i class="fas fa-lock-open"></i>';
       
    }
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


setTimeout(() => {
    Swal.fire({
        title:'Publicidad',
        text:'Camara Canon',
        imageUrl:"data:image/jpeg;base64,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",
        confirmButtonText:'<a href="https://listado.mercadolibre.com.ar/camara-canon" target=_blank>comprar</a>',
        showCloseButton: true,
        position:"bottom-end"

    });
 }, 10000);





















