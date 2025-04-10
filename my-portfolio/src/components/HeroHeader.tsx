import { IconCheck } from '@tabler/icons-react';
import { Button, Container, Flex, Group, Image, List, Mark, Text, ThemeIcon, Title } from '@mantine/core';
import classes from '../styles/HeroHeader.module.css';

interface HeroProps {
  onClick: () => void;
}

export function HeroHeader({ onClick }: HeroProps) {
  return (
    <Container style={{width:'100vh', height:'100vh'}}>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Flex 
          direction='column'
          gap='md'
          >
          <Title className={classes.title}>
            Hi,I'm<Mark color='yellow'><span > Edwin </span> </Mark><br />
            
          </Title>
          <Title size={18}>
            <span>FullStack Developer | Cybersecurity Enthusiast </span>
          </Title>
          </Flex>
          <Text c="dimmed" mt="md">
          Eager to apply my academic knowledge to solve real-world problems in tech
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck size={12} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>Recent Computer Science graduate</b> – ready to tackle real-world challenges in tech.
            </List.Item>
           
            
          </List>

          <Group mt={35} grow wrap='nowrap' preventGrowOverflow={false}>
            <Button radius="xl" size="md" className={classes.control} onClick={onClick}>
              Contact Me
            </Button>
            <Button 
              variant="default" 
              radius="xl" 
              size="md" 
              className={classes.control} 
              onClick={() => window.open('https://github.com/Palacioem/ep-portfolio', '_blank')}
            >
              Source Code
            </Button>
          </Group>
        </div>
        <Image src='/images/6502423.png' className={classes.image} />
      </div>
    </Container>
  );
}