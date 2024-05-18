const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.innerHTML  = 'Enviando mensaje...';

   const serviceID = 'default_service';
   const templateID = 'template_2ikq2ss';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviando mensaje';
      alert('Mensaje enviado');
    }, (err) => {
      btn.value = 'Enviando mensaje';
      alert(JSON.stringify(err));
    });
});