import error from '/src/modules/errorBag/index.js';
import fns from '/src/modules/utils/index';

const ssession = window.sessionStorage;

class Function {
    /**
     * Check whether user is on main page of website
     * @method get
     * @return String
     */
    get(t) {
        try {
            if(fns.isString(t)) {
                return ssession.getItem(t);
            }

            return error._send({
                className: 'c',
                methodName: 'get',
                stack: 'String Errors'
            });
        } catch (errors) {
            return error._send({
                className: 's',
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
                return sessionStorage.setItem(t.name, t.value);
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
                return sessionStorage.removeItem(t);
            }

            return error._send({
                className: 'c',
                methodName: 'get',
                stack: 'String Errors'
            });
        } catch (errors) {
            return error._send({
                className: 's',
                methodName: 'get',
                stack: errors
            });
        }
    }
}

export default new Function;
