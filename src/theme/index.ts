import { Theme } from '../types/theme';

const red50 = '#FFF2F2';
const red500 = '#FF4C4C';
const red900 = '#471515';
const red950 = '#0D0404';

const green50 = '#F2FFF5';
const green600 = '#4DDA6E';
const green900 = '#14401D';
const green950 = '#040D06';

const blue50 = '#F2F9FF';
const blue600 = '#4CACFF';
const blue900 = '#153047';
const blue950 = '#04090D';

export const lightTheme: Theme = {
  focus: {
    background: red50,
    color: red900,
    primary: red500,
  },
  shortBreak: {
    background: green50,
    color: green900,
    primary: green600,
  },
  longBreak: {
    background: blue50,
    color: blue900,
    primary: blue600,
  },
};

export const darkTheme: Theme = {
  focus: {
    background: red950,
    color: red50,
    primary: red500,
  },
  shortBreak: {
    background: green950,
    color: green50,
    primary: green600,
  },
  longBreak: {
    background: blue950,
    color: blue50,
    primary: blue600,
  },
};

export {};
