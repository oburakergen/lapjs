import config from '/src/modules/_helper/regex.js';
import dateHelper from '/src/modules/dateHelper/index.js';
import error from '/src/modules/errorBag/index.js';
import utils from '/src/modules/utils/index';

const lstorage = window.localStorage;

class Function {
    /**
     * Check whether user is on main page of website
     * @method get
     * @return Object
     */
    get(t) {
        try {
            if(utils.isString(t)) {
                const e = lstorage.getItem(t) || '';

                return e.match(config.STORAGE_REGEX) ? (JSON.parse(e || '{}') || {}).data : e || null;
            }
        } catch (errors) {
            return error._send({
                className: 'ls',
                methodName: 'get',
                stack: errors
            });
        }
    }

    /**
     * Check whether user is on main page of website
     * @method set
     * @return NaN
     */
    set(t) {
        const expire = (t || {}).expires || dateHelper.getTime(dateHelper.addDay(7));

        try {
            if(utils.isObject(t) && utils.isFalse(t.name) && utils.isFalse(t.value)) {
                delete t.expires;

                const data = JSON.stringify({
                    data: t.value,
                    _expires: expire
                });

                return lstorage.setItem(t.name, data);
            }

            return error._send({
                className: 'Localstorage',
                methodName: 'get',
                stack: 'False Errors'
            });

        } catch (errors) {
            return error._send({
                className: 'ls',
                methodName: 'set',
                stack: errors
            });
        }
    }

    /**
     * Check whether user is on main page of website
     * @method remove
     * @return NaN
     */
    remove(t) {
        try {
            if(utils.isString(t)) {
                return lstorage.removeItem(t);
            }

            return error._send({
                className: 'c',
                methodName: 'get',
                stack: 'String Errors'
            });
        } catch (errors) {
            return error._send({
                className: 'ls',
                methodName: 'remove',
                stack: errors
            });
        }
    }

    /**
     * Check whether user is on main page of website
     * @method all
     * @return Array
     */
    all() {
        const t = [];

        try {
            for (let e = 0; e < lstorage.length; e++) {
                const i = lstorage.key(e);

                lstorage[i].match(config.STORAGE_REGEX) ? t.push({
                    name: i,
                    value: (JSON.parse(lstorage[i] || '{}') || {}).data,
                    _expires: JSON.parse(lstorage[i])._expires
                }) : t.push({
                    name: i,
                    value: lstorage[i]
                });
            }

            return t;
        } catch (errors) {
            return error._send({
                className: 'ls',
                methodName: 'all',
                stack: errors
            });
        }
    }
}

export default new Function;
