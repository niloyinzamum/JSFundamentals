// You are given an unsorted array of student objects, each containing a roll and marks.
// Write a function to return the student who has the middle roll number, when the array is sorted by roll.

// Input Example (Unsorted):
// js
// Copy
// Edit
// [
//   { roll: 12, marks: 88 },
//   { roll: 5, marks: 75 },
//   { roll: 9, marks: 92 },
//   { roll: 3, marks: 64 },
//   { roll: 7, marks: 70 }
// ]
// Expected Output:
// js
// Copy
// Edit
// { roll: 7, marks: 70 } // since sorted rolls: [3, 5, 7, 9, 12], middle is roll 7
function findMiddleStudent(students) {
    // Sort the students array by roll number
    students.sort((a, b) => a.roll - b.roll);
    
    // Calculate the middle index
    const middleIndex = Math.floor(students.length / 2);
    
    // Return the student at the middle index
    return students[middleIndex];
}
// Example usage:
const students = [
    { roll: 12, marks: 88 },
    { roll: 5, marks: 75 },
    { roll: 9, marks: 92 },
    { roll: 3, marks: 64 },
    { roll: 7, marks: 70 }
];
const middleStudent = findMiddleStudent(students);
console.log(middleStudent); // Output: { roll: 7, marks: 70 }
// This function sorts the array of student objects by their roll numbers and then finds the middle student
// based on the sorted order. The middle index is calculated using `Math.floor` to ensure
// it works correctly for both even and odd lengths of the array. The sorted array is used  