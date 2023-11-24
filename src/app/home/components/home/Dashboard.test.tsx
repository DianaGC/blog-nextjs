import React from "react";
import { render, screen } from "@testing-library/react";
import Dashboard from "./Dashboard";

jest.mock("react-hook-form", () => ({
  Controller: (props: { render: (p: object) => JSX.Element }) => (
    <div data-testid="controller">{props.render({})}</div>
  ),
}));

describe("SelectItemsField tests - ", () => {
  const renderComponent = (items?: JSX.Element[], isRequired?: boolean) =>
    render(
      <Dashboard />
    );


  it("When component is called, it must render a Card element", () => {
    renderComponent();
    expect(screen.getByRole("Card")).toBeInTheDocument();
    expect(screen.getByRole("Link")).toBeInTheDocument();
  });

});
