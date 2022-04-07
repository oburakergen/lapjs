import error from '/src/modules/errorBag/index.js';

class Function {
    constructor() {
        this.request = {
            get: 'GET',
            post: 'POST',
            put: 'PUT',
            delete: 'DELETE'
        };
    }

    _method(method) {
        return this.request[(method || 'GET').toLowerCase()];
    }

    ajax(sendData, callback) {
        const xhr = new XMLHttpRequest();
        const data = {
            url: sendData.url || '/',
            method: this._method(sendData.method),
            headers: sendData.headers || {},
            data: JSON.stringify(sendData.data || '')
        };

        if (typeof callback === 'function') {
            xhr.onreadystatechange = () => {
                try {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        callback(xhr.responseText);
                    }
                } catch (errors) {
                    return error._send({
                        className: 'r',
                        methodName: 'get',
                        stack: errors
                    });
                }
            };
        }

        xhr.open(data.method, data.url, true);

        for (const key in data.headers) {
            xhr.setRequestHeader(key, sendData.headers[key]);
        }

        if(data.data !== '') {
            xhr.send(data.data);
        } else {
            xhr.send();
        }

        return xhr;
    }

    fetch(sendData, callback) {
        const data = {
            method: this._method(sendData.method),
            headers: sendData.headers || {},
            body: JSON.stringify(sendData.data || '')
        };

        if(data.body === '') {
            delete data.body;
        }

        window.fetch(data.url, data).then(callback).catch(callback);
    }

    listiner(callback) {
        const originalOpenFunction = XMLHttpRequest.prototype.open;

        XMLHttpRequest.prototype.open = function(method, url) {
            originalOpenFunction.apply(this, arguments);
            this.addEventListener('readystatechange', function() {
                if (Number(this.readyState) === 4 && Number(this.status) === 200 &&
                  typeof callback === 'function') {
                    callback(url, method, this.responseText);
                }
            });
        };
    }
}

export default new Function;
