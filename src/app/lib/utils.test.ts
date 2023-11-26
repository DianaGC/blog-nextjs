import { getDate } from "./utils";

describe("utils", () => {
    
      it("When the function getDate recibe 1700972303 then show 1970-01-20 ", () => {
        expect(getDate(1700972303)).toEqual("1970-01-20");
        
      });

})