interface IThemeColors {
  background: string;
  foreground: string;
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
      background: "#ffffff",
      foreground: "#09090b",
      primary: "#ff2056",
      accent: "#432dd7",
    },
  },
  {
    id: 2,
    title: "Blue",
    value: "theme-blue",
    colors: {
      background: "#ffffff",
      foreground: "#09090b",
      primary: "#bbf451",
      accent: "#8ec5ff",
    },
  },
  {
    id: 3,
    title: "Peach",
    value: "theme-peach",
    colors: {
      background: "#ffffff",
      foreground: "#09090b",
      primary: "#fcbb4d",
      accent: "#5d498c",
    },
  },
  {
    id: 4,
    title: "Dark",
    value: "dark",
    colors: {
      background: "#070707",
      foreground: "#fafafa",
      primary: "#00d5be",
      accent: "#1e2939",
    },
  },
  {
    id: 5,
    title: "Green",
    value: "theme-green",
    colors: {
      background: "#09090b",
      foreground: "#fafafa",
      primary: "#79fc00",
      accent: "#071637",
    },
  },
  {
    id: 6,
    title: "Midnigth",
    value: "theme-midnight",
    colors: {
      background: "#0a0614",
      foreground: "#fafafa",
      primary: "#fda5d5",
      accent: "#241e64",
    },
  },
];
