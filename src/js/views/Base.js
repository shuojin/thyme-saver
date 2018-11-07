export const elements = {
    searchForm: document.querySelector('.subscription'),
    searchInput: document.querySelector('.search-field'),
    searchRes: document.querySelector('.results'),
    searchResList: document.querySelector('#results-list')
}

export const elementStrings = {
    loader: 'loader'
}

export const renderLoader = parent => {
    const loader = `
        <div class="${elementStrings.loader}">
            <svg>
                <use href="img/icons.svg#icon-cw"></use>
        </div>
        <div class="spinner">
            <div class="dot1"></div>
            <div class="dot2"></div>
        </div>
    `;
    parent.insertAdjacentHTML('afterbegin', loader);
}

export const clearLoader = () => {
    const loader = document.querySelector(`.${elementStrings.loader}`);
    if(loader) {
        loader.parentElement.removeChild(loader);
    }
}