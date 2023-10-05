const { default: expect } = require("expect");
const theSum = require("../sum");
const { describe } = require("yargs");

    test("Return 0 if No Number",()=>{
        expect(theSum()).toBe(0);
        })

    test("Return The Number",()=>{
        expect(theSum(10)).toBe(10);
        })
    test("Return The Number One and Two",()=>{
            expect(theSum(15,25)).toBe(40);
        })
    
    test("Return The Number One , Two and three",()=>{
            expect(theSum(20,30,10)).toBe(60);
        })
    
    test("Return The Number One , Two ,three and four",()=>{
            expect(theSum(20,30,10,10)).toBe(70);
        })
    
    test("Return The  sum result of all numbers",()=>{
            expect(theSum(1,9,10,40,20,10,100,10)).toBe(200);
        })
    



/*describe(" if more than one numbers",()=>{

    test("Return The Number One and Two",()=>{
        expect(theSum(15,25)).toBe(40);
    })

    test("Return The Number One , Two and three",()=>{
        expect(theSum(20,30,10)).toBe(60);
    })

    test("Return The Number One , Two ,three and four",()=>{
        expect(theSum(20,30,10,10)).toBe(70);
    })

        test("Return The  sum result of all numbers",()=>{
        expect(theSum(1,9,10,40,20,10,100,10)).toBe(200);
    })


})*/
//console.log([].reduce((a,b)=>a+b,1));