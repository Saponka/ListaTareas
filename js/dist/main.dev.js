"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//funcion auto invocada con promesa(async await), 
//para que se auto reproduzca al inicio de la pagina 
(function _callee() {
  var _ref, nombre, name;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(Swal.fire({
            title: 'Bienvenido!',
            icon: 'success',
            text: 'Escribe tu nombre',
            padding: '3rem',
            confirmButtonColor: 'teal',
            //input config
            input: 'text',
            inputPlaceholder: 'Nombre',
            inputValue: ''
          }));

        case 2:
          _ref = _context.sent;
          nombre = _ref.value;

          if (nombre) {
            Swal.fire({
              title: "Hola ".concat(nombre),
              text: 'Agrega tus tareas diarias',
              confirmButtonColor: 'teal',
              padding: '3rem'
            });
          }

          name = document.querySelector(".name"); //name.textContent = nombre;

          if (!nombre) {
            name.textContent = "default";
            name.style.color = "white";
          } else {
            name.textContent = nombre;
            name.style.color = "gold";
          }

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
})();

var input = document.querySelector(".input");
var container = document.querySelector(".container");
var botonAgregar = document.querySelector(".boton-agregar"); //---------------------------------------------------------------

botonAgregar.addEventListener("click", chequearInput); //---------------------------------------------------

function chequearInput() {
  if (input.value == "") {
    /* alert("Escribi una Tarea"); */
    Swal.fire({
      title: 'Agrega una Tarea',
      icon: 'warning',
      confirmButtonColor: 'teal',
      footer: '<span class= "footerAlert">Es necesario escribir una tarea </span>',
      timer: "4000",
      timerProgressBar: true
    });
  } else {
    new Item(input.value);
    input.value = "";
    Swal.fire({
      title: 'Tarea Agregada!',
      icon: 'success',
      padding: '3rem',
      timer: "2000",
      timerProgressBar: true,
      showConfirmButton: false
    });
  }
} //----------class Item------------------------------


var Item =
/*#__PURE__*/
function () {
  function Item(nuevatarea) {
    _classCallCheck(this, Item);

    this.crearDiv(nuevatarea);
  }

  _createClass(Item, [{
    key: "crearDiv",
    value: function crearDiv() {
      var inputItem = document.createElement("input");
      inputItem.type = "text";
      inputItem.value = input.value;
      inputItem.disabled = "true";
      inputItem.classList.add("itemInput");
      var div1 = document.createElement("div");
      div1.classList.add("Item"); //2. -----------Trabajar Con Botones------------------

      var botonEditar = document.createElement("button");
      botonEditar.innerHTML = '<i class="fas fa-lock"></i>';
      botonEditar.classList.add("boton-editar");
      var botonRemover = document.createElement("button");
      botonRemover.innerHTML = '<i class="fas fa-trash"></i>';
      botonRemover.classList.add("boton-remover"), //---Agregar elementos a la lista-------------------------------------------
      //2 botones y el input dentro del div1
      // y el div1 dentro del div class container
      div1.appendChild(inputItem);
      div1.appendChild(botonEditar);
      div1.appendChild(botonRemover);
      container.appendChild(div1); //---------------Eventos--------------------------------------------------
      // ---Editar---

      botonEditar.addEventListener("click", function () {
        inputItem.disabled = !inputItem.disabled;

        if (true == inputItem.disabled) {
          botonEditar.innerHTML = '<i class="fas fa-lock"></i>';
          Swal.fire({
            title: 'Tarea Editada!',
            icon: 'success',
            padding: '3rem',
            timer: "2000",
            timerProgressBar: true,
            showConfirmButton: false
          });
        } else {
          botonEditar.innerHTML = '<i class="fas fa-lock-open"></i>';
        }
      });
      botonRemover.addEventListener("click", function () {
        container.removeChild(div1);
        Swal.fire({
          title: 'Tarea Borrada!',
          icon: 'success',
          padding: '3rem',
          timer: "2000",
          timerProgressBar: true,
          showConfirmButton: false
        });
      });
    }
  }]);

  return Item;
}();
/* Swal.fire({
    title:`Publicidad`,
    text:'comprar',
});
   */