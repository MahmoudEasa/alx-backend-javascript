#!/usr/bin/node

/**
 * Modify the following function’s budget object to simply use the keyname instead.
*/

export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income,
    gdp,
    capita,
  };

  return budget;
}
