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
    title: "Violet",
    value: "light",
    colors: {
      primary: "#7d09ff",
      accent: "#45c4f9",
    },
  },
  {
    id: 2,
    title: "Blue",
    value: "theme-blue",
    colors: {
      primary: "#aee640",
      accent: "#6ca2de",
    },
  },
  {
    id: 3,
    title: "Peach",
    value: "theme-peach",
    colors: {
      primary: "#f30a22",
      accent: "#9e91e7",
    },
  },
  {
    id: 4,
    title: "Dark",
    value: "dark",
    colors: {
      primary: "#00d5be",
      accent: "#212764",
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
      primary: "#9d0c66",
      accent: "#4200cb",
    },
  },
];
