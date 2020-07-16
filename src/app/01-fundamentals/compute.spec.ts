import {compute} from "./compute"

describe("Compute",() =>{
    it("It Should return 0 if -ve number is passed" , ()=>{
        const result = compute(-1);
        expect(result).toBe(0);
    });

    it("It Should return number +1 if +ve number passed" , ()=>{
        const result = compute(1);
        expect(result).toBe(2);
    });

});