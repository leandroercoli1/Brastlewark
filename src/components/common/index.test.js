import React from "react";
import { render } from "@testing-library/react";
import Alert from "components/common/alert";
import Loader from "components/common/loader";
import GithubBadge from "components/common/github-badge";
import UserBadge from "components/common/user-badge";

describe("renders common components correctly", () => {
  it("renders alert correctly", () => {
    const { container } = render(<Alert>Alert message text</Alert>);
    expect(container.firstChild).toMatchSnapshot();
  });
  it("renders loader correctly", () => {
    const { container } = render(<Loader />);
    expect(container.firstChild).toMatchSnapshot();
  });
  it("renders GitHub badge correctly", () => {
    const { container } = render(<GithubBadge />);
    expect(container.firstChild).toMatchSnapshot();
  });
  it("renders user badge correctly", () => {
    const { container } = render(<UserBadge />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
