// Array para almacenar las notas
let notes = [];

// Función para agregar una nota
function addNote() {
  // Obtener el texto de la nota desde el input
  const noteText = document.getElementById("noteInput").value;

  // Crear un objeto nota
  const note = {
    text: noteText,
    date: new Date()
  };

  // Agregar la nota al array
  notes.push(note);

  // Limpiar el input
  document.getElementById("noteInput").value = "";

  // Actualizar la lista de notas
  updateNoteList();
}

// Función para eliminar la última nota
function removeLastNote() {
  // Verificar si hay notas en el array
  if (notes.length > 0) {
    // Eliminar la última nota
    notes.pop();

    // Actualizar la lista de notas
    updateNoteList();
  }
}

// Función para actualizar la lista de notas
function updateNoteList() {
  // Obtener el elemento ul de la lista de notas
  const noteList = document.getElementById("noteList");

  // Limpiar la lista
  noteList.innerHTML = "";

  // Recorrer el array de notas y agregar cada una como un elemento de lista
  for (let i = 0; i < notes.length; i++) {
    const note = notes[i];

    const li = document.createElement("li");
    li.innerHTML = note.text + " - " + note.date.toLocaleString();
    noteList.appendChild(li);
  }
}