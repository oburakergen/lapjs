import config from '/src/modules/_helper/regex.js';

const navigator = window.navigator.userAgent;

class Function {
    constructor() {
        this.name = navigator.match(config.NAVIGATOR.TYPE)[1] || '';
        this.version = navigator.match(config.NAVIGATOR.TYPE)[2] || '';
        this.type = {
            CHROME: 'Chrome',
            EDGE: 'Edge',
            EDGE_LATEST: 'Edg',
            YANDEX: 'Yandex',
            OPERA: 'Opera',
            UC: 'UCBrowser',
            SAMSUNG_INTERNET: 'Samsung Internet',
            FIREFOX: 'Firefox',
            SAFARI: 'Safari',
            IE: 'IE',
            COC: 'CocCoc',
            CRIOS: 'CriOS',
            HAND_HELD: 'Handheld Browser',
            MOBILE_BROWSER: 'MOBILE BROWSER',
            WEB_BROWSER: 'WEB BROWSER'
        };
    }

    /**
     * Check whether user is on mobil mode
     * @method isMobile
     * @return Boolean
     */
    isMobile() {
        return config.NAVIGATOR.MOBILE.test(navigator) && window.screen.width < 768;
    }

    /**
     * Check whether user is on tablet mode
     * @method isTablet
     * @return Boolean
     */
    isTablet() {
        return config.NAVIGATOR.TABLET.test(navigator) && !this.isMobile();
    }

    /**
     * Check whether user is on desktop mode
     * @method isDesktop
     * @return Boolean
     */
    isDesktop() {
        return !this.isTablet() && !this.isMobile();
    }

    /**
     * Check whether user is on android os
     * @method isAndroid
     * @return Boolean
     */
    isAndroid() {
        return navigator.toLowerCase().includes('android');
    }

    /**
     * Check whether user is on ios os
     * @method isIOS
     * @return Boolean
     */
    isIOS() {
        return navigator.toLowerCase().includes(/iPad|iPhone|iPod/);
    }

    /**
     * Check whether user is on browser name
     * @method isBrowser
     * @return Boolean
     */
    isBrowser() {
        return this.name;
    }

    /**
     * Get device type
     * @method getDeviceType
     * @return String
     */
    getDeviceType() {
        return this.isMobile() ? this.type.MOBILE_BROWSER : this.type.WEB_BROWSER;
    }
}

export default new Function;
