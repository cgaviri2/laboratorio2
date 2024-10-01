const eventNombreInput = document.getElementById('event-nombre');
const eventN1Input = document.getElementById('event-nota1');
const eventN2Input = document.getElementById('event-nota2');
const eventList = document.getElementById('events');
const eventForm = document.getElementById('event-form'); // Corregido el nombre del formulario

// Manejo de envío a través del formulario
eventForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Evitar que la página se recargue

    // Obtener valores del formulario
    const eventNombre = eventNombreInput.value;
    const eventN1 = eventN1Input.value;
    const eventN2 = eventN2Input.value;

    // Validar que los campos no estén vacíos
    if (eventNombre === '' || eventN1 === '' || eventN2 === '') {
        alert('¡Por favor completa todos los campos!');
        return;
    }

    function promedio(eventN1, eventN2) {
        return (eventN1 * 0.4) + (eventN2 * 0.6);
    }

    // Crear el elemento en la lista
    const li = document.createElement('li');
    li.innerHTML = `<span>${eventNombre} - ${eventN1} - ${eventN2} - ${promedio(eventN1, eventN2)}</span> <button class="delete-btn">Eliminar</button>`;

    // Agregar el evento a la lista
    eventList.appendChild(li);

    // Limpiar el formulario
    eventForm.reset();

    // Eliminar eventos de la lista
    li.querySelector('.delete-btn').addEventListener('click', function() {
        li.remove();
    });
});