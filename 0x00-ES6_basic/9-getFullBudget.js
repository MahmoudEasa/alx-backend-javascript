#!/usr/bin/node

/**
 * Rewrite getFullBudgetObject to use ES6 method properties in the fullBudget object
*/

import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars: (income) => `$${income}`,
    getIncomeInEuros: (income) => `${income} euros`,
  };

  return fullBudget;
}
