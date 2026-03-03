export function loadMenu() {
    const content = document.getElementById("content");

    const headingContainer = document.createElement("div");
    headingContainer.className = "heading-container";
    const menuTab = document.createElement("h1");
    menuTab.className = "heading-name";

    menuTab.innerText = "Menu";

    content.appendChild(headingContainer);
    headingContainer.appendChild(menuTab);

    const platesContainer = document.createElement("div");
    platesContainer.className = "plates-container";
    const platesContainerTitle = document.createElement("h2");
    platesContainerTitle.innerText = "Pratos";
    const platesOne = document.createElement("p");
    platesOne.className = "plate";
    platesOne.innerText = "Cozido à Portuguesa - 15€";
    const platesTwo = document.createElement("p");
    platesTwo.className = "plate";
    platesTwo.innerText = "Jardineira - 12€";
    const platesThree = document.createElement("p");
    platesThree.className = "plate";
    platesThree.innerText = "Bacalhau com Natas - 12€";

    content.appendChild(platesContainer);
    platesContainer.appendChild(platesContainerTitle);
    platesContainer.appendChild(platesOne);
    platesContainer.appendChild(platesTwo);
    platesContainer.appendChild(platesThree);
};