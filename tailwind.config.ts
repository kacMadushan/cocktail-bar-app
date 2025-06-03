import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--clr-black)",
        secondary: "var(--clr-white)",
        urgent: "var(--clr-light)"
      },
      fontSize: {
        helperText: "var(--fs-helperText)",
        paragraph: "var(--fs-paragraph)",
        header1: "var(--fs-header1)",
        header2: "var(--fs-header2)",
        header3: "var(--fs-header3)",
        header4: "var(--fs-header4)",
        header5: "var(--fs-header5)",
      },
      fontWeight: {
        light: "var(--fw-light)",
        medium: "var(--fw-medium)"
      },
      fontFamily: {
        heading: "var(--ff-abrilFatface)",
        body: "var(--ff-jost)"
      }
    },
  },
  plugins: [],
};
export default config;
