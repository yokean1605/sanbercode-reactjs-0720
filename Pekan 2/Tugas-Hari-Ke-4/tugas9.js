/**
 * Jawaban soal 1
 */

console.log("---- jawaban soal ke 1 ----");
const literalES6 = (firstName, lastName) => (
    {
        firstName: firstName,
        lastName: lastName,
        fullName: function () {
            console.log(firstName + " " + lastName)
            return
        }
    }
);

//Driver Code 
literalES6("William", "Imoh").fullName();

/**
 * Soal ke 2
 */

console.log('----- soal ke 2 ----');

const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}

const { firstName, lastName, destination, occupation, spell } = newObject;
console.log(firstName, lastName, destination, occupation, spell);

/**
 * Soal ke 3
 */

console.log('----- soal ke 3 ----');
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]

let combinedArray = [...west, ...east];
console.log(combinedArray);