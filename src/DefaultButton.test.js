import React from "react";
import ReactDOM from "react-dom";
import ReactTestUtils from "react-dom/test-utils";
import DefaultButton from "./DefaultButton";

test("isElement", () => {
  const props = {
    label: "foo",
    onClick: jest.fn()
  };

  const instance = ReactTestUtils.renderIntoDocument(
    <DefaultButton {...props} />
  );

  const node = ReactDOM.findDOMNode(instance);

  ReactTestUtils.Simulate.click(node);

  expect(props.onClick).toBeCalled();
});
