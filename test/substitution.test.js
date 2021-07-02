// Write your tests here!
// const substitution = require("../src/substitution")
const expect = require("chai").expect
const {substitution} = require("../src/substitution");

describe("substitution", () => {
    it('Should see if the function exist', () => {
        const expected = undefined;
        const actual = undefined;
        expect(expected).to.equal(actual);
    });
    it("Correct message should print when encoded", () => {
        const input = 'thinkful';
        const alphabet =  'xoyqmcgrukswaflnthdjpzibev';

        const expected = 'jrufscpw';
        const actual = substitution(input, alphabet);
        expect(actual).to.equal(expected);
    });
    it("Should return a decoded message if the if encodes parameter is false", () => {
        const input = "You are an excellent spy";
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";

        const expected = 'cbi mhy mp yafyooypq kuc';
        const actual = substitution(input, alphabet, false);

         expect(actual).to.equal(expected);

    });
});