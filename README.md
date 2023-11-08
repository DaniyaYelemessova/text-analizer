Describe: numberOfOccurrencesInText()

Test: "It should return 0 occurrences of a word for an empty string."
Code:
const text = "";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 0

Test: "It should return 1 occurrence of a word when the word and the text are the same."
Code:
const text = "red";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 1

Test: "It should return 0 occurrences of a word when the word and the text are different."
Code:
const text = "red";
const word = "blue";
numberOfOccurrencesInText(word, text);
Expected Output: 0

Test: "It should return the number of occurrences of a word."
Code:
const text = "red blue red red red green";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 4

Test: "It should return a word match regardless of case."
Code:
const text = "red RED Red green Green GREEN";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3

Test: "It should return a word match regardless of punctuation."
Code:
const text = "Red! Red. I like red, green, and yellow.";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3

Test: "it should return the string"
Code:
const text = "hello there"
offensiveWordCleaner(text);
Expected output: "hello there"

Test: "it should return an empty string"
Code:
const text = ""
offensiveWordCleaner(text);
Expected output: ""


Test: "it should omits offensive words from the text passage"
Code:
const text = "You, zoinks! how dare you come here!";
offensiveWordCleaner(text);
Expected output: "You,...! how dare you come here!"

Test: "it should omits offensive words from the text passage"
Code:
const text = "You, muppeteer zoinks biffaroni fklgjhkl! loopdaloop";
offensiveWordCleaner(text);
Expected output: "You, fklgjhkl!"



Test: "It should delete offensive words regardless of case."
Code:
const text = "You, MUPPETEER ZOINKS BifFARONI fklgjhkl! lOOPdaloop";
offensiveWordCleaner(text);
Expected output: "You, fklgjhkl!"