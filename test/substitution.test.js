// Write your tests here!

const expect = require("chai").expect;
const {substitution} = require("../src/substitution");

describe("substitution", () => {
    it("should maintain spaces", () => {
        expect(substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")).to.equal("elp xhm xf mbymwwmfj dne");
    });

    it("should ignore capital letters", () => {
        expect(substitution("HELLO", "xoyqmcgrukswaflnthdjpzibev")).to.equal("rmwwl");
    });

    it("should maintain special characters", () => {
        expect(substitution("message", "$wae&zrdxtfcygvuhbijnokmpl")).to.equal("y&ii$r&");
    });

    it("should encode the message", () => {
        expect(substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")).to.equal("jrufscpw");
    });

    it("should decode a message", () => {
        expect(substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false)).to.equal("message");
    });

    it("should return false if alphabet parameter doesn't have unique characters", () => {
        expect(substitution("Thinkful", "abcabcabcabcabcabcabcabcyz")).to.equal(false);
    });

    it("should return false if there isn't exactly 26 characters in the alphabet", () => {
        expect(substitution("hello", "asfjlketo")).to.equal(false);
    });

    it("should return false if there is no alphabet parameter", () => {
        expect(substitution("hello")).to.equal(false);
    });

})