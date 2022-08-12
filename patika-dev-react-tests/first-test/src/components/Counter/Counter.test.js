import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Counter from "./index";

test("IncreaseBtn test", () => {
  render(<Counter />);

  const increaseBtn = screen.getByText("Increase");
  const count = screen.getByText("0");

  userEvent.click(increaseBtn);
  expect(count).toHaveTextContent("1");
});

test("DecreaseBtn Test", () => {

  render(<Counter />);

  const decreaseBtn = screen.getByText("Decrease");
  const count = screen.getByText("0");

  userEvent.click(decreaseBtn);
  expect(count).toHaveTextContent("-1");

});
