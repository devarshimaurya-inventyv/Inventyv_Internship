// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  // throw new Error('Remove this line and implement the function');
  
  
  return Number(String(array1.join('')))+Number(String(array2.join('')))
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  // throw new Error('Remove this line and implement the function');
  let cvalue = String(value).split('').reverse().join('');

  
  if(String(value)==(cvalue))
    return true;
  return false;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  // throw new Error('Remove this line and implement the function');
  if(input=='' || input==null || input ==undefined) 
  return 'Required field'
  const n =Number(input)

  if(Number.isNaN(n) || n ==0)
    return 'Must be a number besides 0'
  else
    return ''
}
