/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/
function calculateTotalSpentByCategory(transactions) {

  // algorithm
  // create an empty object categoryTotals for storing all categories 
  // Loop through all transactions, eg for of loop
  // extract category, price from transaction
  // check if category is already exist then update its price otherwise add to categoryTotals
  // categoryTotals[category] = price , for new category
  // convert categoryTotals into array of objects
  // return array of objects

  const categoryTotals = {}

  for (const transaction of transactions) {
    const {category, price} = transaction

    if(categoryTotals[category]){
      categoryTotals[category] +=price
    }else{
      categoryTotals[category] =price
    }
  }

  // Convert result into desired format (array of objects)
  return Object.entries(categoryTotals).map((([category, totalSpent])=>({
    category,
    totalSpent
  })))
}
// Example usage
const transactions = [
  {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	},
  {
    id:2,
    timestamp:1656076800500,
    price:15,
    category:'Clothing',
    itemName:'Shirt'
  }
]

console.log(calculateTotalSpentByCategory(transactions))
module.exports = calculateTotalSpentByCategory;
