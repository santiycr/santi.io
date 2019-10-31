import React from "react";
import { mount } from "enzyme";
import Index from "../pages/index";

describe("<Index/>", () => {
  it("renders without crashing", () => {
    expect.assertions(1);
    const index = mount(<Index />);
    expect(index.find("h1").text()).toMatch(/Hello World/);
  });

  it("has all SSR sections", () => {
    expect.assertions(1);
    const index = mount(<Index />);
    // Skills is dynamically loaded so it's missing
    expect(index.find("h2")).toHaveLength(3);
  });

  it("has all sections rendered as h5", () => {
    expect.hasAssertions();
    const index = mount(<Index />);
    index.find("h2").forEach(node => {
      expect(node.hasClass("MuiTypography-h5")).toStrictEqual(true);
    });
  });

  it("has the right section titles", () => {
    expect.hasAssertions();
    const index = mount(<Index />);
    const texts = index.find("h2").map(node => node.text());
    expect(texts).toStrictEqual([
      "Experience",
      "My Personal Values",
      "Reach Out"
    ]);
  });
});
