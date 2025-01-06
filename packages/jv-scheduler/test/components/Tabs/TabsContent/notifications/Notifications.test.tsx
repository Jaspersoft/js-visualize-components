import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useSelector } from "react-redux";
import Notifications from "../../../../../src/components/Tabs/TabsContent/notifications/Notifications";
// import { updateChangeToStore } from "../../../../../src/utils/schedulerUtils";
import { useStoreUpdate } from "../../../../../src/hooks/useStoreUpdate";
// import { getFakeRootData, getFolderData } from "../../../../../src/actions/action";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock("../../../../../src/utils/schedulerUtils", () => ({
  updateChangeToStore: jest.fn(),
}));

jest.mock("../../../../../src/hooks/useStoreUpdate", () => ({
  useStoreUpdate: jest.fn(),
}));

jest.mock("../../../../../src/actions/action", () => ({
  getFakeRootData: jest.fn(),
  getFolderData: jest.fn(),
}));

jest.mock("i18next", () => ({
  use: jest.fn().mockReturnThis(),
  init: jest.fn(),
}));

jest.mock("react-i18next", () => ({
  useTranslation: jest.fn().mockReturnValue({
    t: (key: string) => key,
    i18n: {
      changeLanguage: jest.fn(),
    },
  }),
}));

jest.mock(
  "../../../../../src/components/Tabs/TabsContent/notifications/RepositoryTreeDialog",
  () => ({
    __esModule: true,
    default: jest.fn(() => <div>RepositoryTreeDialog</div>),
  }),
);
describe("Notifications component", () => {
  const mockState: any = {
    stepperConfiguration: { show: true },
    scheduleInfo: {
      mailNotification: {
        messageText: "Test message",
        subject: "Test subject",
        toAddresses: { address: "test@example.com" },
        resultSendType: "SEND_ATTACHMENT",
      },
      repositoryDestination: { folderURI: "/test-uri" },
    },
    scheduleErrors: {
      address: "",
      subject: "",
      messageText: "",
      folderURI: "",
    },
    fieldsVisibility: {
      address: true,
      subject: true,
      messageText: true,
      resultSendType: true,
    },
    folderData: {},
    fakeRoot: [],
    scheduleApisFailure: {
      initialTreeDataLoadApiFailure: false,
    },
  };

  beforeEach(() => {
    (useStoreUpdate as jest.Mock).mockReturnValue(jest.fn());
    (useSelector as unknown as jest.Mock).mockImplementation((selector) =>
      selector(mockState),
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders Notifications component with all fields", () => {
    render(<Notifications />);
    screen.logTestingPlaygroundURL();
    expect(screen.getByText("notifications.email.title")).toBeInTheDocument();
    expect(
      screen.getByLabelText("notifications.email.recipients.label"),
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText("notifications.email.subject.label"),
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText("notifications.email.message.label"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("notifications.repositoryLink.label"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("notifications.fileAsAttachment.label"),
    ).toBeInTheDocument();
  });
});
