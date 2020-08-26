import { createContext } from 'react';

type ContextProps = {
  buttonBack: boolean;
};

export const AppContext = createContext<Partial<ContextProps>>({});
