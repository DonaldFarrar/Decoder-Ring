// Write your tests here!
const expect = require('chai').expect;
const {caesar} = require('../src/caesar');

describe('caesar', () => {
    it('Should see if the function exist', () => {
        const expected = undefined;
        const actual = undefined;
        expect(expected).to.equal(actual);
    });
   
    it("should encode correctly", () => {
		expect(caesar("thinkful", 3)).to.equal("wklqnixo");
	});
    it("Should return false if the is no shift provided", () => {
      expect(caesar("thinkful")).to.equal(false);  
    });
    it("Should return false if the shift > 25", () => {
        expect(caesar("thinkful", 99)).to.equal(false);
    });
    it("Should return false in the shift < -26", () => {
        expect(caesar("thinkful", -26)).to.equal(false);
    })
})