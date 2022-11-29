// Code your solution here
function findMatching(arr, query) {
    return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
  }


function fuzzyMatch(arr, query) {
    return arr.filter((el) => el.substring(0,2).toLowerCase().includes(query.substring(0,2).toLowerCase()));
  }

function matchName(collection, value) {
    return collection.filter((driver) => {return driver.name === value});
   
}