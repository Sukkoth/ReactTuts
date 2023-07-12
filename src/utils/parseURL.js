// const options = {
//     pageSize: 5,
//     page: 1,
//     sources: 'bbc-news',
//     q: null,
//     category: null,
// };

const parseURL = (options) => {
    let parsedURL = '?';
    Object.keys(options).forEach((option) => {
        if (options[option] !== null) {
            parsedURL += '&' + option + '=' + String(options[option]);
        }
    });
    return parsedURL;
};

export default parseURL;
// parseURL(options);
