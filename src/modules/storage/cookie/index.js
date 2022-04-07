import dateHelper from '/src/modules/dateHelper/index';
import error from '/src/modules/errorBag/index';
import config from '/src/modules/_helper/regex';
import fns from '/src/modules/utils/index';

const lcookie = window.document.cookie;

class Function {
    /**
     * Check whether user is on main page of website
     * @method get
     * @return String
     */
    get(t) {
        try {
            let data = false;

            if(fns.isString(t)) {
                data = (this.all().filter((item) => {
                    return item.name === t;
                })[0] || '').value || {};
            } else {
                return error._send({
                    className: 'c',
                    methodName: 'get',
                    stack: 'String Errors'
                });
            }

            return data;
        } catch (errors) {
            return error._send({
                className: 'c',
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
        try {
            if(fns.isObject(t) && fns.isFalse(t.name) && fns.isFalse(t.value)) {
                return window.document.cookie = t.name + '=' + t.value + '; expires=' +
                  (t.expires || dateHelper.getUTCDate(dateHelper._ONE_WEEK_AS_SECONDS * 1000)) +
                  '; path=' + (t.path || '/') + '; domain=' + (config.LOCATION.RAW_HOST_NAME ||
                    fns.url) + ';';
            }

            return error._send({
                className: 'c',
                methodName: 'get',
                stack: 'Object Errors'
            });
        } catch (errors) {
            return error._send({
                className: 'c',
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
            if(fns.isString(t)) {
                return this.set({
                    name: t,
                    expires: 'Thu, 18 Dec 2013 12:00:00 UTC'
                });
            }

            return error._send({
                className: 'c',
                methodName: 'get',
                stack: 'String Errors'
            });

        } catch (errors) {
            return error._send({
                className: 'c',
                methodName: 'set',
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
        return lcookie.split(';').map((t) => {
            const e = t.split(/[=](.+)?/);

            try {
                return {
                    name: e[0].trim(),
                    value: (e[1] || '').trim()
                };
            } catch (errors) {
                return error._send({
                    className: 'c',
                    methodName: 'set',
                    stack: errors
                });
            }
        });
    }
}

export default new Function;
