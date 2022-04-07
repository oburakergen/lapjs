import config from '/src/modules/_helper/regex.js';

class Function {
    constructor() {
        this._enabled = (JSON.parse(window.localStorage['lap-storage-dev'] || '{}') || {}).data || false;
        this._errors= [];
    }
    show() {
        const error = this._errors.length;

        return this._enabled ? this._errors.map((data, key) => {
            if(key === (error - 1)) {
                console.log('%cLaraplay Error! ' + (key + 1), config.ERROR.STYLE_IMPORTANT);
                console.log('%c' + ((data.value || {}).message || data.name), config.ERROR.STYLE_NAME_IMPORTANT);
                console.log('%c' + ((data.value || {}).stack || data.value), config.ERROR.STYLE_BODY_IMPORTANT);
            }
        }) : [];
    }

    _send(f) {
        this._errors.push({
            name: (f.className || '') + ' ' + (f.methodName || ''),
            value: f.stack || ''
        });
        setTimeout(()=> {
            this.show();
        }, 100);
    }
}

export default new Function;
