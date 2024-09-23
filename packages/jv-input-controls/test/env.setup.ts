beforeEach(() => {
  jest.mock("react-i18next", () => ({
    useTranslation: () => {
      return {
        t: (str: any) => str,
        i18n: {
          changeLanguage: () => new Promise(() => {}),
        },
      };
    },
    initReactI18next: {
      type: "3rdParty",
      init: () => {},
    },
  }));
});
