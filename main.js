/* 
👉 Write your kata here!
*/

//👉 Write the function your CodeWarriors will start with below here:

// A bus can hold twentyfive passengers, allowing twentyfive people to travel around. Given i number of people, return how many buses are needed to seat everyone comfortably.

// For example, howManyBuses(25) should return 1, and howManyBuses(51) should return 3.

/*function howManyBuses(i) {
    const howManyBuses = 25; // 25 people per bus (i=25)
    const totalBuses = Math.ceil(i / howManyBuses); // Math.ceil rounds up to the nearest whole number

    return totalBuses;
};
console.log(howManyBuses(52));*/

// Party Buses.
// A party bus can hold 25 passengers, allowing 25 people to travel. Given (numberOfPeople), return how many buses are needed to seat everyone.
function howManyBuses(numberOfPeople)   {
    const busCapacity = 25; // 25 people per bus
    return Math.ceil(numberOfPeople / busCapacity); // Math.ceil rounds up to the nearest whole number

}
console.log(howManyBuses(60));
console.log(howManyBuses(108));
console.log(howManyBuses(248));