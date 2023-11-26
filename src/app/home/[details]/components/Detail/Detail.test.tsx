import Detail from "./Detail"
import { render, screen } from "@testing-library/react";


describe("Detail with props", () => {
    const renderComponent = () =>
        render(
            <Detail image="./diana.PNG" description="El blog es importante para la educacion" title="Blog" date="2023/02/13" />
        );


    it("When the Detail component is called then it returns an image and a title with the text Blog", () => {
        renderComponent();
        expect(screen.getAllByRole("img")).toHaveLength(1);
        expect(screen.getByText('Blog')).toHaveTextContent('Blog')
    })

})

