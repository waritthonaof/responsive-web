'use client';

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

const ScreenContext = createContext({
  widthScreen: 0,
});

const ScreenProvider = ({ children }: { children: ReactNode }) => {
  const [widthScreen, setWidthScreen] = useState<number>(0);

  useEffect(() => {
    window.addEventListener('resize', () => setWidthScreen(window.innerWidth));
    setWidthScreen(window.innerWidth);
    return () => {
      window.removeEventListener('resize', () =>
        setWidthScreen(window.innerWidth)
      );
    };
  }, []);

  return (
    <ScreenContext.Provider value={{ widthScreen }}>
      {children}
    </ScreenContext.Provider>
  );
};

const useScreen = () => {
  const context = useContext(ScreenContext);
  if (!context)
    throw new Error('ScreenContext was used outside of ScreenProvider');
  return context;
};

export { ScreenProvider, useScreen };
