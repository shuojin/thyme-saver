import { elements } from './base';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
    elements.searchInput.value = '';
}

export const clearResults = () => {
    elements.searchResList.innerHTML = '';
}

const limitRecipeTitle = (title, limit = 17) => {
    const newTitle = [];
    if(title.length > limit) {       
        title.split(' ').reduce((acc, curr) => {
            if(acc + curr.length <= limit) {
                newTitle.push(curr);
            }
            return acc + curr.length;
        }, 0)

        return `${newTitle.join(' ')} ...`;
    }
    return title;
}

const renderRecipe = recipe => {
    const markup = `
        <div class="col-md-4">
            <div class="single-feature">
                <a href="${recipe.recipe.url}" id="${recipe.recipe.label}" target="_blank">
                    <img class="img-fluid rounded-circle mb-3" src="${recipe.recipe.image}" alt="">
                </a>								
                <div class="desc text-center">
                    <h6 class="title text-uppercase">${recipe.recipe.label}</h6>
                    <p>
                        Total time: ${recipe.recipe.totalTime} min<br>
                        Calories: ${recipe.recipe.calories} Cal<br>
                    </p>
                </div>
            </div>
        </div>
    `;
    elements.searchResList.insertAdjacentHTML('beforeend', markup);
}

export const renderResults = recipes => {
    recipes.forEach(renderRecipe);
}