function findMostFrequent(arr) {
    let frequencyMap = {};
    let maxFrequency = 0;

    // частота
    for (let num of arr) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
        maxFrequency = Math.max(maxFrequency, frequencyMap[num]);
    }

    // найбільш(е/і)
    let mostFrequentNumbers = [];
    for (let num in frequencyMap) {
        if (frequencyMap[num] === maxFrequency) {
            mostFrequentNumbers.push(parseInt(num));
        }
    }

    if (mostFrequentNumbers.length === 1) {
        console.log("Найчастіше число:", mostFrequentNumbers[0]);
        console.log("Кількість входжень:", maxFrequency);
    } else {
        console.log("Найчастіші числа:");
        for (let num of mostFrequentNumbers) {
            console.log("Число:", num);
            console.log("Кількість входжень:", maxFrequency);
        }
    }
}

let randomArray = [];
let randomNumber = Math.floor(Math.random() * 101);
for (let i = 0; i < randomNumber; i++) {
    randomArray.push(Math.floor(Math.random() * 10)); 
}

console.log("Випадковий масив цілих чисел:", randomArray);
findMostFrequent(randomArray);