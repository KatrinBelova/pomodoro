export interface ColorSetOptions {
  background: string;
  color: string;
  primary: string;
  secondary?: string;
}

export interface Theme {
  focus: ColorSetOptions;
  shortBreak: ColorSetOptions;
  longBreak: ColorSetOptions;
}

export type Mode = 'light' | 'dark';
