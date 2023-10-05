

const theFilter = require("../input");

describe(" validate the input field", () => {
    test("check if Name is empty", () => {
        expect(theFilter()).toBe("Unknown");
    })

    test("check for spaces(start+end)", () => {
        expect(theFilter(" Osama ")).toBe("Osama");
    })
    test("if name length > 10 Characters", () => {
        expect(theFilter("Osama_mohammad_alsaid")).toBe("Osama_moha");
    })
    test("check the name not starts with underscore", () => {
        expect(theFilter("_Osama")).toBe("Osama");
    })

})