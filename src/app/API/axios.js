import axios from 'axios';

export default axios.create({
    baseURL: 'https://newsapi.org/v2/',
    headers: {
        'X-Api-Key': 'b87c007da9824f59a122c61e101002b8', //gadopeace777@gmail.com
        // 'X-Api-Key': 'f59436d2f91b4a8c91ee0e698f392647',   //suukootj@gmail.com
    },
});
