export function delegate(selector, fn) {
    return function(e) {
        if(e.target.matches(selector)) {
            fn.call(this, e);
        }
    }
}
