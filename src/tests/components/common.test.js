import React from "react";
import renderer from "react-test-renderer";
import Alert from "components/common/alert";
import Loader from "components/common/loader";
import GithubBadge from "components/common/github-badge";
import UserBadge from "components/common/user-badge";

describe("renders common components correctly", () => {
  it("renders alert correctly", () => {
    const alert = renderer.create(<Alert>Alert message text</Alert>).toJSON();
    expect(alert).toMatchSnapshot();
  });
  it("renders loader correctly", () => {
    const loader = renderer.create(<Loader />).toJSON();
    expect(loader).toMatchSnapshot();
  });
  it("renders GitHub badge correctly", () => {
    const badge = renderer.create(<GithubBadge />).toJSON();
    expect(badge).toMatchSnapshot();
  });
  it("renders user badge correctly", () => {
    const badge = renderer.create(<UserBadge />).toJSON();
    expect(badge).toMatchSnapshot();
  });
});
