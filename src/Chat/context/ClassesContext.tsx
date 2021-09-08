import React, { createContext, useContext, useMemo } from 'react';

import { ComponentClasses } from '../types';

const classesContext = createContext<ComponentClasses | null>(null);

export const ClassesProvider = ({
  children,
  ...components
}: ComponentClasses & { children: React.ReactNode | React.ReactNode }) => (
  <classesContext.Provider value={components}>{children}</classesContext.Provider>
);

export function useCustomComponents() {
  const ctx = useContext(classesContext);
  if (!ctx) {
    throw new Error('Unable to use classes context. Is there a <ClassesProvider /> in the render tree?');
  }
  return useMemo(() => ctx ?? {}, [ctx]);
}
