// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  // throw new Error('Remove this line and implement the function');
  switch(name){
    case "Pure Strawberry Joy" :
      return 0.5
    case "Energizer" :
      return 1.5
      case "Green Garden" :
      return 1.5
      case "Tropical Island" :
      return 3
      case "All or Nothing" :
      return 5
      default :
      return 2.5
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  // throw new Error('Remove this line and implement the function');
  let c=0;
  let i;
  for( i=0;i<limes.length && c<wedgesNeeded;i++){
      let x= limes[i];
      switch(x){
        case "small":
          c+=6;
          break;
        case "medium":
          c+= 8;
          break;
        case "large":
          c+=10;
      }
  }
  return i;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  // throw new Error('Remove this line and implement the function'
  console.log("arr : ",orders)
  console.log("timeleft : ",timeLeft)
  
  let i=0;
  for(;i<orders.length && timeLeft>0;i++){
    let s =orders[i];
        switch(s){
    case "Pure Strawberry Joy" :
      timeLeft -= 0.5
            break;
    case "Energizer" :
      timeLeft -= 1.5
                 break;
      case "Green Garden" :
      timeLeft -= 1.5
                 break;
      case "Tropical Island" :
      timeLeft -= 3
                 break;
      case "All or Nothing" :
      timeLeft -= 5
                 break;
          default:
      timeLeft -= 2.5;
       
            
      
  }
  
  }
    return (i==orders.length)?[]:orders.splice(i);
  
}
