// Import stylesheets
import './style.css';

function greeter(person) {
    return person + " is a huuuuuuuuge idiot lmao";
}

let user = "Sukrit";

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>${greeter(user)}</h1>`;