// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  // 🚨 Use .forEach
  // throw new Error('Implement the cardTypeCheck function');
  let c=0;
  stack.forEach((n,i)=>{
    if(n==card)
      c++;
  })
  return c;
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  // 🚨 Use a `for...of` loop
  // throw new Error('Implement the determineOddEvenCards function');
  console.log(stack , type);
  let e=0 , o=0;
  for(let i of stack){
    if(type)
      i%2==0?e++:0;
    else
      i%2!=0?o++:0;
  }
  return type?e:o;
}
