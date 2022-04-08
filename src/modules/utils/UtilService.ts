export interface UtilService {
  hasOwn(objects: object, data: string): Boolean;
  isFalse(data: any): Boolean;
  isObject(data: any): Boolean;
  isString(data: any): Boolean;
  isNumber(data: any): Boolean;
  isUndefined(data: any): Boolean;
  isNAN(data: any): Boolean;
  isFunction(data: any): Boolean;
  isArray(data: any): Boolean;
  isEmptyArray(data: Array<any>): Boolean;
  hasKey(data: object): Boolean;
}
