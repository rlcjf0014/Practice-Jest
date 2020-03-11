import functions from "./functions";

//* toBe
test("Adds 2 + 2 to equal 4", () => {
    expect(functions.add(2,2)).toBe(4);
});

//* not toBe
test("Adds 2 + 2 to NOT equal 5", () => {
    expect(functions.add(2,2)).not.toBe(5);
});

//* to be Null
test("Should be null", () => {
    expect(functions.isNull()).toBeNull();
});

//* to be Falsy
test("Should be falsy", () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
});

//* toEqual
test("User should be Joshua Song", () => {
    expect(functions.createUser()).toEqual({
        firstName: "Joshua",
        lastName: "Song"
    });
});

//! toBe is for a primitive type. 
//? toEqual is for reference type such as array and object.

//* Less than and greater than
test("Should be under 1600", () => {
    const load1 = 800;
    const load2 = 800;
    expect (load1 + load2).toBeLessThanOrEqual(1600);
})

//* Regex
test("There is no I in team", () => {
    expect("team").not.toMatch(/I/);
})

//* Arrays
test("Admind should be in usernames", () => {
    const usernames = ["David", "Karen", "John", "Admin"];
    expect(usernames).toContain("David");
})

//* Working with async data
// test("User fetched name should be 이정도", () => {
//     expect.assertions(1);
//     return functions.fetchUser().then(
//     data => expect(data.name).toEqual("이정도")
//     )
// })

//* Async Await
test("User fetched name should be 이정도", async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    console.log(data.name);
    expect(data.name).toEqual("이정도");
})