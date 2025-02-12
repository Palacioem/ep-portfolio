import { IconBrandLinkedin, IconBrandGithub, IconPlus, IconSearch, IconFileCv,IconBrandPython,IconBrandCpp,IconSql,IconBrandReactNative,IconBrandDjango,IconBrandTypescript} from '@tabler/icons-react';
import {
  ActionIcon,
  Badge,
  Code,
  Flex,
  Group,
  Text,
  TextInput,
  Tooltip,
  UnstyledButton
} from '@mantine/core';
import classes from "../styles/NavbarSearch.module.css"
import { UserInfo } from './UserInfo';

const links = [
  { icon: IconBrandLinkedin, label: 'Linkedin', notifications: 3,link:'https://www.linkedin.com/in/edwin-palacio-4398792b1/' },
  { icon: IconBrandGithub, label: 'Github', notifications: 1 , link:'https://github.com/Palacioem'},
  { icon: IconFileCv, label: 'Resume',link:'https://www.overleaf.com/read/gjvfhbmgcdxb#0049e4'}
];

const collections = [
  { icon: IconBrandPython, label: 'PYTHON' },
  { icon: IconBrandCpp, label: 'C++' },
  {icon:IconBrandTypescript, label:'TYPESCRIPT'},
  {icon:IconSql, label:'SQL'},
  {icon:IconBrandReactNative,label:'REACT'},
  {icon:IconBrandDjango, label:'DJANGO'}
  
];

export function Navbar() {
  const mainLinks = links.map((link) => (
    <UnstyledButton key={link.label} className={classes.mainLink} component='a' href={link.link}>
      <div className={classes.mainLinkInner}>
        <link.icon size={20} className={classes.mainLinkIcon} stroke={1.5} />
        <span>{link.label}</span>
      </div>
      {link.notifications && (
        <Badge size="sm" variant="filled" className={classes.mainLinkBadge}>
          {link.notifications}
        </Badge>
      )}
    </UnstyledButton>
  ));

  const collectionLinks = collections.map((collection) => (
    <a
      href="#"
      onClick={(event) => event.preventDefault()}
      key={collection.label}
      className={classes.collectionLink}
    >
      <Flex align="Center" gap="lg" >
          <collection.icon size={22} className={classes.mainLinkIcon} stroke={1.5} color="#364fc7"/>
        
        {collection.label}
        
      </Flex>
      
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.section}>
        <UserInfo/>
      </div>

      <TextInput
        placeholder="Search"
        size="xs"
        leftSection={<IconSearch size={12} stroke={1.5} />}
        rightSectionWidth={70}
        rightSection={<Code className={classes.searchCode}>Ctrl + K</Code>}
        styles={{ section: { pointerEvents: 'none' } }}
        mb="sm"
      />

      <div className={classes.section}>
        <div className={classes.mainLinks}>{mainLinks}</div>
      </div>

      <div className={classes.section}>
        <Group className={classes.collectionsHeader} justify="space-between">
          <Text size="xs" fw={500} c="dimmed">
          Technical Skills
          </Text>
          <Tooltip label="Create collection" withArrow position="right">
            <ActionIcon variant="default" size={18}>
              <IconPlus size={12} stroke={1.5} />
            </ActionIcon>
          </Tooltip>
        </Group>
        <div className={classes.collections}>{collectionLinks}</div>
      </div>
    </nav>
  );
}