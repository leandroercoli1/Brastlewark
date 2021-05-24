import React from "react";
import { fireEvent, screen, render } from "@testing-library/react";
import { renderWithStore } from "tests";
import Header from "components/header";
import Homepage from "containers/homepage";

describe("renders header correctly", () => {
  it("renders header correctly", () => {
    const { container } = render(<Header />);
    expect(container.firstChild).toMatchSnapshot();
  });
  it("user sidebar opens on user badge click", async () => {
    renderWithStore(Homepage);
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
