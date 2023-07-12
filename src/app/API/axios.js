import axios from 'axios';

export default axios.create({
    baseURL: 'https://newsapi.org/v2/',
    headers: {
        'X-Api-Key': 'f59436d2f91b4a8c91ee0e698f392647',
    },
});
