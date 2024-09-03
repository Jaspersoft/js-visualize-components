import React, { useEffect } from "react";
import { JVTypographyComponent } from "../../common/CommonComponents";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  scheduleValidationError,
  setPropertiesDetails,
} from "../../../actions/action";
import { getLengthOfObject } from "../../../utils/schedulerUtils";

const Parameters = () => {
  const { t } = useTranslation() as { t: (k: string) => string };
  const dispatch = useDispatch();
  const visualize = useSelector((state: any) => state.visualize);
  const source = useSelector((state: any) => state.scheduleInfo.source);
  const resourceUri = useSelector(
    (state: any) => state.schedulerUIConfig.resourceURI,
  );

  const updateStoreWithParameters = (params: any) => {
    dispatch(
      setPropertiesDetails({
        source: {
          ...source,
          parameters: {
            parameterValues: params,
          },
        },
      }),
    );
  };
  useEffect(() => {
    const inputControlsData = getLengthOfObject(
      source?.parameters?.parameterValues,
    )
      ? { params: source?.parameters?.parameterValues }
      : {};
    const controls = visualize.v.inputControls({
      resource: resourceUri,
      container: "#parametersTab",
      events: {
        change: (params: any, error: any) => {
          if (!error) {
            updateStoreWithParameters(params);
          } else {
            dispatch(
              scheduleValidationError({ parameters: "error.parameters.error" }),
            );
            updateStoreWithParameters(params);
          }
        },
      },
      success: function (params: any) {
        updateStoreWithParameters(params.parameters);
      },
      ...inputControlsData,
    });
  }, []);

  return (
    <>
      <JVTypographyComponent text={t("parameters.title")} />
      <div id={"parametersTab"}></div>
    </>
  );
};

export default Parameters;
