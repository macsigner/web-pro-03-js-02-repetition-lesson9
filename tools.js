
export function delegate(selector, fn) {
    return function(e) {
        if(e.target.matches(selector)) {
            fn.call(this, e);
        }
    }
}

export function get(url, fn) {
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener('load', fn.bind(this, request));

    request.addEventListener('error', () => {
        alert('Ein Fehler ist aufgetreten!\n' +
            'Die Daten konnten nicht Empfangen werden!\n' +
            'Bist Du mit dem Internet verbunden?');
    });

    request.send();
}

export function post(url, data, fn) {
    const request = new XMLHttpRequest();
    request.open('POST', url);
    request.setRequestHeader('Content-Type', 'application/json');

    request.addEventListener('load', fn.bind(this, request));

    request.addEventListener('error', () => {
        alert('Ein Fehler ist aufgetreten!\n' +
            'Daten konnten nicht gesendet werden!\n' +
            'Bist Du mit dem Internet verbunden?');
    });

    request.send(JSON.stringify(data));
}

export function stateIsOK(request) {
    return request.status >= 200 && request.status < 400;
}
