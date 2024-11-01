import "./styles/storybook-jv-ui.scss";
import { JVStylesProvider } from "../material-ui";
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
