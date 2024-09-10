import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ChainedBackend from "i18next-chained-backend";
import HttpBackend from "i18next-http-backend";
import resourcesToBackend from "i18next-resources-to-backend";

import en from "./assets/locales/en.json";

const resources = {
  en,
};

i18n
  .use(initReactI18next)
  .use(ChainedBackend)
  .init({
    fallbackLng: "en",
    backend: {
      backends: [HttpBackend, resourcesToBackend(resources)],
      backendOptions: [
        {
          loadPath: "/jv_scheduler_locales/{{lng}}/{{ns}}.json",
        },
      ],
    },
  });

export default i18n;
