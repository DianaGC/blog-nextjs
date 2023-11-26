import Comments from "./Comments"
import { render, screen } from "@testing-library/react";


describe("Comments", () => {
    const renderComponent = () =>
        render(
            <Comments />
        );


    it("When the Comments component is called then it returns a button", () => {
        renderComponent();
        expect(screen.getAllByRole("button")).toHaveLength(1);
    })

})