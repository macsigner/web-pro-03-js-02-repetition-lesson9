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

    request.send();
}

export function post(url, data, fn) {
    const request = new XMLHttpRequest();
    request.open('POST', url);
    request.setRequestHeader('Content-Type', 'application/json');

    request.addEventListener('load', fn.bind(this, request));

    request.send(JSON.stringify(data));
}
