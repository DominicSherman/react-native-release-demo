import React, { FC } from 'react';
import { MY_ENV_VALUE, NEW_VALUE } from '@env';

import { Screen } from '@/components/Screen';
import { Text } from '@/components/Text';

/**
 * A Home screen
 */
export const HomeScreen: FC = () => {
  return (
    <Screen testID="HomeScreen" alignItems="center" justifyContent="center">
      <Text>{`MY_ENV_VALUE: ${MY_ENV_VALUE}`}</Text>
      <Text>{`NEW_VALUE: ${NEW_VALUE}`}</Text>
    </Screen>
  );
};
