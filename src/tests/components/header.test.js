import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Header from "components/header";
import { renderApplication } from "../setup";

describe("renders header correctly", () => {
  it("renders header correctly", () => {
    const header = renderer.create(<Header />).toJSON();
    expect(header).toMatchSnapshot();
  });
  it("user sidebar opens on user badge click", async () => {
    renderApplication();
    const userBadge = screen.getByTestId("user-badge");
    expect(userBadge).toBeInTheDocument();
    const userSidebar = screen.getByTestId("user-sidebar");
    expect(userSidebar).toBeInTheDocument();
    expect(userSidebar).toHaveClass("sidebar-slide");
    expect(userSidebar).not.toHaveClass("open");
    fireEvent.click(userBadge);
    expect(userSidebar).toHaveClass("open");
  });
});
