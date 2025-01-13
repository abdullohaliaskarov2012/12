document.body.style.backgroundColor = "blue";
document.body.style.margin = "0";
document.body.style.height = "100vh";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";

let userName = prompt("Введите ваше имя:");

let nameElement = document.createElement("div");
nameElement.textContent = userName;
nameElement.style.color = "yellow";
nameElement.style.fontSize = "128px";
nameElement.style.textAlign = "center";

document.body.appendChild(nameElement);
