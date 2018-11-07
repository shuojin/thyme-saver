import axios from 'axios'
import apiConfig from '../apiKeys';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        try {         
            const output = await axios(`${apiConfig.proxy}https://api.edamam.com/search?q=${this.query}&app_id=${apiConfig.appId}&app_key=${apiConfig.apiKey}`);
            this.result = output.data.hits;
        } catch (error) {
            alert(error);
        } 
    }
}

