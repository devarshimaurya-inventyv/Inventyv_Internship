// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

import { ElectronicDevice } from './lib.js';

/**
 * Checks if input is a boolean.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is a boolean
 */
export function isBoolean(value) {
  // throw new Error('Remove this line and implement the isBoolean function');
  return typeof value === 'boolean';
}

/**
 * Checks if input is a finite number or bigint.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is a finite number or bigint
 */
export function isNumber(value) {
  // throw new Error('Remove this line and implement the isNumber function')
   if (typeof value === 'bigint') return true;
  return typeof value === 'number' && Number.isFinite(value);
  
}

/**
 * Checks if a value is an object.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is an object.
 */
export function isObject(value) {
  // throw new Error('Remove this line and implement the isObject function');
  return typeof value === 'object' && value !== null;
  
}

/**
 * Checks if a value is a numeric string.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is a numeric string.
 */
export function isNumericString(value) {
  // throw new Error(
    // 'Remove this line and implement the isNumericString function',
  // );
  if (typeof value !== 'string') return false;
  return /^-?\d+$/.test(value);
      
}

/**
 * Checks if an object is an instance of the `ElectronicDevice` class or one of its children.
 *
 * @param {object} object
 * @returns {boolean} whether the object is an instance of the `ElectronicDevice` class or one of its children.
 */
export function isElectronic(object) {
  // throw new Error('Remove this line and implement the isElectronic function');
  return object instanceof ElectronicDevice
}

/**
 * Checks if a value is a non empty array.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is a non empty array.
 */
export function isNonEmptyArray(value) {
  // throw new Error(
  //   'Remove this line and implement the isNonEmptyArray function',
  // );

  return Array.isArray(value) && value.length > 0;
}

/**
 * Checks if a value is an empty array.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is an empty array.
 */
export function isEmptyArray(value) {
  // throw new Error('Remove this line and implement the isEmptyArray function');
  return Array.isArray(value) && value.length === 0;
  
}

/**
 * Checks if a value has a "type" property or method.
 *
 * @param {object} object
 * @returns {boolean} whether the input has a "type" property or method.
 */
export function hasType(object) {
  // throw new Error('Remove this line and implement the hasType function');\
   if (object == null) return false;

  // own property
  if (Object.hasOwn(object, 'type')) return true;

  // prototype method
  return typeof object.type === 'function';

}

/**
 * Throws an error if an object is missing an "id" property or method.
 *
 * @param {object} object
 * @returns {never|void} undefined if the input has an "id" property or method, otherwise throws an error.
 */
export function assertHasId(object) {
  // throw new Error('Remove this line and implement the assertHasId function');
  
    if (!('id' in object)) {
    throw new Error("Object is missing the 'id' property");
  }
  
}

/**
 * Checks if a value has an "id" property.
 *
 * @param {object} object
 * @returns {boolean} whether the input has an "id" property.
 */
export function hasIdProperty(object) {
  // throw new Error('Remove this line and implement the hasIdProperty function');
  
  return Object.hasOwn(object, 'id');
}

/**
 * Checks if a value has a defined "type" property.
 *
 * @param {object} object
 * @returns {boolean} whether the input has a defined "type" property.
 */
export function hasDefinedType(object) {
  // throw new Error('Remove this line and implement the hasDefinedType function');
  return (
    object != null &&
    Object.hasOwn(object, 'type') &&
    object.type !== undefined
  );
}
