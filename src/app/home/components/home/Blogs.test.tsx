import React from "react";
import { render, screen } from "@testing-library/react";
import Dashboard from "./Blogs";
import '@testing-library/jest-dom';
import { useBlogState } from "./state/useBlogState";
import { IBlog } from "./state/useBlogState.interfaces";

jest.mock("./state/useBlogState")

describe("Dashboard tests - ", () => {
  beforeAll(() => {
    const blogs: IBlog[] = []
    useBlogState.mockImplementation(() => blogs)
  })
  const renderComponent = () =>
    render(
      <Dashboard />
    );


  it("When the component is rendered without elements then it should not render Card component", () => {
    renderComponent();
    expect(screen.queryAllByRole("Card")).toHaveLength(0);
  });

});
