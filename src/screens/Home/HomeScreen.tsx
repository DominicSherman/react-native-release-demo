import React, { FC } from 'react';

import { Screen } from '@/components/Screen';
import { Text } from '@/components/Text';

/**
 * A Home screen
 */
export const HomeScreen: FC = () => {
  return (
    <Screen testID="HomeScreen" alignItems="center" justifyContent="center">
      <Text>{`MY_ENV_VALUE: ${process.env.MY_ENV_VALUE}`}</Text>
    </Screen>
  );
};
