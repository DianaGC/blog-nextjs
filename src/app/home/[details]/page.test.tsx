import BlogDetails from "./page";
import { render, screen } from "@testing-library/react";

describe("BlogDetails Component", () => {
    const renderComponent = () =>
        render(
            <BlogDetails params={{ id: 'test' }}  />
        );
    
      it("When the BlogDetails component is rendered then it should render Card component", () => {
        renderComponent();
        expect(screen.getByRole("heading")).toBeDefined
      });

})