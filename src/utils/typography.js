import Typography from "typography";

const typography = new Typography({
  googleFonts: [
    {
      name: "Open Sans",
      styles: ["300", "400", "700"]
    },
    {
      name: "Raleway",
      styles: ["400", "500", "700", "800"]
    }
  ],
  baseFontSize: "24px",
  headerFontFamily: ["Raleway"],
  bodyFontFamily: ["Open Sans"]
});

export default typography;
