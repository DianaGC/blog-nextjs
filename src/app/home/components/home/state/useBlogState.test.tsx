import { renderHook } from "@testing-library/react-hooks";
import { useBlogState } from "./useBlogState";

describe("useBlogState test", () => {
    const renderCustomHook = () =>
      renderHook(() =>
      useBlogState()
      );
  
    it("When custome hook is called then retun list of objs ", () => {
      const { result } = renderCustomHook();
  
      expect(result.current.blogs).toHaveLength;
    });
  
   
  });