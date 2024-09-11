import { screen } from "@testing-library/dom";
import { act, cleanup, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { JSX } from "react";
import { SingleSelectInputControl } from "../../src/controls/SingleSelectInputControl";
import "@testing-library/jest-dom";

const requiredProps = {
  id: "0",
  label: "test",
  mandatory: false,
  readOnly: false,
  visible: true,
  type: "bool",
};

const getSingleSelect = (options?: object): JSX.Element => {
  return <SingleSelectInputControl {...{ ...requiredProps, ...options }} />;
};

describe("SingleSelectInputControl tests", () => {
  beforeEach(() => {
    cleanup();
  });

  it("should create select component with an input element within", () => {
    act(() => {
      render(getSingleSelect());
    });
    const mElement = document.querySelectorAll("div input");
    expect(mElement.length).toBe(1);
  });

  it("should contain options when given options", async () => {
    await act(async () => {
      render(
        getSingleSelect({
          state: {
            id: "testId",
            options: [{ selected: false, label: "1", value: "one" }],
          },
        }),
      );
    });
    const mElement = document.querySelectorAll("div input");
    expect(mElement.length).toBe(1);
    const inputElement = screen.getByLabelText("test");
    await act(async () => {
      userEvent.click(inputElement);
    });
    const menuElement = document.querySelectorAll("ul.MuiList-root");
    const opts = document.querySelectorAll("ul.MuiList-root li");
    expect(menuElement.length).toBe(1);
    expect(opts.length).toBe(1);
  });
  it("should contain two options when given two options", async () => {
    await act(async () => {
      render(
        getSingleSelect({
          state: {
            id: "testId",
            options: [
              { selected: false, label: "1", value: "one" },
              { selected: false, label: "2", value: "two" },
            ],
          },
        }),
      );
    });

    const mElement = document.querySelectorAll("div input");
    expect(mElement.length).toBe(1);
    const inputElement = screen.getByLabelText("test");
    await act(async () => {
      userEvent.click(inputElement);
    });
    const menuElement = document.querySelectorAll("ul.MuiList-root");
    const opts = document.querySelectorAll("ul.MuiList-root li");
    expect(menuElement.length).toBe(1);
    expect(opts.length).toBe(2);
  });
});
