
export interface UtilService<T> {
  hasOwn(objects: object, data: string): Boolean;
  isFalse(data: T): Boolean;
  isObject(data: T): Boolean;
  isString(data: T): Boolean;
  isNumber(data: T): Boolean;
  isUndefined(data: any): Boolean;
  isNAN(data: any): Boolean;
  isFunction(data: any): Boolean;
  isArray(data: any): Boolean;
  isEmptyArray(data: Array<any>): Boolean;
  hasKey(data: object): Boolean;
}
