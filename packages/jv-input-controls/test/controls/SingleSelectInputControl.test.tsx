import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  SingleSelectInputControl,
  SingleSelectInputControlProps,
} from "../../src/controls/SingleSelectInputControl";
import {
  InputControlsContext,
  InputControlsState,
} from "../../src/reducer/InputControlsReducer";
import "@testing-library/jest-dom";
import { FC, JSX } from "react";

let getSingleSelect: (options?: object) => JSX.Element;
const mockDispatch = jest.fn();
const requiredProps: SingleSelectInputControlProps = {
  id: "Product_Family",
  label: "Product_Family_test",
  mandatory: true,
  readOnly: false,
  visible: true,
  uri: "repo:/public/Samples/Resources/Input_Controls/Product_Family",
  type: "singleSelect",
  state: {
    uri: "/public/Samples/Resources/Input_Controls/Product_Family",
    id: "Product_Family",
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
        label: "All",
        value: "All",
      },
      {
        selected: true,
        label: "Food",
        value: "Food",
      },
    ],
    value: ["Food"],
  },
  validationRules: [
    {
      mandatoryValidationRule: {
        errorMessage: "This field is mandatory so you must enter data.",
      },
    },
  ],
  masterDependencies: [],
  slaveDependencies: ["OTHER_ONE"],
};

describe("SingleSelectInputControl tests", () => {
  beforeEach(() => {
    cleanup();

    const mockState: InputControlsState = {
      inputControls: [
        {
          id: "Product_Family",
          description: "",
          type: "singleSelect",
          uri: "repo:/public/Samples/Resources/Input_Controls/Product_Family",
          label: "Product Family",
          mandatory: true,
          readOnly: false,
          visible: true,
          masterDependencies: [],
          slaveDependencies: ["OTHER_ONE"],
          validationRules: [
            {
              mandatoryValidationRule: {
                errorMessage: "This field is mandatory so you must enter data.",
              },
            },
          ],
          state: {
            uri: "/public/Samples/Resources/Input_Controls/Product_Family",
            id: "Product_Family",
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
                label: "All",
                value: "All",
              },
              {
                selected: true,
                label: "Food",
                value: "Food",
              },
            ],
            value: ["Food"],
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

    getSingleSelect = (options?: object) => {
      return (
        <MockInputControlsProvider>
          <SingleSelectInputControl {...{ ...requiredProps, ...options }} />
        </MockInputControlsProvider>
      );
    };
  });

  it("should create select component with an input element within", () => {
    render(getSingleSelect());
    const inputElement = screen.getByRole("combobox");
    expect(inputElement).toBeInTheDocument();
  });

  it("should contain options when given options", async () => {
    render(getSingleSelect({}));
    const inputElement = screen.getByRole("combobox");
    userEvent.click(inputElement);
    const options = await screen.findAllByRole("option");
    expect(options.length).toBe(4);
    expect(options[3]).toHaveTextContent("Food");
  });

  it("should update value based on options", async () => {
    render(getSingleSelect({}));
    const inputElement = screen.getByRole("combobox");
    expect(inputElement).toHaveTextContent("Food");
  });
});
