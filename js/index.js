console.log("ami aisi")


const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
        .then((res) => res.json())
        .then((data) => displayCategories(data.categories))
        .catch((error) => console.log(error));
}

const loadAllPets = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
        .then((res) => res.json())
        .then((data) => displayAllPets(data.pets))
        .catch((error) => console.log(error));
}

const displayAllPets = (pets) => {
    console.log(pets);

    pets.forEach((pet) => {
        console.log(pet.breed);
        const allPetContainer = document.getElementById('all-pets-container');

        const allPetCard = document.createElement('div');
        allPetCard.classList = "card bg-base-100 border-solid border-2 m-2"
        allPetCard.innerHTML = `
            <figure class="px-5 pt-5">
                <img
                    src=${pet.image}
                    alt="pets" class="rounded-xl" />
            </figure>
            <div class="card-body">
                <div class="flex gap-2">
                    <img src="https://img.icons8.com/?size=24&id=115909&format=png" alt=""> 
                    <p>Breed: <span>${pet.breed}</span></p>
                </div>
                <div class="flex gap-2 items-center">
                    <i class="fa-regular fa-xl fa-calendar"></i> 
                    <p>Birth: <span>${pet.date_of_birth}</span></p>
                </div>
                <div class="flex gap-2 items-center">
                    <i class="fa-solid fa-mercury fa-xl"></i> 
                    <p>Gender: <span>${pet.gender}</span></p>
                </div>
                <div class="flex gap-2 items-center">
                    <i class="fa-solid fa-dollar-sign"></i> 
                    <p>Price: <span>${pet.price}$</span></p>
                </div>
                <div class="flex justify-between">
                    <button class="btn bg-white border-solid border-4 text-gray-500"><i class="fa-regular fa-thumbs-up"></i></button>
                    <button class="btn bg-white border-solid border-4 text-error">Adopt</button>
                    <button class="btn bg-white border-solid border-4 text-error">Details</button>
                </div>
                </div>
            </div>
        `
        allPetContainer.append(allPetCard);
        
    })
}
const displayCategories = (categories) => {
    const categoriesContainer = document.getElementById('categories-container');

    categories.forEach((item) => {

        const buttonContainer = document.createElement("div");
        buttonContainer.innerHTML = `
            <button class="btn mb-8 w-[260px] h-[80px] rounded-full font-bold text-xl">
            <div class="flex gap-4 justify-center items-center">
                <img src=${item.category_icon} alt="">
                ${item.category}
            </div>
            </button>
        `
        categoriesContainer.append(buttonContainer);
    });
}


loadCategories();
loadAllPets();