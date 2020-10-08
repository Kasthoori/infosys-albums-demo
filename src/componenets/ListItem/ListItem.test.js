import React from "react";
import { shallow } from "enzyme";
import ListItem from "./ListItem";
import toJson from "enzyme-to-json";

const listOnClick = jest.fn();

describe("ListItem", () => {
  let wrapper;
  const item = {};

  beforeEach(() => (wrapper = shallow(<ListItem />)));

  it("should render <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("ListItems renders witshout crashing", () => {
    const cont = shallow(<ListItem />);
    expect(toJson(cont)).toMatchSnapshot();
  });
});
