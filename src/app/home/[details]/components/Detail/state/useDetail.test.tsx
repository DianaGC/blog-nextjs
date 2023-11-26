import { renderHook } from "@testing-library/react-hooks";
import { useDetailState } from "./useDetailState";

describe("useBlogState test", () => {
    const renderCustomHook = () =>
      renderHook(() =>
      useDetailState("001")
      );
  
    it("When custome hook is called then retun a blog ", () => {
      const { result } = renderCustomHook();
      expect(result.current.blog).toHaveLength;
    });
   
  });