import React from 'react';
import { renderInShadowRoot } from './render';

if (process.env.NODE_ENV === 'development' && process.env.EXPO_OS === 'web') {
  // Stack traces are big with React Navigation
  // TODO: Can this be part of the `useLogBox` hook? Or do we need install early?
  require('./LogBox').default.install();
}

let isInstalled = false;

export function useLogBox(): void {
  if (process.env.NODE_ENV === 'development' && process.env.EXPO_OS === 'web') {
    if (isInstalled) {
      return undefined;
    }

    const ErrorToast = require('./ErrorToast')
      .default as typeof import('./ErrorToast').default;

    renderInShadowRoot('error-toast', React.createElement(ErrorToast));
    isInstalled = true;
  }
}
