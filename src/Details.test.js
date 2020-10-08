/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import { shallow } from "enzyme";
import { cleanup } from "@testing-library/react";
import ReactDOM from "react-dom";

import "@testing-library/jest-dom/extend-expect";
import toJson from "enzyme-to-json";

import Details from "./Details";

jest.mock("react-router-dom", () => ({
  useLocation: jest.fn().mockReturnValue({
    pathname: "",
    search: "",
    hash: "",
    state: null,
    key: "",
  }),
  useHistory: () => {
    push: jest.fn();
  },
}));

describe("Testing Details", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Details />);
  });

  afterEach(cleanup);

  it("Details render without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
