// Obtener el formulario y el botón de guardar
const form = document.getElementById("form");

// Crear un objeto para almacenar los datos del formulario
const formData = {
    fullName: document.getElementById('fullName').value,
    rut: document.getElementById('rut').value,
    patente: document.getElementById('patente').value,
    marca: document.getElementById('marca').value,
    modelo: document.getElementById('modelo').value,
    color: document.getElementById('color').value,
};

// Agregar un evento al botón de guardar
const sendBtn = document.getElementById("btnEnviar").addEventListener("click", function(event){
    event.preventDefault(); //evita que se envíe el formulario

    // Guardar los datos en el localStorage
   const saveFormData = JSON.parse(localStorage.getItem('saveFormData') || '[]');
    saveFormData.push(formData);
    localStorage.setItem('saveFormData', JSON.stringify(saveFormData));

    // Redirigir al usuario a la página de lista de formulario
    window.location.href = './list.html';
});

