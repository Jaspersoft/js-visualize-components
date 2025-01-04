import { useEffect, useRef, useState } from "react";
import {
  useVisualizeConfig,
  VisualizeClient,
  VisualizeFactory,
  VisualizeGenericError,
  visualizejsLoader,
  VisualizeFactoryConfig,
} from "../../../index";

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
  vizConfig: VisualizeFactoryConfig,
  errorConfig?: useVisualizeConfig,
) => {
  const [vContainer, setVContainer] = useState<{ v: VisualizeClient } | null>(
    null,
  );
  const prevUriOrConfig = useRef<VisualizeFactoryConfig>();
  useEffect(() => {
    if (JSON.stringify(prevUriOrConfig.current) === JSON.stringify(vizConfig)) {
      // means the params have not changed, therefore, we shouldn't re-execute the logic.
      return;
    }
    // the params have changed, let's connect to the new JRS:
    prevUriOrConfig.current = vizConfig;

    const loadVisualize = visualizejsLoader(vizConfig.visualizePath);
    loadVisualize()
      .then((visualizeFactory: VisualizeFactory) => {
        let paramsToViz: Omit<VisualizeFactoryConfig, "visualizePath"> = {
          server: vizConfig.server,
          auth: vizConfig.auth || {},
        };
        if (vizConfig.publicPath) {
          paramsToViz = { ...paramsToViz, publicPath: vizConfig.publicPath };
        }
        visualizeFactory(
          paramsToViz,
          (v: VisualizeClient) => {
            const finalVObject =
              v.server !== undefined
                ? v
                : {
                    ...v,
                    server: vizConfig.server,
                  };
            setVContainer({ v: finalVObject });
          },
          (e: Error | VisualizeGenericError | string) =>
            logOrTriggerError(errorConfig, e),
        );
      })
      .catch((error: Error | VisualizeGenericError | string) =>
        logOrTriggerError(errorConfig, error),
      );
  }, [vizConfig]);

  return vContainer;
};
export default useVisualize;
