"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var input = document.querySelector(".input");
var container = document.querySelector(".container");
var botonAgregar = document.querySelector(".boton-agregar"); //---------------------------------------------------------------

botonAgregar.addEventListener("click", chequearInput); //---------------------------------------------------

function chequearInput() {
  if (input.value == "") {
    alert("Escribi una Tarea");
  } else {
    new Item(input.value);
    input.value = "";
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
        } else {
          botonEditar.innerHTML = '<i class="fas fa-lock-open"></i>';
        }
      });
      botonRemover.addEventListener("click", function () {
        container.removeChild(div1);
      });
    }
  }]);

  return Item;
}();