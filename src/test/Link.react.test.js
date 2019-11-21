import React from "react";
import Link from "../Link.react";
import renderer, { act } from "react-test-renderer";

test("Link changes the class when hoverd", () => {
  const component = renderer.create(
    <Link page="http://www.facebook.com">facebook</Link>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  act(() => {
    tree.props.onMouseEnter();
  });
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  act(() => {
    tree.props.onMouseLeave();
  });
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  act(() => {
    tree.props.onClick();
  });
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
