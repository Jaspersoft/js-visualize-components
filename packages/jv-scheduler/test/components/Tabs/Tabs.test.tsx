/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import React from "react";
import Tabs from "../../../src/components/Tabs/Tabs";
import store from "../../../src/store/store";
import $ from "jquery";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
// import { IState } from "../../../src/types/scheduleType";
import { Provider as ReduxProvider } from "react-redux";

const renderTabs = () => {
  return (
    <ReduxProvider store={store}>
      <Tabs />
    </ReduxProvider>
  );
};

describe("Tabs Tests ", () => {
  xit("Should render Tabs component", () => {
    // let component: any;
    const component = render(renderTabs());
    const TabsComponent = $(component.container).find(
      ".jv-mDrawer-subheader.jv-mDrawer-subheaderPadded",
    );
    expect(TabsComponent.length).toEqual(1);
    component.unmount();
  });
});
