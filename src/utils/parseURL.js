const parseURL = (options) => {
    let parsedURL = '?';
    Object.keys(options).forEach((option) => {
        if (options[option] !== null) {
            if (option[option] === 'sources') {
                parsedURL +=
                    '&' +
                    option[option].join(',') +
                    '=' +
                    String(options[option]);
            } else {
                parsedURL += '&' + option + '=' + String(options[option]);
            }
        }
    });
    return parsedURL;
};

export default parseURL;
