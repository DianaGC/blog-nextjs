import { render, screen } from "@testing-library/react";
import About from "./page";

describe("About tests", () => {
    const renderComponent = () =>
        render(
            <About />
        );


    it("When the component is rendered without elements then it should not render Card component", () => {
        renderComponent();
        expect(screen.getAllByRole("img")).toHaveLength(1);
        expect(screen.getAllByRole("article")).toHaveLength(3);
    });

});