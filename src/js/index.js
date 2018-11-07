// Global app controller
import Search from './models/Search';
import * as SearchView from './views/SearchView';
import { elements, renderLoader, clearLoader } from './views/base';

const state = {}

const controlSearch = async () => {
    // 1) Get query from view
    const query = SearchView.getInput(); //TODO

    if(query) {
        // 2) New search ojbect and add to state
        state.search = new Search(query);

        // 3) Prepare UI for results
        SearchView.clearInput();
        SearchView.clearResults();
        renderLoader(elements.searchRes);

        // 4) Search fo recipes
        await state.search.getResults();

        // 5) Render results on UI
        clearLoader();
        SearchView.renderResults(state.search.result);
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
})