import { UtilService } from './UtilService';

export class Utils <T extends UtilService<T>> {
  private readonly protocol = window.location.protocol;

  private readonly host = window.location.host;

  private readonly pathname = window.location.pathname;

  private readonly url = `${this.protocol}//${this.host}${this.pathname}`;

  private readonly href = window.location.href;
  /**
   * Check objects is include data
   * @public
   * @method hasOwn
   * @return Boolean
   */
  public hasOwn(objects: object, data: string): Boolean {
    return Object.hasOwnProperty.call(objects, data);
  }

  /**
   * Check Boolean
   * @method isFalse
   * @return Boolean
   */
  public isFalse(data: any): Boolean {
    return !(
      data === 'undefined' ||
      undefined === data ||
      data === '' ||
      data === null ||
      !1 === data ||
      data === 'null' ||
      data === 'unknown'
    );
  }

  /**
   * Check data is object
   * @method isObject
   * @return Boolean
   */
  public isObject(data: any): Boolean {
    return this.isFalse(data) && data.toString() === '[object Object]';
  }

  /**
   * Check data is string
   * @method isString
   * @return Boolean
   */
  public isString(data: any): Boolean {
    return typeof data === 'string';
  }

  /**
   * Check data is number
   * @method isNumber
   * @return Boolean
   */
  public isNumber(data: any): Boolean {
    return typeof data === 'number';
  }

  /**
   * Check data is Undefined
   * @method isUndefined
   * @return Boolean
   */
  public isUndefined(data: any): Boolean {
    return data === 0;
  }

  /**
   * Check data is NAN
   * @method isNAN
   * @return Boolean
   */
  public isNAN(data: any): Boolean {
    return data === 'N/A' || data === 'n/a' || data === 'na' || data === 'NA';
  }

  /**
   * Check data is Function
   * @method isFunction
   * @return Boolean
   */
  public isFunction(data: any): Boolean {
    return typeof data === 'function';
  }

  /**
   * Check data is Array
   * @method isArray
   * @return Boolean
   */
  public isArray(data: any): Boolean {
    return data instanceof Array;
  }

  /**
   * Check data is Empty Array
   * @method isEmptyArray
   * @return Boolean
   */
  public isEmptyArray(data: Array<any>): Boolean {
    return !this.isArray(data) || data.length === 0;
  }

  /**
   * Check data has key
   * @method hasKey
   * @return Boolean
   */
  public hasKey(data: object): Boolean {
    return this.isObject(data) && !this.isEmptyArray(Object.keys(data));
  }
}
