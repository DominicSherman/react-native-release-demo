import React, { FC } from 'react';
import Constants from 'expo-constants';

import { Screen } from '@/components/Screen';
import { Text } from '@/components/Text';

/**
 * A Home screen
 */
export const HomeScreen: FC = () => {
  return (
    <Screen testID="HomeScreen" alignItems="center" justifyContent="center">
      <Text>{`MY_ENV_VALUE: ${Constants.manifest?.extra?.MY_ENV_VALUE}`}</Text>
    </Screen>
  );
};
