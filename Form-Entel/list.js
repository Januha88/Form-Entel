// Obtener los datos guardados en el localStorage
const savedFormData = JSON.parse(localStorage.getItem('saveFormData') || '[]');

// Crear un elemento para mostrar los datos y agregarlo al HTML
const formList = document.getElementById('formList');

savedFormData.forEach(function(formData){
    const listItem = document.createElement('li');
    const fullName = document.createElement('p');
    fullName.textContent = formData.fullName;
    const rut = document.createElement('p');
    rut.textContent = formData.rut;
    const patente = document.createElement('p');
    patente.textContent = formData.patente;
    const marca = document.createElement('p');
    marca.textContent = formData.marca;
    const modelo = document.createElement('p');
    modelo.textContent = formData.modelo;
    const color = document.createElement('p');
    color.textContent = formData.color;

    listItem.appendChild(fullName);
    listItem.appendChild(rut);
    listItem.appendChild(patente);
    listItem.appendChild(marca);
    listItem.appendChild(modelo);
    listItem.appendChild(color);

    formList.appendChild(listItem);
});