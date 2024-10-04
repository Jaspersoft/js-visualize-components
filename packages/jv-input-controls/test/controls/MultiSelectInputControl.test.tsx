/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */
import { screen } from "@testing-library/dom";
import { act, cleanup, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MultiSelectInputControl } from "../../src/controls/MultiSelectInputControl";
import "@testing-library/jest-dom";

const requiredProps = {
  id: "ProductFamily",
  description: "Product Family Multi-Select",
  type: "multiSelect",
  uri: "repo:/public/Samples/Resources/Input_Controls/ProductFamily",
  label: "ProductFamily",
  mandatory: true,
  readOnly: false,
  visible: true,
  masterDependencies: [],
  slaveDependencies: [],
  validationRules: [
    {
      mandatoryValidationRule: {
        errorMessage: "This field is mandatory so you must enter data.",
      },
    },
  ],
  state: {
    uri: "/public/Samples/Resources/Input_Controls/ProductFamily",
    id: "ProductFamily",
    options: [
      {
        selected: true,
        label: "Drink",
        value: "Drink",
      },
      {
        selected: true,
        label: "Food",
        value: "Food",
      },
      {
        selected: true,
        label: "Non-Consumable",
        value: "Non-Consumable",
      },
    ],
    value: ["Drink", "Food", "Non-Consumable"], // this is not returned by the API, but it will be generated to
    // reflect the state from the server
  },
};

describe("MultiSelectInputControl tests", () => {
  beforeEach(() => {
    cleanup();
  });
  it("should render the MultiSelectInputControl component", () => {
    render(<MultiSelectInputControl {...requiredProps} />);
    const labelElement = screen.getByText("ProductFamily");
    expect(labelElement).toBeInTheDocument();
  });

  it("should display options when clicked", async () => {
    render(<MultiSelectInputControl {...requiredProps} />);
    const inputElement = screen.getByLabelText("ProductFamily");
    await act(async () => {
      userEvent.click(inputElement);
    });
    const options = await screen.findAllByRole("option");
    expect(options.length).toBe(3);
  });

  it("should select an option when clicked", async () => {
    render(
      <MultiSelectInputControl
        {...{
          ...requiredProps,
          state: {
            ...requiredProps.state,
            value: [],
          },
        }}
      />,
    );
    const inputElement = screen.getByLabelText("ProductFamily");
    await act(async () => {
      userEvent.click(inputElement);
    });
    const optionElement = await screen.findByText("Drink");
    await act(async () => {
      await userEvent.click(optionElement);
    });
    const liEl = document.querySelector("ul li#Drink");
    expect(liEl).toHaveAttribute("aria-selected", "true");
  });

  it("should display error message when there is an error", async () => {
    await act(async () => {
      render(
        <MultiSelectInputControl
          {...{
            ...requiredProps,
            state: {
              ...requiredProps.state,
              value: [],
            },
          }}
        />,
      );
    });
    const inputElement = screen.getByLabelText("ProductFamily");
    await act(async () => {
      userEvent.click(inputElement);
    });
    const optionElement = await screen.findByText("Drink");
    await act(async () => {
      await userEvent.click(optionElement);
    });
    await act(async () => {
      await userEvent.click(optionElement);
    });
    const errorElement = screen.getByText(
      "This field is mandatory so you must enter data.",
    );
    expect(errorElement).toBeInTheDocument();
  });

  it("should select all options by default", async () => {
    render(<MultiSelectInputControl {...requiredProps} />);
    const inputElement = screen.getByLabelText("ProductFamily");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveTextContent("Drink, Food, Non-Consumable");
  });
});
