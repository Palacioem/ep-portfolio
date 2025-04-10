import { useState } from 'react';
import {  Container, Group } from '@mantine/core';
import { IconCircleDottedLetterE } from '@tabler/icons-react'
import classes from '../styles/Header.module.css';

const links = [
  { link: '/about', label: 'Introduction' },
  { link: '/pricing', label: 'About Me' },
  { link: '/learn', label: 'Projects' },
  
];

interface HeaderProps {
  onClick1: () => void;
  onClick2: () => void;
  onClick3:  () => void;
}

export function Header({ onClick1, onClick2, onClick3 }: HeaderProps) {
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        if (link.label === 'Introduction') {
          onClick1();
        } else if (link.label === 'About Me') {
          onClick2();
        } else if (link.label === 'Projects') {
          onClick3();
        }
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header} style={{width:'90vh'}}>
      <Container size="md" className={classes.inner}>
      <Group gap={15} visibleFrom="xs">
          <IconCircleDottedLetterE size={40} stroke={1.5}  />
       
          {items}
        </Group>
      </Container>
    </header>
  );
}
