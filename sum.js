/*
    JSDoc
    The sum function
    [1] Return 0 if no number Passed
    [2] Return the number iif its only the number passed
    [3] if there are 2 numbers it Add number 1 + 2
    [4] if there are 2 numbers it Add number 1 + 2 +3
    [5] if you have any Number of Number it will sum all the numbers
*/
const theSum=(...args)=>{
    return args.reduce((pv,cv)=>pv+cv,0);
};
module.exports=theSum; 
