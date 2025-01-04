/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { InputControlsState } from "../../src/reducer/InputControlsReducer";

export const INITIAL_STATE_FOR_TESTS: InputControlsState = {
  inputControls: [
    {
      id: "column_boolean_1",
      type: "bool",
      uri: "repo:/public/Visualize/Adhoc/Ad_Hoc_View_All_filters_files/column_boolean_1",
      label: "column_boolean",
      mandatory: false,
      readOnly: false,
      visible: true,
      masterDependencies: [],
      slaveDependencies: [],
      state: {
        uri: "/public/Visualize/Adhoc/Ad_Hoc_View_All_filters_files/column_boolean_1",
        id: "column_boolean_1",
        value: false,
      },
    },
    {
      id: "column_string_1",
      type: "singleValueText",
      uri: "repo:/public/Visualize/Adhoc/Ad_Hoc_View_All_filters_files/column_string_1",
      label: "column_string 次を含まない",
      mandatory: false,
      readOnly: false,
      visible: true,
      masterDependencies: [],
      slaveDependencies: [],
      state: {
        uri: "/public/Visualize/Adhoc/Ad_Hoc_View_All_filters_files/column_string_1",
        id: "column_string_1",
        value:
          "This is a predefined text different than the stored in the server",
      },
      dataType: {
        type: "text",
        strictMax: false,
        strictMin: false,
      },
    },
    {
      id: "column_date_1",
      type: "singleValueDate",
      uri: "repo:/public/Visualize/Adhoc/Ad_Hoc_View_All_filters_files/column_date_1",
      label: "column_date 次の後",
      mandatory: false,
      readOnly: false,
      visible: true,
      masterDependencies: [],
      slaveDependencies: [],
      validationRules: [
        {
          dateTimeFormatValidationRule: {
            errorMessage: "Specify a valid date value.",
            format: "yyyy-MM-dd",
          },
        },
      ],
      state: {
        uri: "/public/Visualize/Adhoc/Ad_Hoc_View_All_filters_files/column_date_1",
        id: "column_date_1",
        value: "2009-03-02",
      },
      dataType: {
        type: "date",
        strictMax: false,
        strictMin: false,
      },
    },
    {
      id: "column_time_1",
      type: "singleValueTime",
      uri: "repo:/public/Visualize/Adhoc/Ad_Hoc_View_All_filters_files/column_time_1",
      label: "column_time 次以前",
      mandatory: false,
      readOnly: false,
      visible: true,
      masterDependencies: [],
      slaveDependencies: [],
      validationRules: [
        {
          dateTimeFormatValidationRule: {
            errorMessage: "Specify a valid time value.",
            format: "HH:mm:ss",
          },
        },
      ],
      state: {
        uri: "/public/Visualize/Adhoc/Ad_Hoc_View_All_filters_files/column_time_1",
        id: "column_time_1",
        value: "14:00:00",
      },
      dataType: {
        type: "time",
        strictMax: false,
        strictMin: false,
      },
    },
    {
      id: "column_timestamp_1",
      type: "singleValueDatetime",
      uri: "repo:/public/Visualize/Adhoc/Ad_Hoc_View_All_filters_files/column_timestamp_1",
      label: "column_timestamp ではない 次の範囲内",
      mandatory: false,
      readOnly: false,
      visible: true,
      masterDependencies: [],
      slaveDependencies: [],
      validationRules: [
        {
          dateTimeFormatValidationRule: {
            errorMessage: "Specify a valid date/time value.",
            format: "yyyy-MM-dd'T'HH:mm:ss",
          },
        },
      ],
      state: {
        uri: "/public/Visualize/Adhoc/Ad_Hoc_View_All_filters_files/column_timestamp_1",
        id: "column_timestamp_1",
        value: "2014-03-02T10:00:00",
      },
      dataType: {
        type: "datetime",
        strictMax: false,
        strictMin: false,
      },
    },
    {
      id: "column_timestamp_2",
      type: "singleValueDatetime",
      uri: "repo:/public/Visualize/Adhoc/Ad_Hoc_View_All_filters_files/column_timestamp_2",
      label: "および",
      mandatory: false,
      readOnly: false,
      visible: true,
      masterDependencies: [],
      slaveDependencies: [],
      validationRules: [
        {
          dateTimeFormatValidationRule: {
            errorMessage: "Specify a valid date/time value.",
            format: "yyyy-MM-dd'T'HH:mm:ss",
          },
        },
      ],
      state: {
        uri: "/public/Visualize/Adhoc/Ad_Hoc_View_All_filters_files/column_timestamp_2",
        id: "column_timestamp_2",
        value: "2014-09-13T15:46:22",
      },
      dataType: {
        type: "datetime",
        strictMax: false,
        strictMin: false,
      },
    },
    {
      id: "id_1",
      type: "singleValueNumber",
      uri: "repo:/public/Visualize/Adhoc/Ad_Hoc_View_All_filters_files/id_1",
      label: "id 次以上",
      mandatory: false,
      readOnly: false,
      visible: true,
      masterDependencies: [],
      slaveDependencies: [],
      state: {
        uri: "/public/Visualize/Adhoc/Ad_Hoc_View_All_filters_files/id_1",
        id: "id_1",
        value: "99",
      },
      dataType: {
        type: "number",
        strictMax: false,
        strictMin: false,
      },
    },
    {
      id: "column_float_1",
      type: "singleValueNumber",
      uri: "repo:/public/Visualize/Adhoc/Ad_Hoc_View_All_filters_files/column_float_1",
      label: "column_float ではない",
      mandatory: false,
      readOnly: false,
      visible: true,
      masterDependencies: [],
      slaveDependencies: [],
      state: {
        uri: "/public/Visualize/Adhoc/Ad_Hoc_View_All_filters_files/column_float_1",
        id: "column_float_1",
        value: "0.33",
      },
      dataType: {
        type: "number",
        strictMax: false,
        strictMin: false,
      },
    },
  ],
  validResponse: {},
  validationResultState: {},
  initiatorIdCascadingIc: "",
};
