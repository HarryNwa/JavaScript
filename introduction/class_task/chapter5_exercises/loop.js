function loop(value, testFunc, updateFunc, bodyFunc) {
    while (testFunc(value)) {
      bodyFunc(value);
      value = updateFunc(value);
    }
  }
  
  // Example usage:
  loop(
    3,             // Initial value
    (n) => n > 0,  // Test function
    (n) => n - 1,  // Update function
    (n) => {
      console.log(n);
    }             // Body function
  );
  