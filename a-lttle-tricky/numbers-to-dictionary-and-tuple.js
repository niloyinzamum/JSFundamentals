//  Numbers to Dictionary and Tuple
// Task:
// You are given a list of numbers.

// Create a dictionary where:

// Keys are the numbers.

// Values are the string representation of those numbers (e.g., 1 → "one").

// Then, convert just the values (the words) into a tuple.

// Example:
// python
// Copy
// Edit
// Input: [1, 2, 3]
// Output:
// Dictionary: {1: "one", 2: "two", 3: "three"}
// Tuple: ("one", "two", "three")
// 💡 You can use a pre-defined mapping or implement the

// conversion logic to convert numbers to words.
function numbersToDictionaryAndTuple(numbers) {
    // Predefined mapping of numbers to words
    const numberToWord = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten"
    };

    // Create a dictionary from the numbers
    const dictionary = {};
    for (const number of numbers) {
        if (numberToWord[number]) {
            dictionary[number] = numberToWord[number];
        }
    }

    // Convert the values of the dictionary to a tuple
    const tuple = Object.values(dictionary);

    return { dictionary, tuple };
}
// Example usage:
const inputNumbers = [1, 2, 3, 4, 5];
const result = numbersToDictionaryAndTuple(inputNumbers);       
console.log("Dictionary:", result.dictionary);
console.log("Tuple:", result.tuple);
// Output: