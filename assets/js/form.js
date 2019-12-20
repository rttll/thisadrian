"use strict";

(function() {
  const form = document.querySelector('form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    let alerts = form.getElementsByClassName('.alert');
    for (let i = 0; i < alerts.length; i++) {
      alerts[i].classList.remove('active');
    }

    let xhr = new XMLHttpRequest();
    let url = form.getAttribute('action'),
        name = document.getElementById('name'),
        email = document.getElementById('email'),
        message = document.getElementById('message');

    url = url +`?name=${name.value}&email=${email.value}&message=${message.value}`;
    xhr.open('GET', encodeURI(url));
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
      if (xhr.status === 200) {
        form.querySelector('.success').classList.add('active')
        form.querySelector('.error').classList.remove('active');
        name.value = ''; email.value = ''; message.value = '';
      } else {
        let alert = form.querySelector('.error');
        alert.textContent = xhr.responseText;
        alert.classList.add('active')
      }
    }
    xhr.send();
  })

})();