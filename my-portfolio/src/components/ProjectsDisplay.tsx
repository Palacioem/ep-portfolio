import {
    IconBrandSpotify,
    IconCoin,
    IconCalendarBolt,
    IconReceipt,
    IconSunHigh,
    IconReceiptTax,
    IconBrandThreads,
    IconGasStation,
    IconLockCode
    
  } from '@tabler/icons-react';
  import {
    Anchor,
    Card,
    Group,
    SimpleGrid,
    Text,
    UnstyledButton,
    useMantineTheme,
    Popover
  } from '@mantine/core';
  import classes from '../styles/ProjectDisplay.module.css';

  import { ProjectCard } from './ProjectCard';
  import { projectData } from './ProjectData';

  const mockdata = [
    { title: 'Logi-Tasks', icon: IconCalendarBolt, color: 'violet' },
    { title: 'AniSync', icon: IconBrandSpotify, color: 'indigo' },
    { title: 'Huffman-Hero', icon: IconBrandThreads, color: 'blue' },
    { title: 'ZKImage', icon: IconLockCode, color: 'green' },
    { title: 'Helios', icon: IconSunHigh, color: 'pink' },
    { title: 'Bank Fraud MLP', icon: IconCoin, color: 'red' },
    { title: 'FuelVisionary', icon: IconGasStation, color: 'orange' }, 
    { title: 'TBA', icon: IconReceipt, color: 'teal' },
    { title: 'TBA', icon: IconReceiptTax, color: 'cyan' },
  ];
  


  export function ProjectDisplay() {
    const theme = useMantineTheme();
    
  
    const items = mockdata.map((item,index) => (
      <Popover width={400} position="bottom" withArrow shadow="md"  arrowSize={30}>
        <Popover.Target>
          <UnstyledButton key={item.title} className={classes.item} >
            <item.icon color={theme.colors[item.color][6]} size={32} />
            <Text size="xs" mt={7}>
              {item.title}
            </Text>
          </UnstyledButton>
        </Popover.Target>
        <Popover.Dropdown>
          <ProjectCard project={projectData[index]}/>
        </Popover.Dropdown>
      </Popover>
    ));
    

    return (
      <>
       
        <Card withBorder radius="md" className={classes.card} >
          <Group justify="space-between">
            <Text className={classes.title}>Projects</Text>
            <Anchor size="xs" c="dimmed" style={{ lineHeight: 1 }}>
              + 21 other services
            </Anchor>
          </Group>
          <SimpleGrid cols={3} mt="md">
            {items}
          </SimpleGrid>
        </Card>
      </>
    );
  }