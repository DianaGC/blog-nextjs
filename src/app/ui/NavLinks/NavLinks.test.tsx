import { render, screen } from "@testing-library/react";
import NavLinks from "./NavLinks";

describe("Dashboard tests - ", () => {
    const renderComponent = () =>
        render(
            <NavLinks />
        );


    it("When the component is rendered then it should  render 3 Links  component", () => {
        renderComponent();
        expect(screen.getAllByRole("link")).toHaveLength(3);
    });

    it("When the component is rendered, it should show Home, Details, About Me in the menu", () => {
        renderComponent();
        expect(screen.getAllByText("Inicio")).toHaveLength(1);
        expect(screen.getAllByText("Detalles")).toHaveLength(1);
        expect(screen.getAllByText("Acerca de mi")).toHaveLength(1);

    });

});