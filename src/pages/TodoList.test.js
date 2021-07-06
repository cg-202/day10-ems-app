import { render, screen } from "@testing-library/react";
import { TodoList } from "./TodoList";

test("Writing first React Unit Test", () => {
  render(<TodoList />);

  // const element = screen.findByTestId("id1");
  // const element = screen.queryByTestId("id1");
  const element = screen.getByTestId("id1");
  expect(element).toBeInTheDocument();
});

test("Use Case 2", () => {
  render(<TodoList />);

  // const element = screen.findByTitle("title1");
  // const element = screen.queryByTitle("title1");
  const element = screen.getByTitle("title1");
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent("Hello World");

  expect(element).toHaveTextContent(/heLlo wOrld/i);
});
