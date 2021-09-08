import React, { createContext, useContext, useMemo } from 'react';

import { CustomChatComponents } from '../types';

const customComponentsCtx = createContext<CustomChatComponents | null>(null);

export const CustomComponentsProvider = ({
  children,
  ...components
}: CustomChatComponents & { children: React.ReactNode | React.ReactNode }) => (
  <customComponentsCtx.Provider value={components}>{children}</customComponentsCtx.Provider>
);

export function useCustomComponents() {
  const ctx = useContext(customComponentsCtx);
  if (!ctx) {
    throw new Error('Unable to use custom components. Is there a <CustomComponentProvider /> in the render tree?');
  }
  return useMemo(() => ctx ?? {}, [ctx]);
}
