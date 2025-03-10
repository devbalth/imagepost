const form = document.querySelector('form');
const username = document.querySelector('#email');
const password = document.querySelector('#password');

const account = new Account(client);

form.addEventListener('submit', event => {
    event.preventDefault();
    
    const userEmail = username.value;
    const userPass = password.value;

    form.reset();

    account.create(ID.unique(), userEmail, userPass).then(() => {
        window.location.replace('https://devbalth.github.io/imagepost/')
    })


    
});