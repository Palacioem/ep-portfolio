import { IconMoon, IconSun } from '@tabler/icons-react';
import cx from 'clsx';
import { ActionIcon, Group, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import classes from '../styles/Toggle.module.css'

export function Toggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  return (
    <Group justify="center">
      <ActionIcon
        onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
        variant="default"
        size="md"
        aria-label="Toggle color scheme"
      >
        {computedColorScheme === 'dark' ? <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} /> 
        : <IconMoon  stroke={1.5} style={{color:'black'}} />}
      </ActionIcon>
    </Group>
  );
}