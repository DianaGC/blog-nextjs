import AboutDetail from "./About";
import { render, screen } from "@testing-library/react";

describe("AboutDetail Component", () => {
    const renderComponent = () =>
        render(
            <AboutDetail />
        );
    
      it("When the component is rendered then it should render Card component", () => {
        renderComponent();
        expect(screen.getAllByRole("article")).toHaveLength(3);
        expect(screen.getAllByRole("img")).toHaveLength(1);

      });

})