export function loadContacts() {
    const content = document.getElementById("content");

    const headingContainer = document.createElement("div");
    headingContainer.className = "heading-container";
    const menuTab = document.createElement("h1");
    menuTab.className = "heading-name";

    menuTab.innerText = "Contactos";

    content.appendChild(headingContainer);
    headingContainer.appendChild(menuTab);

    const emailContainer = document.createElement("div");
    emailContainer.className = "email-container";
    const emailContainerTitle = document.createElement("h2");
    emailContainerTitle.className = "email-container-title"
    emailContainerTitle.innerText = "Email";
    const email = document.createElement("p");
    email.className = "email";
    email.innerText = "exemplo@exemplo.com";
    
    content.appendChild(emailContainer);
    emailContainer.appendChild(emailContainerTitle);
    emailContainer.appendChild(email);

    const socialMediaContainer = document.createElement("div");
    socialMediaContainer.className = "social-media-container";
    const socialMediaTitle = document.createElement("h2");
    socialMediaTitle.className = "social-media-title";
    socialMediaTitle.innerText = "Redes Sociais";
    const tiktok = document.createElement("p");
    tiktok.className = "tiktok";
    tiktok.innerText = "Tiktok";

    content.appendChild(socialMediaContainer);
    socialMediaContainer.appendChild(socialMediaTitle);
    socialMediaContainer.appendChild(tiktok);
    
};