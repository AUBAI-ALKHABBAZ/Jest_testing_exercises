const { default: expect } = require("expect");
const say = require("../say");
test("Say Jest Message",()=>{
    expect(say()).toBe("Hello Jest")
});