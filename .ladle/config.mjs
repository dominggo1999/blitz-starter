export default {
  stories: [
    "src/**/stories.{js,jsx,ts,tsx}",
    "src/**/*.stories.{js,jsx,ts,tsx}",
    "components/**/stories.{js,jsx,ts,tsx}",
    "components/**/*.stories.{js,jsx,ts,tsx}",
  ],
  addons: {
    a11y: {
      enabled: false,
    },
    action: {
      enabled: false,
      defaultState: [],
    },
    control: {
      enabled: true,
      defaultState: {},
    },
    ladle: {
      enabled: false,
    },
    mode: {
      enabled: true,
      defaultState: "full",
    },
    rtl: {
      enabled: false,
      defaultState: false,
    },
    source: {
      enabled: false,
      defaultState: false,
    },
    theme: {
      enabled: true,
      defaultState: "light",
    },
    width: {
      enabled: true,
      options: {
        xsmall: 414,
        small: 640,
        medium: 768,
        large: 1024,
      },
      defaultState: 0,
    },
  },
}
