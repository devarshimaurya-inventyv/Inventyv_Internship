/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(time) {
    if(time==undefined)
      return 'You forgot to set the timer.'
    else if(time==0)
      return 'Lasagna is done.'
    else
      return 'Not done, please wait.'
}

export function preparationTime(layers,time) {
    let s=layers.length;
    return (time==undefined)?s*2:s*time
    
}

export function quantities (layers) {
    let n=0,s=0;
  for(let e of layers){
    if(e=="sauce")s+=.2;
    else if(e=="noodles")
      n+=50
  }
  return {
    "noodles":n,
    "sauce":s
  }
}

export function addSecretIngredient  (friendsList, myList) {
   myList.push(friendsList.at(-1))
}

export function scaleRecipe  (recipe, scale) {
  const cpy =structuredClone(recipe)  ;
  for(let k in recipe){
    cpy[k] = cpy[k]*(scale/2)
  }
  
  return cpy;
}