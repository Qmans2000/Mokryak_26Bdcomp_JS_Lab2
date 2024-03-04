function countWordsInSentences(text) {
    const sentences = text.split(/[.!?]/);
    
    for (let i = 0; i < sentences.length; i++) {
      const words = sentences[i].trim().split(/\s+/);
      const wordCount = words.length;
      console.log(`Речення ${i + 1}: ${wordCount} слів`);
    }
  }
  
  const inputText = prompt("Введіть текст:");
  countWordsInSentences(inputText);
  