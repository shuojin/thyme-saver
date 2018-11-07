import axios from 'axios'

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        const proxy = 'http://cors-anywhere.herokuapp.com/';
        const appId = '--------';
        const apiKey = '-------------';
        try {         
            const output = await axios(`${proxy}https://api.edamam.com/search?q=${this.query}&app_id=${appId}&app_key=${apiKey}`);
            this.result = output.data.hits;
        } catch (error) {
            alert(error);
        } 
    }
}

