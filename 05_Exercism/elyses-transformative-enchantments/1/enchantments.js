// @ts-check

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export function seeingDouble(deck) {
  // throw new Error('Implement the seeingDouble function');
  return deck.map((el)=>el*2)
}

/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with triplicate 3s
 */
export function threeOfEachThree(deck) {
  // throw new Error('Implement the threeOfEachThree function');
  for(let i=0;i<deck.length;i++){
    if(deck[i]==3){
        deck.splice(i+1,0,3,3);
      i+=2;
    }
    
  }
  return deck
}

/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */
export function middleTwo(deck) {
  // throw new Error('Implement the middleTwo function');
  return [deck[deck.length/2-1],deck[(deck.length/2)]]
}

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @returns {number[]} transformed deck
 */

export function sandwichTrick(deck) {
  // throw new Error('Implement the sandwichTrick function');
  let i=deck.length/2;
  let l=deck.pop() , f=deck.shift();
  deck.splice(i-1,0,l,f);
  return deck;
  
}

/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */
export function twoIsSpecial(deck) {
  // throw new Error('Implement the twoIsSpecial function');
  for(let i=deck.length-1;i>=0;i--){
    if(deck[i]!=2)
      deck.splice(i,1);       
  }
  return deck
}

/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */
export function perfectlyOrdered(deck) {
  // throw new Error('Implement the perfectlyOrdered function');
    deck.sort((a, b) => a - b);
  return deck;
}

/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */
export function reorder(deck) {
  // throw new Error('Implement the reorder function'
  
  return deck.reverse();
}
