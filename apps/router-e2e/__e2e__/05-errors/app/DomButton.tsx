'use dom';

import React from 'react';

export function DomButton({ title, onPress }: { title: string; onPress: () => void; dom: import('expo/dom').DOMProps }) {
  return (
    <span
      style={{ fontSize: 24, backgroundColor: 'darkcyan', color: 'white', padding: 16 }}
      onClick={onPress}>
      {title}
    </span>
  );
}
