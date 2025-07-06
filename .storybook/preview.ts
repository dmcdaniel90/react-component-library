import type { Preview } from "@storybook/react-vite";
import { options } from "less";
import { background } from "storybook/internal/theming";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },

    backgrounds: {
      options: {
        dark: {
          name: "Dark",
          value: "rgba(58, 57, 44, 1)",
        },
        light: {
          name: "Light",
          value: "rgba(191, 187, 142, 0.6)",
        },
      }
    },
    initialGlobals: {
      // 👇 Set the initial background color
      backgrounds: { value: 'light' },
    },
  },
};

export default preview;
