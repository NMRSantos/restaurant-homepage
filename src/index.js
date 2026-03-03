import {loadHome} from "./home.js";
import {loadMenu} from "./menu.js";
import {loadContacts} from "./contacts.js";

export const content = document.getElementById("content");


function clearPage() {
    content.textContent = "";
}

document.querySelector(".home").addEventListener("click", function () {
    clearPage();
    loadHome();
});

document.querySelector(".menu").addEventListener("click", function () {
    clearPage();
    loadMenu();
});

document.querySelector(".contacts").addEventListener("click", function () {
    clearPage();
    loadContacts();
});

loadHome()