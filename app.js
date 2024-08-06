const fs = require('fs');

const genders = ['M', 'F'];
const maleNames = ['John', 'Peter', 'Steve', 'Mike', 'Robert'];
const femaleNames = ['Anna', 'Susan', 'Emily', 'Kate', 'Laura'];
const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones'];

const randChoice = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
};

let people = [];

for (let i = 0; i < 20; i++) {
    let person = {};
    person.gender = randChoice(genders);

    if (person.gender === 'M') {
        person.firstName = randChoice(maleNames);
    } else {
        person.firstName = randChoice(femaleNames);
    }
    person.lastName = randChoice(lastNames);
    person.age = Math.floor(Math.random() * 61) + 18; 

    people.push(person);
}

const peopleJSON = JSON.stringify(people, null, 2);

fs.writeFile('people.json', peopleJSON, (err) => {
    if (err) {
        console.log('Something went wrong');
        throw err;
    }
    console.log('File has been successfully generated! Check people.json');
});
