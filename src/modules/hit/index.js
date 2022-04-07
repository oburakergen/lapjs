import request from '/src/modules/request/index';

window.history.pushState = (f => function pushState() {
    const ret = f.apply(this, arguments);

    window.dispatchEvent(new window.Event('pushstate'));
    window.dispatchEvent(new window.Event('locationchange'));

    return ret;
})(window.history.pushState);

window.history.replaceState = (f => function replaceState() {
    const ret = f.apply(this, arguments);

    window.dispatchEvent(new window.Event('replacestate'));
    window.dispatchEvent(new window.Event('locationchange'));

    return ret;
})(window.history.replaceState);

window.addEventListener('popstate', () => {
    window.dispatchEvent(new window.Event('locationchange'));
});

function hit() {
    request.ajax({});
}

window.addEventListener('popstate', hit());
