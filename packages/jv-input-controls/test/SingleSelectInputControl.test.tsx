import * as React from "react";
import { SingleSelectInputControl } from "../src/controls/SingleSelectInputControl";
import { cleanup, render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

const requiredProps = {
  id: "0",
  label: "test",
  mandatory: false,
  readOnly: false,
  visible: true,
  type: "bool",
};

const getSingleSelect = (options?: object): React.JSX.Element => {
  return <SingleSelectInputControl {...{ ...requiredProps, ...options }} />;
};

describe("SingleSelectInputControl tests", () => {
  beforeEach(() => {
    cleanup();
  });

  it("should create select component with an input element within", () => {
    render(getSingleSelect());
    const sElement = document.querySelectorAll("div.jr-mInputSelect"),
      mElement = document.querySelectorAll("div.jr-mInputSelect input");
    expect(sElement.length).toBe(1);
    expect(mElement.length).toBe(1);
  });

  it("should contain options when given options", async () => {
    render(
      getSingleSelect({
        state: {
          id: "testId",
          options: [{ selected: false, label: "1", value: "one" }],
        },
      }),
    );

    const mElement = document.querySelectorAll("div.jr-mInputSelect input");
    expect(mElement.length).toBe(1);
    const inputElement = screen.getByLabelText("test");
    userEvent.click(inputElement);
    const menuElement = document.querySelectorAll("ul.MuiList-root");
    const opts = document.querySelectorAll("ul.MuiList-root li");
    expect(menuElement.length).toBe(1);
    expect(opts.length).toBe(1);
  });
  it("should contain two options when given two options", async () => {
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

    const mElement = document.querySelectorAll("div.jr-mInputSelect input");
    expect(mElement.length).toBe(1);
    const inputElement = screen.getByLabelText("test");
    userEvent.click(inputElement);
    const menuElement = document.querySelectorAll("ul.MuiList-root");
    const opts = document.querySelectorAll("ul.MuiList-root li");
    expect(menuElement.length).toBe(1);
    expect(opts.length).toBe(2);
  });
});
