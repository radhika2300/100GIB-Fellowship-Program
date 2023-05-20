function printDownwardTrianglePattern(rows) {
    for (let i = rows; i >= 1; i--) {
      let pattern = "";
      for (let j = 1; j <= i; j++) {
        pattern += "*";
      }
      console.log(pattern);
    }
  }
  
  // Example usage
  printDownwardTrianglePattern(5);
  