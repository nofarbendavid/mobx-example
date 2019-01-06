import {isDebug} from "../constants/config";

type logTypes = 'info' | 'warn' | 'error';

const log = (type: logTypes, ...args: any) => {
  if (isDebug) {
    console[type](...args);
  }
};

export const info = (...args: any) => log('info', ...args);
export const warn = (...args: any) => log('warn', ...args);
export const error = (...args: any) => log('error', ...args);