const { default: expect } = require("expect");
const allData = require("../all");
//const { test } = require("picomatch");

test("check if array contains 6 elemnets 1st method",() =>{

    expect(allData.length).toBe(6);

})
test("check if array contains 6 elemnets 2nd method",() =>{

    expect(allData).toHaveLength(6);

})
test("check if array contains Number 3",() =>{

    expect(allData).toContain(3);

})
test("check if array  not contains Number 9",() =>{

    expect(allData).not.toContain(9);

})
test("check if array  not contains Number Zero",() =>{

    for(let i =0;i<allData.length;i++){
        expect(allData[i]).not.toBe(0);

    }

})
test("check if array  contains only numbers 1st method",() =>{

    for(let i =0;i<allData.length;i++){
        expect(isNaN(allData[i])).toBeFalsy();

    }

    })
test("check if array  contains only numbers 2nd method",() =>{

    for(let i =0;i<allData.length;i++){
        expect(isNaN(allData[i])).toBe(false);

    }

})
test("check if array  contains only numbers 3nd method",() =>{

    for(let i =0;i<allData.length;i++){
        expect(isNaN(allData[i])).not.toBeTruthy();

    }

})
test("check if array first element is larger than 1",() =>{

    
    expect(allData[0]).toBeGreaterThanOrEqual(1);

    

})
test("check if array first element is less than 5",() =>{

    
    expect(allData[0]).toBeLessThanOrEqual(5);

    

})
test("check if Given value is Undefine",() =>{
    let a ;
    
    expect(a).toBeUndefined();

})
test("check for substring inside string by RegExp",() =>{
    let myString = "I love Coding"
    
    expect(myString).toMatch(/Coding/);

})
test("check for property age in object",() =>{
    let myObject = {

        name:'Aubai',
        age: 28,

    };
    
    expect(myObject).toHaveProperty("age");

})
test("check for property age value  is 28",() =>{
    let myObject = {

        name:'Aubai',
        age: 28,

    };
    
    expect(myObject).toHaveProperty("age",28);

})
expect.extend({
    toBeLargerThan(received,target){
        const pass = received > target ;
        if(pass){
            return {
                message:() =>`Error: Expected ${received} to be larger ${target} `,
                pass: true
            };
        }
        else{
            return {
                message:() =>`Error: Expected ${received} to be larger than ${target}`,
                pass: false,
            };

        }
    }

})
test("check the number if larger than  other number !",() =>{
    expect(10).toBeLargerThan(9);
})
expect.extend({
    toBeBetween(received, start,end){
        const pass = received > start && received < end;
        if(pass){
            return {
                message :()=> `Expected ${received} to Be Between ${start} And ${end}`,
                pass : true,
            }
        }
        else{
            return{
                message :()=> `Expected ${received} to Be Between ${start} And ${end}`,
                pass : false,  
            }
        }
    }
})
test("check if year is Between Years range",()=>{
    expect(2000).toBeBetween(1990,2020);

})
// expect.anythings()=> anything but Underfined + null
test("Expect Anything",()=>{
    let x = "A";
    expect("Aubai").toEqual(expect.anything());
    expect(1).toEqual(expect.anything());
    expect([1,2,3,4]).toEqual(expect.anything());
    expect(x).toEqual(expect.anything());

})
// expect.any(constructor) => 
test("expect any constructor ",()=>{
    expect(10).toEqual(expect.any(Number));


})
// expect.arrayContaining(array) => 
test("Expect array to be found in the main array ",()=>{
    const myArray=[1,2,3,4,5];
    expect(myArray).toEqual(expect.arrayContaining([1,3]));


})
