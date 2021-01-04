/*
 * File: app.provider.tsx
 * File Created: Saturday, 2nd January 2021 9:48:20 pm
 * -----
 * Last Modified: Sunday, 3rd January 2021 11:32:56 pm
 * -----
 * Description:
 */

import * as eva from '@eva-design/eva';
import * as theme from './theme.json';

import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import React, {ReactNode} from 'react';

import {EvaIconsPack} from '@ui-kitten/eva-icons';

interface IFProps {
  children: ReactNode;
}
const AppProvider: React.FC<IFProps> = ({children}) => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
        {children}
      </ApplicationProvider>
    </>
  );
};

export default AppProvider;
