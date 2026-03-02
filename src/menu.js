export function loadMenu() {
        const content = document.getElementById("content");

    const headingContainer = document.createElement("div");
    headingContainer.className = "heading-container";
    const menuTab = document.createElement("h1");
    menuTab.className = "menu-tab";

    menuTab.innerText = "Menu";

    content.appendChild(headingContainer);
    headingContainer.appendChild(menuTab)

}