import React from "react";
import { shallow } from "enzyme";
// import ReactDOM from "react-dom";
// import ReactTestUtils from "react-dom/test-utils";
import DefaultButton from "../DefaultButton";
import { JestEnvironment } from "@jest/environment";

// test("isElement", () => {
//   const props = {
//     label: "foo",
//     onClick: jest.fn()
//   };

//   const instance = ReactTestUtils.renderIntoDocument(
//     <DefaultButton {...props} />
//   );

//   const node = ReactDOM.findDOMNode(instance);

//   ReactTestUtils.Simulate.click(node);

//   expect(props.onClick).toBeCalled();
// });

test("label", () => {
  const props = {
    label: "foo",
    onClick: () => {}
  };

  const wrapper = shallow(<DefaultButton {...props} />); // enzymeでレンダリング

  expect(wrapper.props().children).toBe(props.label);
});

test("onClick", () => {
  const props = {
    label: "foo",
    onClick: jest.fn()
  };

  const wrapper = shallow(<DefaultButton {...props} />);

  wrapper.find("button").simulate("click"); // jQueryライクにDOM操作が出来る
  expect(props.onClick).toBeCalled();
});

// test("If label characters less than 10, className is small", () => {
//   const props = {
//     label: "foo",
//     onClick: () => {}
//   };
//   const wrapper = shallow(<DefaultButton {...props} />);
//   expect(wrapper.props().className).toBe("small");
// });

// test("If label characters  is 10, className is small", () => {
//   const props = {
//     label: "foobarbaz",
//     onClick: () => {}
//   };
//   const wrapper = shallow(<DefaultButton {...props} />);
//   expect(wrapper.props().className).toBe("small");
// });

// test("If label characters over than 10, className is long", () => {
//   const props = {
//     label: "foobarbazfoobarbaz",
//     onClick: () => {}
//   };
//   const wrapper = shallow(<DefaultButton {...props} />);
//   expect(wrapper.props().className).toBe("long");
// });

test("In response to labels value, className changes ", () => {
  const props = {
    label: "foo",
    onClick: () => {}
  };
  const wrapper = shallow(<DefaultButton {...props} />);
  expect(wrapper.props().className).toBe("small");

  // setPropsメソッドはオブジェクトの特定の値を更新することが出来る
  wrapper.setProps({ label: "foobarbaz" });
  expect(wrapper.props().className).toBe("small");

  wrapper.setProps({ label: "foobarbazfoobarbaz" });
  expect(wrapper.props().className).toBe("long");
});

// enzymeはFull Renderingをするmountメソッドが存在して、これは子要素以下を取得することが出来る
// Static Renderingをrenderメソッドで行うことで、Reactコンポーネントを単純なHTMLとして静的にレンダリング出来る
