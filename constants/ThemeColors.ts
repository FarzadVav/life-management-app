const white_thin = "#FFFFFF",
  white = "#AAAAAA",
  white_thick = "#757575";

const black_thin = "#505050",
  black = "#303030",
  black_thick = "#101010";

const primary_thin = "#3690cc",
  primary = "#115d9b",
  primary_thick = "#062d5c";

export type ColorsType = {
  background_thin: string;
  background: string;
  background_thick: string;
  foreground_thin: string;
  foreground: string;
  foreground_thick: string;
  primary_thin: string;
  primary: string;
  primary_thick: string;
}

export type ThemeColorsType = {
  light: ColorsType;
  dark: ColorsType;
}

export const ThemeColors: ThemeColorsType = {
  light: {
    background_thin: white_thin,
    background: white,
    background_thick: white_thick,
    foreground_thin: black_thin,
    foreground: black,
    foreground_thick: black_thick,
    primary_thin,
    primary,
    primary_thick,
  },
  dark: {
    background_thin: black_thin,
    background: black,
    background_thick: black_thick,
    foreground_thin: white_thin,
    foreground: white,
    foreground_thick: white_thick,
    primary_thin,
    primary,
    primary_thick,
  },
}