import TestRenderer from "react-test-renderer";

function Link(props) {
  return <a href={props.page}>{props.children}</a>;
}



it("Matches the snapshot facebook Link", () => {
  const tree = TestRenderer.create(<Link page="https://www.facebook.com/">Facebook</Link>).toJSON();
  expect(tree).toMatchSnapshot();
});