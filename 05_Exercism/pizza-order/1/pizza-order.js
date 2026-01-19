/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  // throw new Error('Remove this line and implement the function');
 
  let food ={
    'Margherita': 7,
'Caprese': 9,
'Formaggio': 10
  }
  function extra(arr) {
    let cost=0;
    if(arr.length==0)
      return 0;
    cost += (arr[0]=="ExtraToppings"?2:1);

    return cost + extra(arr.slice(1));
  }
  return food[pizza]+extra(extras);
}

/**
 * Calculate the price of the total order, given individual orders
 
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  // throw new Error('Remove this lin and implement the function');

  return pizzaOrders.reduce((price,order)=>{
    return price+ pizzaPrice(order.pizza, ... order.extras);
  },0)
}
