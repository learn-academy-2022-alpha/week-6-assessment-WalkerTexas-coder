// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.
// a describe method that lists the name of the function OR naming of the particular test.
describe("profileArray", () => {
  const people = [
    { name: "ford prefect", occupation: "a hitchhiker" },
    { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
    { name: "arthur dent", occupation: "a radio employee" }
  ]
  // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
  // a test/it method, nested within the describe block, that in plain words, describes that the function does.
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {

    //an expect method, nested within the test block, calling on the profileArray() function, followed by the .toEqual() matcher that checks the expected output of the function return.
    expect(profileArray(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})


// RED
//  ● profileArray › takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// ReferenceError: profileArray is not defined


// b) Create the function that makes the test pass.
// create a function that takes in an array as a parameter
// store a mapped array to a variable to be returned later
//within scope of map
  // split the name of each value into an array, split at individual words
    // store the new array of nameStrings on a varaiable
  //map over the new array of nameStrings isolating the first letter of each value and capitalizing it
    // return the capitalized letter onto a sliced verzion of the word it used to belong too
  // return the array of capitalized words joined with a space and conctenated or interporlated
// return the variable of the original mapped array

const profileArray = (arr) => {
  let mappedArr = arr.map((obj)=>{
    // recieved object
    let splitName = obj.name.split(" ")
    let firstName = splitName[0]
    let firstNameCaptialized = firstName[0].toUppercase() + splitName[0].slice(1)
    let lastName = splitName[1][0].toUppercase() + splitName[1].slice(1)
    let mappedCapitalizedName = splitName.map(string=> string[0].toUpperCase() + string.slice(1))
    return `${mappedCapitalizedName.join(" ")} is ${obj.occupation}.`
  })
  return mappedArr
}


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]


// b) Create the function that makes the test pass.


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125


// b) Create the function that makes the test pass.
