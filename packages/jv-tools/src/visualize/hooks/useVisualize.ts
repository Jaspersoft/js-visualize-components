import { useState, useEffect } from "react";
import {
  VisualizeClient,
  visualizejsLoader,
  VisualizeFactory,
  Authentication,
  useVisualizeConfig,
  VisualizeGenericError,
} from "../../..";

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
  uri: string,
  auth: Authentication,
  config?: useVisualizeConfig,
) => {
  const [vContainer, setVContainer] = useState<{ v: VisualizeClient } | null>(
    null,
  );
  useEffect(() => {
    const loadVisualize = visualizejsLoader(uri);
    loadVisualize()
      .then((visualizeFactory: VisualizeFactory) => {
        visualizeFactory(
          {
            auth: auth || {},
          },
          (v: VisualizeClient) => {
            setVContainer({ v });
          },
          (e: Error | VisualizeGenericError | string) =>
            logOrTriggerError(config, e),
        );
      })
      .catch((error: Error | VisualizeGenericError | string) =>
        logOrTriggerError(config, error),
      );
  }, [uri]);

  return vContainer;
};
export default useVisualize;
