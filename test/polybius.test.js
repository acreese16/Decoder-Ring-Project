// Write your tests here!

const expect  = require("chai").expect;
const { polybius } = require("../src/polybius");

describe("polybius", () => {
    it("should maintain spaces", () => {
        expect(polybius("Hello world")).to.equal("3251131343 2543241341");
    });

    it("should ignore capitalized letters", () => {
        expect(polybius("HELLO")).to.equal("3251131343");
    });

    it("should output a string when encoding", () => {
        expect(polybius("thinkful")).to.equal("4432423352125413");
    });

    it("should return false if number characters are odd", () => {
        expect(polybius("44324233521254134", false)).to.equal(false);
    });

    it("should return 'i' and 'j' when decoding", () => {
        expect(polybius("4432423352125413", false)).to.equal("th(i/j)nkful");
    });

    it("should return 42 when encoding 'i' and 'j'", () => {
        expect(polybius("i just")).to.equal("42 42543444");
    });

    it("should output a string when decoding", () => {
        expect(polybius("3251131343 2543241341", false)).to.equal("hello world");
    });
})