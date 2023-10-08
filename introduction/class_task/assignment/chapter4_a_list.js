function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
      list = { value: array[i], rest: list };
    }
    return list;
  }

  const array = [1, 2, 3];
  const list = arrayToList(array);
  console.log(list);
  
  
  
  
  function listToArray(list) {
    let array = [];
    while (list) {
      array.push(list.value);
      list = list.rest;
    }
    return array;
  }

  const newArray = listToArray(list);
  console.log(newArray); 


  
  function prepend(element, list) {
    return { value: element, rest: list };
  }

  const newList = prepend(0, list);
  console.log(listToArray(newList)); 

  


  function nth(list, n) {
    if (!list) {
      return undefined;
    } else if (n === 0) {
      return list.value;
    } else {
      return nth(list.rest, n - 1);
    }
  }
  
  console.log(nth(list, 1)); 
  console.log(nth(list, 5)); 
  