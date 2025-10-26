interface IThemeColors {
  primary: string;
  accent: string;
  background: string;
  foreground: string;
  spotlightColor: `rgba(${number}, ${number}, ${number}, ${number})`;
}

export interface ITheme {
  id: number;
  title: string;
  value: string;
  colors: IThemeColors;
}

export const themeData: ITheme[] = [
  {
    id: 1,
    title: "Fantasy",
    value: "light",
    colors: {
      primary: "#8052a5",
      accent: "#3f338b",
      background: "#f8f8f8",
      foreground: "#09090b",
      spotlightColor: "rgba(75, 59, 228, 0.6)",
    },
  },
  {
    id: 2,
    title: "Meadow",
    value: "light-2",
    colors: {
      primary: "#aee640",
      accent: "#6ca2de",
      background: "#f8f8f8",
      foreground: "#09090b",
      spotlightColor: "rgba(174, 230, 64, 0.7)",
    },
  },
  {
    id: 3,
    title: "Blue Sea",
    value: "light-3",
    colors: {
      primary: "#4b7ecf",
      accent: "#081f65",
      background: "#f8f8f8",
      foreground: "#09090b",
      spotlightColor: "rgba(75, 126, 207, 0.6)",
    },
  },
  {
    id: 4,
    title: "Orange",
    value: "dark",
    colors: {
      primary: "#ff4e00",
      accent: "#681600",
      background: "#070707",
      foreground: "#fafafa",
      spotlightColor: "rgba(255, 78, 0, 0.6)",
    },
  },
  {
    id: 5,
    title: "Night Forest",
    value: "dark-2",
    colors: {
      primary: "#79fc00",
      accent: "#071637",
      background: "#09090b",
      foreground: "#fafafa",
      spotlightColor: "rgba(121, 252, 0, 0.5)",
    },
  },
  {
    id: 6,
    title: "Night Tokyo",
    value: "dark-3",
    colors: {
      primary: "#b377d5",
      accent: "#20398a",
      background: "#020002",
      foreground: "#fafafa",
      spotlightColor: "rgba(32, 57, 138, 0.6)",
    },
  },
];
