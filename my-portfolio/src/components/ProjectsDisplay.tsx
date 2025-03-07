import {
    IconBuildingBank,
    IconCashBanknote,
    IconCoin,
    IconCreditCard,
    IconReceipt,
    IconReceiptRefund,
    IconReceiptTax,
    IconRepeat,
    IconReport,
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

  const mockdata = [
    { title: 'Credit cards', icon: IconCreditCard, color: 'violet' },
    { title: 'Banks nearby', icon: IconBuildingBank, color: 'indigo' },
    { title: 'Transfers', icon: IconRepeat, color: 'blue' },
    { title: 'Refunds', icon: IconReceiptRefund, color: 'green' },
    { title: 'Receipts', icon: IconReceipt, color: 'teal' },
    { title: 'Taxes', icon: IconReceiptTax, color: 'cyan' },
    { title: 'Reports', icon: IconReport, color: 'pink' },
    { title: 'Payments', icon: IconCoin, color: 'red' },
    { title: 'Cashback', icon: IconCashBanknote, color: 'orange' },
  ];
  
  export function ProjectDisplay() {
    const theme = useMantineTheme();
    
  
    const items = mockdata.map((item) => (
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
          <ProjectCard/>
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