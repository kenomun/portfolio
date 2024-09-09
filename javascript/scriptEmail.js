const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.innerHTML = 'Enviando mensaje...';

   const serviceID = 'service_fkt2qdj';
   const templateID = 'template_5pe1ljg';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      alert('Mensaje enviado');
      btn.innerHTML = 'Enviar mensaje <i class="fa-solid fa-paper-plane"></i>';
      successMessage.innerText = 'Mensaje enviado con éxito'; // Muestra el mensaje de éxito
      successMessage.style.display = 'block'; // Muestra el mensaje de éxito
      successMessage.style.color = 'green'; // Establece el color verde para el mensaje de éxito

      document.getElementById('form').reset();
      // Oculta el mensaje de éxito después de 5 segundos
      setTimeout(function() {
        successMessage.style.display = 'none';
      }, 5000);
    }, (err) => {
      alert(JSON.stringify(err));
      btn.innerHTML = 'Enviar mensaje <i class="fa-solid fa-paper-plane"></i>';
      errorMessage.innerText = 'No se pudo enviar el mensaje debido a un error del servidor'; // Muestra el mensaje de error
      errorMessage.style.display = 'block'; // Muestra el mensaje de error
      errorMessage.style.color = 'red';
 
      // Oculta el mensaje de error después de 5 segundos
      setTimeout(function() {
        errorMessage.style.display = 'none';
      }, 5000);

    });
});