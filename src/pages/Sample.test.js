import { cleanup, render, screen } from "@testing-library/react";
import { Sample } from "./Sample";

afterEach(() => cleanup());

test("Testing Sample Component", () => {
  render(<Sample />);

  const element = screen.getByTestId("testid1");
  expect(element).toBeInTheDocument();
});

test("Testing Smaple Component", () => {
  render(<Sample />);
  const element = screen.getByTestId("testid1");
  expect(element).toHaveTextContent(/hello world/i);
});