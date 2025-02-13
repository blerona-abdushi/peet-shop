let animals = [];
let currentIndex = 0;

async function fetchAnimalData() {
    const response = await fetch("js/animal.json");
    const animalData = await response.json();
    animals = animalData.animals; 
    showAnimal(currentIndex);
}

function showAnimal(index) {
    const animal = animals[index];

    const container = document.querySelector(".testimonials-container");
    container.innerHTML = `
        <div class="dog">
            <img class="image" src="${animal.image}" alt="${animal.name}">
            <hr>
            <p class="description">"${animal.description}"</p>
            <button class="sound" onclick="playAudio('${animal.description}')">
                <i class="fa-brands fa-soundcloud"></i> play sound
            </button>
        </div>
    `;
}
function playAudio(description) {
    const utterance = new SpeechSynthesisUtterance(description);
    utterance.lang = "en-US";  
    window.speechSynthesis.speak(utterance); 
}


function showNextAnimal() {
    currentIndex = (currentIndex + 1) % animals.length;  // Për të kaluar tek kafsha tjetër
    showAnimal(currentIndex);
}

function showPreviousAnimal() {
    currentIndex = (currentIndex - 1 + animals.length) % animals.length;  // Për të kaluar në kafshën e mëparshme
    showAnimal(currentIndex);
}

document.querySelector(".left-arrow").addEventListener("click", showPreviousAnimal); 
document.querySelector(".right-arrow").addEventListener("click", showNextAnimal); 

fetchAnimalData();




