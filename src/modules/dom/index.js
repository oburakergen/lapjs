import error from '/src/modules/errorBag';
import utils from '/src/modules/utils/index';
import config from '/src/modules/_helper/regex';

const combinators = {
    '+': 'nextElementSibling',
    '>': 'children'
};

const textStyle = {
    html: 'innerHTML',
    text: 'innerText',
    class: 'className',
    css: 'style'
};

const enums = {
    VISIBLE: 'visible',
    HIDDEN: 'hidden',
    NONE: 'none',
    STATIC: 'static',
    BODY: 'body'
};

class Function {
    constructor(selector, context) {
        this.selector = selector;
        this.nodes = [];
    }

    _hasAdvancedSelector(data) {
        return typeof data === 'string' && (data.match(config.DOM.COMPLEX_SELECTOR_SEEKER) !== null ||
            data.match(config.DOM.TYPES) !== null || data.match(config.DOM.TYPE_SPECIFIED_SELECTORS) !== null);
    }

    _normalizeProperties(data) {
        for (const i in data) {
            if(textStyle[i]) {
                data[textStyle[i]] = data[i];
                delete data[i];
            }
        }

        return data;
    }

    _addDoubleQuotes(data) {
        return data.replace(config.DOM.NONE_QUOTED_ATTR_SELECTOR, (item) => {
            return item.replace('=', '="').replace(']', '"]');
        });
    }

    _convertArray(data) {
        return [].slice.call(data || []);
    }

    _normalizeNumericIdSelector(data) {
        return data.replace(config.DOM.ID_EXTRACTOR, (item) => {
            return config.DOM.NUMERIC_ID_SELECTOR.test(item) ? '[id="' + item.split('#')[1] + '"]' : item;
        });
    }

    _adjustNodes() {
        return this.selector instanceof this ? this.selector.nodes :
            '[object NodeList]' === this.selector.toString() ? this.selector :
                this.isElementNode(this.selector) ||
            this._isDocument(this.selector) || this._isWindow(this.selector) ? [this.selector] :
                    document.querySelectorAll(this._addDoubleQuotes(
                        this._normalizeNumericIdSelector(this.selector)));
    }

    _separateByComma(data) {
        if (!data) {
            return [];
        }

        if (!data.match(/,/g)) {
            return [data];
        }

        const e = data.match(config.DOM.PSEUDO);

        if (!e) {
            return data.split(config.DOM.COMMA_SEPARATOR);
        }
        const i = /\$\d/g;
        const n = {};

        return e.forEach((e, i)=> {
            const s = '$' + i;

            data = data.replace(e, s);
            n[s] = e;
        });
    }

    init() {
        if(!this.selector) {
            return error._send({
                className: 'c',
                methodName: 'get',
                stack: 'String Errors'
            });
        } else if(utils.isArray(this.selector)) {
            console.log('asd');
        } else if(typeof this.selector === 'string' && (this.selector.trim().charAt(0) ===
          '<' || this.selector.trim().charAt(this.selector.length - 1) ===  '>')) {
            console.log('sad');
        }

        return this.selector = t,
        this.nodes = o._convertArray(this.adjustNodes()),
        this.length = this.nodes.length,
        this;
    }
}

export default Function;
