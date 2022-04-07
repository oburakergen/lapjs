import dateHelpers from './modules/dateHelper/index';
import systemRule from './modules/rules/systemRules';
import storages from './modules/storage/index';
import errors from './modules/errorBag/index';
import requests from './modules/request/index';
import browsers from './modules/browser/index';
import util from './modules/utils/index';
import external from './modules/_external/index';
import pusher from './modules/pusher/index';
import service from './modules/services/index';

class Lap {
    constructor() {
        this.__Laraplay_SCRIPT_VERSION_laraplay__ = '1.0.1';
        this.__external = external;
        this.partner = 'Laraplay';
    }

    get browser() {
        try {
            return browsers;
        } catch (e) {
            return errors._send({
                className: 'browser',
                methodName: 'all',
                stack: e
            });
        }
    }

    get dateHelper() {
        try {
            return dateHelpers;
        } catch (e) {
            return errors._send({
                className: 'dateHelpers',
                methodName: 'all',
                stack: e
            });
        }
    }

    get errorBag() {
        return errors;
    }

    get utils() {
        try {
            return util;
        } catch (e) {
            return errors._send({
                className: 'browser',
                methodName: 'all',
                stack: e
            });
        }
    }
    get webPusher() {
        try {
            return pusher;
        } catch (e) {
            return errors._send({
                className: 'request',
                methodName: 'get',
                stack: e
            });
        }
    }

    get services() {
        try {
            return service;
        } catch (e) {
            return errors._send({
                className: 'request',
                methodName: 'get',
                stack: e
            });
        }
    }

    get request() {
        try {
            return requests;
        } catch (e) {
            return errors._send({
                className: 'request',
                methodName: 'get',
                stack: e
            });
        }
    }

    get systemRules() {
        try {
            return systemRule;
        } catch (e) {
            return errors._send({
                className: 'systemRules',
                methodName: 'all',
                stack: e
            });
        }
    }

    get storage() {
        try {
            return storages;
        } catch (e) {
            return errors._send({
                className: 'storages',
                methodName: 'all',
                stack: e
            });
        }
    }
}

module.exports = Lap;
