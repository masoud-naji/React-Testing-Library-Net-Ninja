import { render, screen, fireEvent } from "@testing-library/react";
import AddInput from "../AddInput";
import TestRenderer from "react-test-renderer";

const mockedSetTodo = jest.fn();

describe("AddInput", () => {
  it("should render input element", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputElement).toBeInTheDocument();
  });

  it("should be able to type into input", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.click(inputElement);
    fireEvent.change(inputElement, {
      target: { value: "Go Grocery Shopping" },
    });
    expect(inputElement.value).toBe("Go Grocery Shopping");
  });

  it("should be able to type into input", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.click(inputElement);
    fireEvent.change(inputElement, {
      target: { value: "Go Grocery Shopping" },
    });
    const buttonElement = screen.getByRole("button", { name: /Add/i });
    fireEvent.click(buttonElement);
    expect(mockedSetTodo).toBeCalled();
  });

  it("should have empty input when add button is cliked", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputElement, {
      target: { value: "Go Grocery Shopping" },
    });
    const buttonElement = screen.getByRole("button", { name: /Add/i });
    fireEvent.click(buttonElement);
    expect(inputElement.value).toBe("");
  });
});

it("render without crashing", () => {
  render(<AddInput />);
  const AddButton = screen.getByRole("button", { name: /Add/i });
  expect(AddButton).toHaveTextContent("Add");
});

// Snapshut: AddInput.test.js

it("Matches the snapshot", () => {
  const tree = TestRenderer.create(<div></div>).toJSON();
  expect(tree).toMatchSnapshot();
});














// original react test style
it("render without crashing", () => {
  const div = document.createElement("div");
  render(<AddInput />, div);
});
