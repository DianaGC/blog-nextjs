import Layout from "./layout";
import { render, screen } from "@testing-library/react";

describe("Layout Component", () => {
    const renderComponent = () =>
        render(
            <Layout children />
        );
    
      it.skip("When the Layout component is rendered then it should render section", () => {
        renderComponent();
        expect(screen.getAllByText("children")).toHaveLength(1);

      });

})