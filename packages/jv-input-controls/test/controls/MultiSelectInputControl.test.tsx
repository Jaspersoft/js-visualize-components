/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { screen } from "@testing-library/dom";
import { act, cleanup, render } from "@testing-library/react";
import {
  MultiSelectInputControl,
  MultiSelectInputControlProps,
} from "../../src/controls/MultiSelectInputControl";
import "@testing-library/jest-dom";
import {
  InputControlsContext,
  InputControlsState,
} from "../../src/reducer/InputControlsReducer";
import { FC } from "react";
import userEvent from "@testing-library/user-event";

const mockDispatch = jest.fn();
const requiredProps: MultiSelectInputControlProps = {
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
        selected: false,
        label: "Drink",
        value: "Drink",
      },
      {
        selected: false,
        label: "Food",
        value: "Food",
      },
      {
        selected: false,
        label: "Non-Consumable",
        value: "Non-Consumable",
      },
    ],
    value: [], // this is not returned by the API, but it will be generated to
    // reflect the state from the server
  },
  handleIcChange: jest.fn(),
};
const mockState: InputControlsState = {
  inputControls: [
    {
      id: "ProductFamily",
      description: "",
      type: "multiSelect",
      uri: "repo:/public/Samples/Resources/Input_Controls/Product_Family",
      label: "Product Family",
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
        uri: "/public/Samples/Resources/Input_Controls/Product_Family",
        id: "ProductFamily",
        options: [
          {
            selected: false,
            label: "Drink",
            value: "Drink",
          },
          {
            selected: false,
            label: "Non-Consumable",
            value: "Non-Consumable",
          },
          {
            selected: false,
            label: "Food",
            value: "Food",
          },
        ],
        value: [], // this is not returned by the API, but it will be generated to
      },
    },
  ],
  validResponse: {},
  validationResultState: {},
  initiatorIdCascadingIc: "",
};

const MockInputControlsProvider: FC<any> = ({ children }) => {
  return (
    <InputControlsContext.Provider
      value={{ state: mockState, dispatch: mockDispatch }}
    >
      {children}
    </InputControlsContext.Provider>
  );
};

const getMultiSelect = (options?: object) => {
  return (
    <MockInputControlsProvider>
      <MultiSelectInputControl {...{ ...requiredProps, ...options }} />
    </MockInputControlsProvider>
  );
};

describe("MultiSelectInputControl tests", () => {
  beforeEach(() => {
    cleanup();
  });
  it("should render the MultiSelectInputControl component", () => {
    render(getMultiSelect());
    const labelElement = screen.getByText("ProductFamily");
    expect(labelElement).toBeInTheDocument();
  });

  it("should display options when clicked", async () => {
    render(getMultiSelect());
    const inputElement = screen.getByLabelText("ProductFamily");
    await act(async () => {
      userEvent.click(inputElement);
    });
    const options = await screen.findAllByRole("option");
    expect(options.length).toBe(3);
  });

  it("should select an option when clicked", async () => {
    render(getMultiSelect());
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
      render(getMultiSelect());
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

  it("calls handleIcChange with correct parameters on value change", async () => {
    const handleIcChange = jest.fn();
    await act(async () => {
      render(getMultiSelect({ handleIcChange }));
    });

    const inputElement = screen.getByLabelText("ProductFamily");
    await act(async () => {
      userEvent.click(inputElement);
    });
    const optionElement = await screen.findByText("Drink");
    await act(async () => {
      await userEvent.click(optionElement);
    });

    expect(handleIcChange).toHaveBeenCalledWith(
      expect.objectContaining({
        id: requiredProps.id,
        label: requiredProps.label,
        mandatory: requiredProps.mandatory,
        readOnly: requiredProps.readOnly,
        visible: requiredProps.visible,
        type: requiredProps.type,
      }),
      { [requiredProps.id]: "" },
    );
  });
});
