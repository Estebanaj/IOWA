var botonA = document.getElementById("botonA");
var botonB = document.getElementById("botonB");
var botonC = document.getElementById("botonC");
var botonD = document.getElementById("botonD");
var Blackcontainer = document.getElementById("Blackcontainer");
var Correctobajo = document.getElementById("Correctobajo");
var Incorrectobajo = document.getElementById("Incorrectobajo");
var Correctobueno = document.getElementById("Correctobueno");
var Incorrectobueno = document.getElementById("Incorrectobueno");
var botonAa = document.getElementById("botonAa");
var botonBb = document.getElementById("botonBb");
var botonCc = document.getElementById("botonCc");
var botonDd = document.getElementById("botonDd");
var visible = false;
const dinero = document.getElementById("dinero");
let total = 2000;
var newCell1 = document.createElement('td');
var newCell2 = document.createElement('td');
var newCell3 = document.createElement('td');


botonA.addEventListener("click", function () {

    var row = document.createElement("tr");
  
    // Añade las celdas a la fila
    var dineroAnteriorCell = document.createElement("td");
    var apuestaCell = document.createElement("td");
    var dineroActualCell = document.createElement("td");
    var dineroGanadoCell = document.createElement("td");

    var randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 1 || randomNumber == 2) {
        Correctobajo.style.display = "block";
        visible = true;
        dineroAnteriorCell.innerHTML = total;
        total = total + 50;
        dinero.innerHTML = total;

    } else {
        Incorrectobajo.style.display = "block";
        visible = true;
        total = total - 50;
        dineroAnteriorCell.innerHTML = total;
        dinero.innerHTML = total;
    }
    botonA.style.display = "none";
    botonB.style.display = "none";
    botonC.style.display = "none";
    botonD.style.display = "none";
    botonAa.style.display = "block";
    botonBb.style.display = "block";
    botonCc.style.display = "block";
    botonDd.style.display = "block";

    // Crea una nueva fila
   
  
    apuestaCell.innerHTML = 50;
    dineroActualCell.innerHTML = total;
    dineroGanadoCell.innerHTML = 50;
  
    row.appendChild(dineroAnteriorCell);
    row.appendChild(apuestaCell);
    row.appendChild(dineroActualCell);
    row.appendChild(dineroGanadoCell);
  
    // Añade la fila al cuerpo de la tabla
    document.querySelector("#tabla").appendChild(row);
    

});

botonB.addEventListener("click", function () {

    var randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 1 || randomNumber == 2) {
        Correctobajo.style.display = "block";
        visible = true;
        total = total + 50;
        dinero.innerHTML = total

    } else {
        Incorrectobajo.style.display = "block";
        visible = true;
        total = total - 50;
        dinero.innerHTML = total
    }
    botonA.style.display = "none";
    botonB.style.display = "none";
    botonC.style.display = "none";
    botonD.style.display = "none";
    botonAa.style.display = "block";
    botonBb.style.display = "block";
    botonCc.style.display = "block";
    botonDd.style.display = "block";
});

botonC.addEventListener("click", function () {
    var randomNumber = Math.floor(Math.random() * 2);
    if (randomNumber == 1) {
        Correctobueno.style.display = "block";
        visible = true;
        total = total + 100;
        dinero.innerHTML = total

    } else {
        Incorrectobueno.style.display = "block";
        visible = true;
        total = total - 150;
        dinero.innerHTML = total
    }
    botonA.style.display = "none";
    botonB.style.display = "none";
    botonC.style.display = "none";
    botonD.style.display = "none";
    botonAa.style.display = "block";
    botonBb.style.display = "block";
    botonCc.style.display = "block";
    botonDd.style.display = "block";
});

botonD.addEventListener("click", function () {
    var randomNumber = Math.floor(Math.random() * 2);
    if (randomNumber == 1 ) {
        Correctobueno.style.display = "block";
        visible = true;
        total = total + 100;
        dinero.innerHTML = total

    } else {
        Incorrectobueno.style.display = "block";
        visible = true;
        total = total - 150;
        dinero.innerHTML = total
    }
    botonA.style.display = "none";
    botonB.style.display = "none";
    botonC.style.display = "none";
    botonD.style.display = "none";
    botonAa.style.display = "block";
    botonBb.style.display = "block";
    botonCc.style.display = "block";
    botonDd.style.display = "block";
});

//los otros botones

botonAa.addEventListener("click", function () {
    Correctobajo.style.display = "none";
    Incorrectobajo.style.display = "none";
    Correctobueno.style.display = "none";
    Incorrectobueno.style.display = "none";
    botonA.style.display = "block";
    botonB.style.display = "block";
    botonC.style.display = "block";
    botonD.style.display = "block";
    botonAa.style.display = "none";
    botonBb.style.display = "none";
    botonCc.style.display = "none";
    botonDd.style.display = "none";
});
botonBb.addEventListener("click", function () {
    Correctobajo.style.display = "none";
    Incorrectobajo.style.display = "none";
    Correctobueno.style.display = "none";
    Incorrectobueno.style.display = "none";
    botonA.style.display = "block";
    botonB.style.display = "block";
    botonC.style.display = "block";
    botonD.style.display = "block";
    botonAa.style.display = "none";
    botonBb.style.display = "none";
    botonCc.style.display = "none";
    botonDd.style.display = "none";
});

botonCc.addEventListener("click", function () {
    Correctobajo.style.display = "none";
    Incorrectobajo.style.display = "none";
    Correctobueno.style.display = "none";
    Incorrectobueno.style.display = "none";
    botonA.style.display = "block";
    botonB.style.display = "block";
    botonC.style.display = "block";
    botonD.style.display = "block";
    botonAa.style.display = "none";
    botonBb.style.display = "none";
    botonCc.style.display = "none";
    botonDd.style.display = "none";

});

botonDd.addEventListener("click", function () {
    Correctobajo.style.display = "none";
    Incorrectobajo.style.display = "none";
    Correctobueno.style.display = "none";
    Incorrectobueno.style.display = "none";
    botonA.style.display = "block";
    botonB.style.display = "block";
    botonC.style.display = "block";
    botonD.style.display = "block";
    botonAa.style.display = "none";
    botonBb.style.display = "none";
    botonCc.style.display = "none";
    botonDd.style.display = "none";
});
function addRow() {
    // Crea una nueva fila
    var row = document.createElement("tr");
  
    // Añade las celdas a la fila
    var dineroAnteriorCell = document.createElement("td");
    var apuestaCell = document.createElement("td");
    var dineroActualCell = document.createElement("td");
    var dineroGanadoCell = document.createElement("td");
  
    dineroAnteriorCell.innerHTML = 10;
    apuestaCell.innerHTML = 90;
    dineroActualCell.innerHTML = 40;
    dineroGanadoCell.innerHTML = 80;
  
    row.appendChild(dineroAnteriorCell);
    row.appendChild(apuestaCell);
    row.appendChild(dineroActualCell);
    row.appendChild(dineroGanadoCell);
  
    // Añade la fila al cuerpo de la tabla
    document.querySelector("#tabla").appendChild(row);
  }

