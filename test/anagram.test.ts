import anagram from "../src/anagram";

test ("anagram function exists", () => {
    expect(anagram).toBeDefined()
});

test ("Check if Below is an anagram of Elbow", () => {
    const result:boolean = anagram("Below", "Elbow");
    expect(result).toBeTruthy();
});

test ("Check if Joshua is an anagram of David", () => {
    const result:boolean = anagram("Joshua", "David");
    expect(result).toBeFalsy();
});