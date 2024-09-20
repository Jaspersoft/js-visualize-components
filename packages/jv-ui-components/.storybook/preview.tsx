import "@jaspersoft/jv-ui-components/material-ui/JVMuiClassNameSetup";
import "./styles/storybook-jv-ui.scss";
import { JVStylesProvider } from "@jaspersoft/jv-ui-components";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const { key, ...params } = context;
      return (
        <JVStylesProvider>
          <Story key={key} {...params} />
        </JVStylesProvider>
      );
    },
  ],
};

export default preview;
