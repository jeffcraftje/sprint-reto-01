const formulario = document.getElementById("form");
const email = document.getElementById("gmail");
const aler = document.getElementById("aler");

formulario.addEventListener('submit', e => {

    e.preventDefault();
    const form = new FormData(formulario);
    if (form.get('name') == 0) {
        aler.innerHTML+=`<h5>No has escrito aun tu correo</h5>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><g fill="none" fill-rule="evenodd"><circle cx="10" cy="10" r="10" fill="#FA5959"/><g fill="#FFF" transform="translate(9 5)"><rect width="2" height="7" rx="1"/><rect width="2" height="2" y="8" rx="1"/></g></g></svg>
    `
    } else {
        console.log(form.get('name'));
        email.setAttribute('href', `mailto:jdgarcia988@misena.edu.co?subject=usuario nuevo&body=${form.get('name')} `);
        email.click();
        aler.style.display="none"
    }
});