// myEach: Iterates over array or object and calls the callback on each value
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let item of collection) {
        callback(item);
      }
    } else {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          callback(collection[key]);
        }
      }
    }
    return collection;
  }
  
  // myMap: Creates a new array populated with the results of calling a callback on every element or object value
  function myMap(collection, callback) {
    let newArr = [];
    if (Array.isArray(collection)) {
      for (let item of collection) {
        newArr.push(callback(item));
      }
    } else {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          newArr.push(callback(collection[key]));
        }
      }
    }
    return newArr;
  }
  
  // myReduce: Reduces an array or object to a single value, optionally starting with an initial value
  function myReduce(collection, callback, acc) {
    let start = 0;
    let values = Array.isArray(collection) ? collection : Object.values(collection);
  
    if (acc === undefined) {
      acc = values[0];
      start = 1;
    }
  
    for (let i = start; i < values.length; i++) {
      acc = callback(acc, values[i], collection);
    }
    return acc;
  }
  
  // myFind: Returns the first element that satisfies the provided testing function
  function myFind(collection, callback) {
    let values = Array.isArray(collection) ? collection : Object.values(collection);
  
    for (let item of values) {
      if (callback(item)) {
        return item;
      }
    }
    return undefined;
  }
  
  // myFilter: Returns a new array of all elements that pass the test implemented by the callback
  function myFilter(collection, callback) {
    let result = [];
    let values = Array.isArray(collection) ? collection : Object.values(collection);
  
    for (let item of values) {
      if (callback(item)) {
        result.push(item);
      }
    }
    return result;
  }
  
  // mySize: Returns the number of elements in an array or the number of enumerable properties in an object
  function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
  }
  
  // myFirst: Returns the first element or the first n elements of an array
  function myFirst(collection, n = 1) {
    return n === 1 ? collection[0] : collection.slice(0, n);
  }
  
  // myLast: Returns the last element or the last n elements of an array
  function myLast(collection, n = 1) {
    return n === 1 ? collection[collection.length - 1] : collection.slice(-n);
  }
  
  // myKeys: Retrieves all the names of the object's own enumerable properties
  function myKeys(object) {
    return Object.keys(object);
  }
  
  // myValues: Retrieves all the values of the object's own properties
  function myValues(object) {
    return Object.values(object);
  }
  
  // Exporting all functions if using a module system like Node.js
  module.exports = {
    myEach,
    myMap,
    myReduce,
    myFind,
    myFilter,
    mySize,
    myFirst,
    myLast,
    myKeys,
    myValues,
  };
  