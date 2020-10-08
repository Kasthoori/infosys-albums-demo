/* eslint-disable no-empty-pattern */
/* eslint-disable no-undef */
import React from "react";
import { shallow } from "enzyme";
import { cleanup, render, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import toJson from "enzyme-to-json";

import App from "../App";
import ListItem from "../componenets/ListItem/ListItem";



describe("App Testing", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  afterEach(cleanup);

  it("should check url1", async () => {
    const url1 = "/albums";
    const { getByTestId } = render(<App url={url1} />);
    expect(getByTestId("loading")).toHaveTextContent("Loading.....");

    jest.fn().mockImplementationOnce({ data: { albums: "a6natus" } });
    const resolvedSpan = await waitForElement(() => getByTestId("resolved"));
    expect(resolvedSpan).toHaveTextContent("a6natus");
  });

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render a <span />", () => {
    expect(wrapper.find("span").length).toEqual(1);
  });

  it("renders without crashing", () => {

    const props = {
      status: false,
    };

    const cont = shallow(<App {...props} status='false' />);
    expect(toJson(cont)).toMatchSnapshot();
  });


  test('Test document title', () => {
    expect(global.window.document.title).toBe('Albums Available');
  });

  test('Search ListItem component', () => {
    const id = '';
    const comp = shallow(<ListItem  />);
    expect(comp.exists()).toBe(true);
  });

  

});
