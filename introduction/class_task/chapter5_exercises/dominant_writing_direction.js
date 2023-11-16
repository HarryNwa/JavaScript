function dominantDirection(text) {
    // Helper function to extract the script direction for a character
    function characterScriptDirection(char) {
      const script = characterScript(char.codePointAt(0));
      return script ? script.direction : "none";
    }
  
    // Count the directions of characters in the text
    const directionCounts = countBy(text, characterScriptDirection);
  
    // Find the dominant direction
    const dominantDirection = Object.keys(directionCounts).reduce((a, b) =>
      directionCounts[a] > directionCounts[b] ? a : b
    );
  
    return dominantDirection;
  }
  
  // Example usage:
  console.log(dominantDirection("Hello, 你好, مرحبًا, שָׁלוֹם")); // "ltr" (left to right)
  console.log(dominantDirection("مرحباً بكم")); // "rtl" (right to left)
  