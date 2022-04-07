class Functions {
    constructor() {
        this.protocol = window.location.protocol;
        this.host = window.location.host;
        this.pathname = window.location.pathname;
        this.url = this.protocol + '//' + this.host + this.pathname;
        this.href = window.location.href;
    }

    /**
     * Check whether user is on main page of website
     * @method hasOwn
     * @return Object
     */
    hasOwn(objects, data) {
        return Object.hasOwnProperty.call(objects, data);
    }

    /**
     * Check whether user is on main page of website
     * @method isFalse
     * @return Boolean
     */
    isFalse(a) {
        return !(('undefined' === a) || (undefined === a) || ('' === a) || (null === a) || (!1 === a) ||
          ('null' === a) || ('unknown' === a));
    }

    /**
     * Check whether user is on main page of website
     * @method isObject
     * @return Boolean
     */
    isObject(data) {
        return this.isFalse(data) && '[object Object]' === data.toString();
    }

    /**
     * Check whether user is on main page of website
     * @method isString
     * @return Boolean
     */
    isString(data) {
        return 'string' === typeof data;
    }

    /**
     * Check whether user is on main page of website
     * @method isNumber
     * @return Boolean
     */
    isNumber(data) {
        return 'number' === typeof data;
    }

    /**
     * Check whether user is on main page of website
     * @method isUndefined
     * @return Boolean
     */
    isUndefined(data) {
        return void 0 === data;
    }

    /**
     * Check whether user is on main page of website
     * @method isNAN
     * @return Boolean
     */
    isNAN(data) {
        return 'N/A' === data || 'n/a' === data || 'na' === data || 'NA' === data;
    }

    /**
     * Check whether user is on main page of website
     * @method isFunction
     * @return Boolean
     */
    isFunction(data) {
        return 'function' === typeof data;
    }

    /**
     * Check whether user is on main page of website
     * @method isArray
     * @return Boolean
     */
    isArray(data) {
        return data instanceof Array;
    }

    /**
     * Check whether user is on main page of website
     * @method isEmptyArray
     * @return Boolean
     */
    isEmptyArray(data) {
        return !this.isArray(data) || 0 === data.length;
    }

    /**
     * Check whether user is on main page of website
     * @method hasKey
     * @return Boolean
     */
    hasKey(a) {
        return this.isObject(a) && !this.isEmptyArray(Object.keys(a));
    }

    /**
     * Check whether user is on main page of website
     * @method hasParameter
     * @return Boolean
     */
    hasParameter(data) {
        data = data || '';

        const decodeUrl = decodeURIComponent(this.href);

        return decodeURIComponent(data.replace(/[\[\]\/?]/g, '\\$&')) &&
          Boolean(new RegExp(data).exec(decodeUrl));
    }

    /**
     * Check whether user is on main page of website
     * @method getParameterFromUrl
     * @return String
     */
    getParameterFromUrl(text, search) {
        const i = search.replace(/[\[\]]/g, (t) => {
            return '\\' + t;
        });
        const n = new RegExp('[\\?&#]' + i + '=([^&#]*)').exec(text);

        return n ? decodeURIComponent(n[1].replace(/\+/g, ' ')
            .replace(/<[^>]+>/gi, '')) : '';
    }

    /**
     * Check whether user is on main page of website
     * @method getParameter
     * @return String
     */
    getParameter(data) {
        return this.getParameterFromUrl(this.href, data);
    }

    /**
     * Check whether user is on main page of website
     * @method encode
     * @return String
     */
    encode(data) {
        data = data || '';

        return window.btoa(encodeURIComponent(data).replace(/%([0-9A-F]{2})/g, (item, e) => {
            return String.fromCharCode('0x' + e);
        }));
    }

    /**
     * Check whether user is on main page of website
     * @method decode
     * @return String
     */
    decode(data) {
        data = data || '';

        return decodeURIComponent(window.atob(data).split('').map((item) => {
            return '%' + ('00' + item.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    }

    /**
     * Check whether user is on main page of website
     * @method parse
     * @return Object
     */
    parse(data) {
        return JSON.parse(data || '{}') || {};
    }

    /**
     * Check whether user is on main page of website
     * @method stringify
     * @return String
     */
    stringify(data) {
        return JSON.stringify(data || '{}');
    }

    /**
     * Check whether user is on main page of website
     * @method removeWhiteSpaces
     * @return String
     */
    removeWhiteSpaces(data) {
        return this.isString(data) ? data.replace(/\s/g, '') : data;
    }
}

export default new Functions;
