const form = document.getElementById('form');

form.addEventListener('submit', e => {
  e.preventDefault();

  // check for email validation
  const email = form['email'];
  const emailValue = email.value;
  const small = form.querySelector('small');
  if (!emailValue) {
    // say it's empty
    email.classList.add('error');
    small.innerText = 'Email can not be empty';
    small.style.display = 'inline-block';
  } else if (!isValidEmail(emailValue)) {
    // say it's invalid
    email.classList.add('error');
    small.innerText = 'Email is invalid';
    small.style.display = 'inline-block';
  } else {
    // submit it
    email.classList.remove('error');
    document.body.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: center;>
        <h1 class="baslik">Thank you!</h1>
      </div>`;
  }
});

function isValidEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
