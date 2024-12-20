import { useEffect, useRef, useState } from "react";
import {
  Authentication,
  useVisualizeConfig,
  VisualizeClient,
  VisualizeFactory,
  VisualizeGenericError,
  visualizejsLoader,
  VisualizeUriConfig,
} from "../../..";
import { getDomainFromUri, URI_LOCATION_FOR_VIZ } from "../utils/UrlParser";

const logOrTriggerError = (
  config: useVisualizeConfig | undefined,
  error: Error | VisualizeGenericError | string,
) => {
  if (config?.errorCallback) {
    config?.errorCallback(error);
  } else {
    console.error(String(error));
  }
};

const useVisualize = (
  uriOrConfig: string | VisualizeUriConfig,
  auth: Authentication,
  config?: useVisualizeConfig,
) => {
  const [vContainer, setVContainer] = useState<{ v: VisualizeClient } | null>(
    null,
  );
  const prevUriOrConfig = useRef<string | VisualizeUriConfig>();
  useEffect(() => {
    if (
      JSON.stringify(prevUriOrConfig.current) === JSON.stringify(uriOrConfig)
    ) {
      // means the params have not changed, therefore, we shouldn't re-execute the logic.
      return;
    }
    // the params have changed, let's connect to the new JRS:
    prevUriOrConfig.current = uriOrConfig;

    const serverDomain = getDomainFromUri(uriOrConfig);
    const loadVisualize = visualizejsLoader(
      `${serverDomain}${URI_LOCATION_FOR_VIZ}`,
    );
    loadVisualize()
      .then((visualizeFactory: VisualizeFactory) => {
        visualizeFactory(
          {
            auth: auth || {},
          },
          (v: VisualizeClient) => {
            const finalVObject =
              v.server !== undefined
                ? v
                : {
                    ...v,
                    server: serverDomain,
                  };
            setVContainer({ v: finalVObject });
          },
          (e: Error | VisualizeGenericError | string) =>
            logOrTriggerError(config, e),
        );
      })
      .catch((error: Error | VisualizeGenericError | string) =>
        logOrTriggerError(config, error),
      );
  }, [uriOrConfig]);

  return vContainer;
};
export default useVisualize;
