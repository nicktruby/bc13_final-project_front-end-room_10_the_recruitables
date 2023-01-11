import React from "react";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import LevelButton from "./LevelButton";

describe("<LevelButton>", () => {
  const mockedProps = {
    buttonNumber: "1234",
    clickToGame: jest.fn(),
  };

  it("successfully renders the component, matches snapshot", () => {
    const { asFragment } = render(<LevelButton {...mockedProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("click of button fires the provided 'clickToGame' callback prop", () => {
    render(<LevelButton {...mockedProps} />);
    const button = screen.getByRole("button");
    userEvent.click(button);
    expect(button).toBeInTheDocument();
    expect(mockedProps.clickToGame).toHaveBeenCalled();
  });

  it("button text contains prodided 'buttonNumber' prop content", () => {
    render(<LevelButton {...mockedProps} />);
    const button = screen.getByRole("button");
    console.log(button.innerText);
    expect(button).toHaveTextContent(mockedProps.buttonNumber);
  });
});
