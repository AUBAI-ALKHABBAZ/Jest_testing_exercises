const mocker =require("../mock");


test("mock function",()=> {
    const mocker = jest.fn((name) =>`Hello ${name}`);
    expect(mocker("Aubai")).toBe("Hello Aubai");
    expect(mocker("Aya")).toBe("Hello Aya");
    expect(mocker("Sayed")).toBe("Hello Sayed");
    expect(mocker).toHaveBeenCalled();
    expect(mocker).toHaveBeenCalledTimes(3);
    //expect(mocker).toHaveBeenCalledWith("Bob");
    expect(mocker).toHaveBeenCalledWith("Aubai");

    expect(mocker).toHaveBeenLastCalledWith("Sayed");
})
