// JavaScript Exercise: Student Grades Analysis
/* 1. Create an array that holds 8 grades (integers between 0 and 100) representing the scores of different students - level 1


/* 2. Log out how many grades there are - level 1 */

const numberOfGrades = [85, 92, 78, 63, 95, 88, 72, 54];

console.log(`The total number of grades in the class is ${numberOfGrades.length}`);

/* 3. Classify each grade into one of the following categories - level 2
A if the grade is 90 or above.
B if the grade is between 80 and 89.
C if the grade is between 70 and 79.
D if the grade is between 60 and 69.
F if the grade is below 60.*/

const grades = [85, 92, 78, 63, 95, 88, 72, 54];

function classificationGrades(grade){
    if (grade >= 90) return "A";
    else if (grade >= 80) return "B";
    else if (grade >= 70) return "C";
    else if (grade >= 60) return "D";
    else return "F";
}

const clasification = grades.map(classificationGrades)
console.log(clasification);

/* 4. Evaluate overall class performance - level 2
If the average grade is 90 or above, the class performance is Excellent.
    If the average grade is between 80 and 89, the performance is Good.
    If the average grade is between 70 and 79, the performance is Satisfactory.
    If the average grade is below 70, the performance is Needs Improvement. */

function classPerformance(performance) {
    const sumOfGrades = performance.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const averageOfGrades = sumOfGrades / performance.length;
    if (averageOfGrades >= 90) {
        return "Class performance is Excellent.";
    } else if (averageOfGrades >= 80) {
        return "Class performance is Good.";
    } else if (averageOfGrades >= 70) {
        return "Class performance is Satisfactory.";
    } else {
        return "Class performance needs Improvement.";
    }
}
console.log(classPerformance(grades));

/* Output:
The highest grade with its category.
    The lowest grade with its category.
    The average grade.
    A list of all grades with their corresponding categories. */


const highestGrade = Math.max(...grades);
const lowestGrade = Math.min(...grades);

console.log(`Highest Grade: ${highestGrade} (${classificationGrades(highestGrade)})`);
console.log(`Lowest Grade: ${lowestGrade} (${classificationGrades(lowestGrade)})`);

const averageGrade = grades.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / grades.length;
console.log(`Average Grade: ${averageGrade} (${classificationGrades(averageGrade)})`);

console.log("All Grades with Categories:");
clasification.forEach((category, index) => {
    console.log(`${grades[index]}: ${category}`);
});

// Treasure Hunter
//Log out how many moves there are in the island - level 1

const island = ['-', '-', '-', 'T', '-'];
console.log(`There are ${island.length} on the island`)

// For each move log the following out - level 2 If there is a treasure log out: Treasure found at move 3 :) If there is not a treasure log out: No treasure found :(

for (let move = 0; move < island.length; move++) {
    if (island[move] === 'T') {
        console.log(`Treasure found at move ${move + 1} :)`);
    } else {
        console.log(`No treasure found at move ${move + 1} :(`);
    }
}

//Log out how many treasures there are in the island - level 3

let countTreasure =0;
for(let treasure=0; treasure < island.length; treasure++) {
    if (island[treasure] === 'T') {
        countTreasure++;
    }
}

console.log(`There were ${countTreasure} treasure on this island`);

// Startup name generator

function getStartupName() {
    const firstWords = ["Fire", "Goo", "Lol", "Speed", "Slay", "Miv", "Pig", "Beetlegeuse"];
    const secondWords = ["Brothers", "Spirit", "Liars", "Monkeys", "Desktroopers", "Bobberino", "Driver", "Uncles"];

    const randomWord1 = Math.floor(Math.random() * firstWords.length);
    const randomWord2 = Math.floor(Math.random() * secondWords.length);

    const startupName = firstWords[randomWord1] + ' ' + secondWords[randomWord2];
    return startupName;
}

console.log(getStartupName())
console.log(getStartupName())