import Card from "./Card"
import { render, screen } from "@testing-library/react";

describe("Card ", () => {
    describe("Card with props", () => {
        const renderComponent = () =>
            render(
                <Card image="./diana.PNG" description="El blog es importante para la educacion" title="Blog" />
            );


        it("When the Card component is called then it returns an article and a title with the text Blog", () => {
            renderComponent();
            expect(screen.queryAllByRole("article")).toHaveLength(1);
            expect(screen.getByText('Blog')).toHaveTextContent('Blog')
        })

        it("When the card component receives an image then it returns an image.", () => {
            renderComponent();
            expect(screen.queryAllByRole("img")).toHaveLength(1);

        })

    })
    
    describe("Card without props", () => {
        const renderComponent = () =>
            render(
                <Card description="El blog es importante para la educacion" title="Blog" />
            );

        it("When the card component no receives an image then it not return an image.", () => {
            renderComponent();
            expect(screen.queryAllByRole("img")).toHaveLength(0);

        })

    })
})