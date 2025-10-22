interface IThemeColors {
  primary: string;
  accent: string;
  background: string;
  foreground: string;
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
      primary: "#7d09ff",
      accent: "#45c4f9",
      background: "#f8f8f8",
      foreground: "#09090b",
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
    },
  },
];
