let pickerElements;
pickerElements = document.querySelectorAll(".color-picker-element");

let colorPickedBox = document.querySelector(".color-picker-selected");

for (let i = 0; i < pickerElements.length; i++) {
   /* Metto il gestore sia al click che al mouseover perchè 
   l'evento mouseover non c'è nel mobile */
   pickerElements[i].onclick = pickerElements[i].onmouseover = gestisciColorePickerElement;
}

function gestisciColorePickerElement(e) {
   let elementoSelezionato = e.target;
   let colorPicked;
   colorPicked = window.getComputedStyle(elementoSelezionato).getPropertyValue("background-color");
   colorPickedBox.style.backgroundColor = colorPicked;
}
