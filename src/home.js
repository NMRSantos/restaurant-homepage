import "./styles.css";

export let loadHome = () => {
    const content = document.getElementById("content");
    
    const headingContainer = document.createElement("div");
    headingContainer.className = "heading-container";
    const restaurantName = document.createElement("h1");
    restaurantName.className = "restaurant-name";
    
    restaurantName.innerText = "Restaurante Portas Verdes";
    
    content.appendChild(headingContainer);
    headingContainer.appendChild(restaurantName);
    
    
    const reviewContainer = document.createElement("div");
    reviewContainer.className = "review-container";
    const reviewText = document.createElement("p");
    reviewText.className = "review-text";
    const reviewSubmitter = document.createElement("h3");
    reviewSubmitter.className = "review-submitter";
    
    reviewText.innerText = "O Portas Verdes tem o melhor cozido de Carnide!\
                            A atmosfera e o atendimento são cinco estrelas, com um ambiente super familias!\
                            Este restaurante vai direto para a minha lista e mal posso esperar para voltar.";
    reviewSubmitter.innerText = "Sofia Abreu - Google";
    
    content.appendChild(reviewContainer);
    reviewContainer.appendChild(reviewText);
    reviewContainer.appendChild(reviewSubmitter);
    
    
    const infoHoursContainer = document.createElement("div");
    infoHoursContainer.className = "info-hours-container";
    const hours = document.createElement("h3");
    hours.className = "hours";
    const sunday = document.createElement("p");
    sunday.className = "sunday";
    const monday = document.createElement("p");
    monday.className = "monday";
    const tuesday = document.createElement("p");
    tuesday.className = "tuesday";
    const wednesday = document.createElement("p");
    wednesday.className = "wednesday";
    const thursday = document.createElement("p");
    thursday.className = "thursday";
    const friday = document.createElement("p");
    friday.className = "friday";
    const saturday = document.createElement("p");
    saturday.className = "saturday";
    
    hours.innerText = "Horário";
    sunday.innerText = "Segunda: 12h - 22h";
    monday.innerText = "Terça: Folga do pessoal";
    tuesday.innerText = "Quarta: 12h - 22h";
    wednesday.innerText = "Quinta: 12h - 22h";
    thursday.innerText = "Sexta: 12h - 22h";
    friday.innerText = "Sábado: 12h - 22h";
    saturday.innerText = "Domingo: 12h - 22h";
    
    content.appendChild(infoHoursContainer);
    infoHoursContainer.appendChild(hours);
    infoHoursContainer.appendChild(sunday);
    infoHoursContainer.appendChild(monday);
    infoHoursContainer.appendChild(tuesday);
    infoHoursContainer.appendChild(wednesday);
    infoHoursContainer.appendChild(thursday);
    infoHoursContainer.appendChild(friday);
    infoHoursContainer.appendChild(saturday);
    
    const infoLocationContainer = document.createElement("div");
    infoLocationContainer.className = "info-location-container";
    const location = document.createElement("h3");
    location.className = "location";
    const adress = document.createElement("p")
    adress.className = "adress";
    
    location.textContent = "Localização";
    adress.textContent = "123 Rua de Carnide, Carnide, Lisboa";
    
    content.appendChild(infoLocationContainer);
    infoLocationContainer.append(location);
    infoLocationContainer.append(adress);
};
