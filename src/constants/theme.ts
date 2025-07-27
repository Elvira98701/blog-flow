interface IThemeColors {
  primary: string;
  accent: string;
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
    title: "Light",
    value: "light",
    colors: {
      primary: "#00a8aa",
      accent: "#4c1a57",
    },
  },
  {
    id: 2,
    title: "Blue",
    value: "theme-blue",
    colors: {
      primary: "#bbf451",
      accent: "#8ec5ff",
    },
  },
  {
    id: 3,
    title: "Peach",
    value: "theme-peach",
    colors: {
      primary: "#fcbb4d",
      accent: "#5d498c",
    },
  },
  {
    id: 4,
    title: "Dark",
    value: "dark",
    colors: {
      primary: "#00d5be",
      accent: "#1e2939",
    },
  },
  {
    id: 5,
    title: "Green",
    value: "theme-green",
    colors: {
      primary: "#79fc00",
      accent: "#071637",
    },
  },
  {
    id: 6,
    title: "Midnigth",
    value: "theme-midnight",
    colors: {
      primary: "#fda5d5",
      accent: "#241e64",
    },
  },
];
