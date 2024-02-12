"use strict";

const loginForm = document.querySelector(".login-form");

const validateForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const login = form.elements.email.value;
    const password = form.elements.password.value;

    if(login === "" || password === ""){
        alert("All form fields must be filled in");
    }
    const data = {}
    data.email = login.trim();
    data.password = password.trim();
    console.log(data);
    form.reset();
}
loginForm.addEventListener("submit", validateForm);