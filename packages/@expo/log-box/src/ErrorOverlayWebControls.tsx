import React from 'react';

import * as LogBoxData from './Data/LogBoxData';

import { withRuntimePlatform } from './ContextPlatform';
import { withActions } from './ContextActions';
import { renderInShadowRoot } from './render';

let currentRoot: ReturnType<typeof renderInShadowRoot> | null = null;

export function presentGlobalErrorOverlay() {
  if (currentRoot) {
    return;
  }

  const { LogBoxInspectorContainer } = require('./ErrorOverlay') as typeof import('./ErrorOverlay');
  const ErrorOverlay = LogBoxData.withSubscription(
      withRuntimePlatform(
        withActions(
          LogBoxInspectorContainer,
          {
            onMinimize: () => {LogBoxData.setSelectedLog(-1);
              LogBoxData.setSelectedLog(-1);
            },
          }
        ),
        { platform: process.env.EXPO_OS ?? 'web' }
      )
    );

  currentRoot = renderInShadowRoot('error-overlay', React.createElement(ErrorOverlay));
}

export function dismissGlobalErrorOverlay() {
  currentRoot?.unmount();
  currentRoot = null;
}
