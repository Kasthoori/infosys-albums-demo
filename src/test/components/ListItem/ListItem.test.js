import React from "react";
import { shallow } from "enzyme";
import ListItem from "../../../componenets/ListItem/ListItem";
import toJson from "enzyme-to-json";


describe("ListItem", () => {
  let wrapper;


  beforeEach(() => (wrapper = shallow(<ListItem />)));

  it("should render <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("ListItems renders witshout crashing", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });


  test('Click Event', () => {
    const mockCall = jest.fn();
    const listItem = shallow(<ListItem onClick={mockCall} />);
    listItem.find('div.ListItem').simulate('click');
    expect(mockCall.mock.calls.length).toEqual(1);
  });
});
