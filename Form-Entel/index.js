
// Obtener el formulario y el botón de guardar
const form = documentElementById("form");
// se crea la variable y se agrega un evento al botón de guardar
const sendBtn = documentElementById("btnEnviar").addEvenListener("click", function(event){
    event.preventDefault(); //evita que se envíe el formulario

    //crear un objeto para almacenar los valores del formulario

    const formData = {

        fullName: getElementById('fullName').value,
        rut: getElementById('rut').value,
        patente: getElementById('patente').value,
        marca: getElementById('marca').value,
        modelo: getElementById('modelo').value,
        color: getElementById('color').value,
    }

    //guardar los datos en el localStorage

    const saveFormData = JSON.parse(localStorage.getItem('saveFormData') || '[]');
    saveFormData.push(formData);
    localStorage.setItem('saveFormData', JSON.stringify(saveFormData));

    //redirigir al usuario a la página de lista de formulario
    window.location.href = './list.html'
})

//Agregar los nuevos datos al arreglo de datos almacenados

recordsData.push(data);

//guardar los datos actualizados en el local storage 
localStorage.setItem("formData", JSON.stringify(recordsData));

//mostrar los datos en la lista
const listForm = document.getElementById





   