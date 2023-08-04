const { useState } = require('react');

const useLocalStorageState = (initialState, key) => {
    const [localStorage, setLocalStorage] = useState(() => {
        const data = localStorage.getItem(key);
        if (data) setLocalStorage(JSON.parse(data));
        else setLocalStorage(initialState);
    });

    return [localStorage, setLocalStorage];
};

export default useLocalStorageState;
