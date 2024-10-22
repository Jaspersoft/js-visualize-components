import { useState, useEffect } from "react";
import {
  VisualizeClient,
  visualizejsLoader,
  VisualizeFactory,
  Authentication,
} from "../../..";

const useVisualize = (uri: string, auth?: Authentication) => {
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
          (e: any) => {
            console.error(String(e));
          },
        );
      })
      .catch((error: Error) => {
        console.error("Error loading visualize.js: ", error);
      });
  }, [uri]);

  return vContainer;
};
export default useVisualize;
