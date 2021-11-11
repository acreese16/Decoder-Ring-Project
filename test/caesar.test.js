// Write your tests here!

const expect  = require("chai").expect;
const { caesar } = require("../src/caesar");

describe("caesar", () => {
    it("should return false if shift is not present", () => {
        expect(caesar("thinkful")).to.equal(false);
    });

    it("should return false if shift amount is 0", () => {
        expect(caesar("thinkful", 0)).to.equal(false);
    });

    it("should return false if the shift amount is greater than 25", () => {
        expect(caesar("thinkful", 99)).to.equal(false);
    });

    it("should return false if the shift amount is less than 25", () => {
        expect(caesar("thinkful", -26)).to.equal(false);
    });
  
    it("should maintain spaces and symbols", () => {
        const actual = caesar("is a secret message!", 8);
        const expected = "qa i amkzmb umaaiom!";
        expect(actual).to.be.equal(expected);
    });

    it("should ignore capitalized letters", () => {
        const actual = caesar("THIS", 8);
        const expected = "bpqa";
        expect(actual).to.be.equal(expected);
    });

    it("should shift to the right if positive number", () => {
        const actual = caesar("thinkful", 3);
        const expected = "wklqnixo";
        expect(actual).to.be.equal(expected);
    });

    it("should shift to the left if negative number", () => {
        const actual = caesar("thinkful", -3);
        const expected = "qefkhcri";
        expect(actual).to.equal(expected);
    });
  
    it("should loop around the alphabet at the beginning and end", () => {
        const actual = caesar("zaybxc", 3);
        const expected = "cdbeaf";
        expect(actual).to.be.equal(expected);
    });
  
    it("should decode a message", () => {
        const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
        const expected = "this is a secret message!";
        expect(actual).to.equal(expected);
    });
 
})