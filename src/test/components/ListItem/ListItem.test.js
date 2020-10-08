import React from "react";
import { shallow } from "enzyme";
import ListItem from "../../../componenets/ListItem/ListItem";
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
    expect(toJson(wrapper)).toMatchSnapshot();
  });



  const props = {
    id:'', title: '', userId: ''
  };

  const renComp = shallow(<ListItem {...props} />);


  test('Click Event', () => {
    expect(wrapper).toMatchSnapshot();
    renComp.find('div.ListItem').simulate('onClick');
    expect(wrapper).toMatchSnapshot();
  });
});
