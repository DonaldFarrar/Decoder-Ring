// Write your tests here!
const {polybius} = require("../src/polybius")
const expect = require("chai").expect

describe("polybius", () => {
    it('Should see if the function exist', () => {
        const expected = undefined;
        const actual = undefined;
        expect(expected).to.equal(actual);
    });
	it("Message will be encoded", () => {
    expect(polybius("thinkful")).to.equal("4432423352125413");
    });
    it("Message will be decoded", () => {
    expect(polybius("4432423352125413", false)).to.equal("th(i/j)nkful");
    });
	it("If the number of characters is an odd number without spaces return false", () => {
	expect(polybius("44324233521254134", false)).to.equal(false);
	});
	it("Message should still work even if it has spaces", () => {
    expect(polybius("hello world")).to.equal("3251131343 2543241341");
	});
});