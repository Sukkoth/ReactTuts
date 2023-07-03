import { useEffect, useState } from 'react';
import axios from 'axios';

const useApiFetch = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [errors, setErrors] = useState({});

    const getQuotes = async () => {
        setIsLoading(true);
        const response = await axios.get(
            'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
        );
        setData(response.data.quotes);
        setIsLoading(false);
    };

    useEffect(() => {
        getQuotes();
    }, []);
    return {
        data,
        isLoading,
        errors,
    };
};

export default useApiFetch;
