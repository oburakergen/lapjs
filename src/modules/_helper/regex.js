const regex = {
    STORAGE_REGEX: /"data":(.*)"_expires":/g,
    PRICE_REGEX: /[^0-9.,]/g,
    ERROR: {
        STYLE_IMPORTANT: 'color: red; font-size: 18px;',
        STYLE_NAME_IMPORTANT: 'color: red; font-size: 14px;',
        STYLE_BODY_IMPORTANT: 'color: green; font-size: 12px;'
    },
    LOCATION: {
        HASH: '',
        HOST: window.location.host,
        HOSTNAME: window.location.hostname,
        PATHNAME: window.location.pathname,
        PORT: window.location.port,
        PROTOCOL: window.location.protocol,
        RAW_HOST_NAME: window.location.host.split('.').length > 2 ?
            window.location.host.split('.').slice(1, 3).join('.').split(':').shift()
            : window.location.host.split('.').join('.').split(':').shift(),
        RAW_HREF: window.location.origin.replace('//www', '//') +
      window.location.pathname,
        SEARCH: window.location.search
    },
    NAVIGATOR: {
        TYPE: /(yabrowser|opera|chrome|crios|safari|firefox|msie|edge|edg|maxthon|trident|ubrowser|ucbrowser(?=\/))\/?\s*(\d+)/i,
        // eslint-disable-next-line max-len
        MOBILE: /iphone|ipod|(android(.*mobile))|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|iemobile|symbian|fennec/i,
        // eslint-disable-next-line max-len
        TABLET: /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|playbook|(puffin(?!.*(IP|AP|WP))))/i
    },
    DOM: {
        PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^)]+\)|[^()]*)+)\2\))?/g,
        PSEUDO_SEPARATOR: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^)]+\)|[^()]*)+)\2\))?/,
        // eslint-disable-next-line max-len
        COMPLEX_SELECTOR_SEPARATOR: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^)]+\)|[^()]*)+)\2\))?|\[s*((?:\\[\da-fA-F]{1,6}s?|\\[^\r\n\f]|[\w-]|[^\0-\\x7f])+)(?:s*([*^$|!~]?=)s*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\[\da-fA-F]{1,6}s?|\\[^\r\n\f]|[\w-]|[^\0-\\x7f])+))|)s*\]|([\s]*([>+~]|[\s])[\s]*)|(?:[.a-zA-Z-_#$\[\]=\/?"*'\d]|\\[^\\r\n\f]|[\\w]|[^\0-\\x7f])+/g,
        COMBINATOR: /([\s]*([+])[\s]*)/g,
        META_CHARACTERS: /\\[+<>.\/@|&!]/g,
        COMMA_SEPARATOR: /\s*,\s*/g,
        BOOLEANS: /^(:checked|:disabled|:required)$/i,
        INPUTS: /^(input|select|textarea|button)$/i,
        TYPES: /(:text|:submit|:image|:radio|:password|:checkbox|:file)$/i,
        CHILD: /^:(only|nth|nth-last)-(child|of-type)/,
        // eslint-disable-next-line max-len
        COMPLEX_SELECTOR_SEEKER: /(:has|:visible|:hidden|:contains|:last|:first|:gt|:lt|:even|:odd|:eq|:selected|:not|:input)+(?![first\-child|last\-child)])/g,
        NONE_QUOTED_ATTR_SELECTOR: /\[([^\]]+)=([^="\]]*)(])/g,
        NUMERIC_ID_SELECTOR: /^[#]+\d/,
        ID_EXTRACTOR: /#((?:\\[\da-fA-F]{1,6}s?|\\[^\r\n\f]|[\w-]|[^\0-\\x7f])+)/g,
        TYPE_SPECIFIED_SELECTORS: /:header|:button/g

    }
};

module.exports = regex;
