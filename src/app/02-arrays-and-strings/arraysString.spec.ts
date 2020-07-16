import{getCurrencies} from './getCurrencies';
import { greet} from './greet'

describe("Currency and Greet Check", ()=>{

    it("Should greet with correct name",()=>{
        const result = greet('vignesh');
        expect(result).toContain('vignesh');
    });

    it("Should return correct currency",()=>{
      
    });

})