import { Icon} from '@tabler/icons-react';
import { Badge, Button, Card, Center, Group, Image, Text } from '@mantine/core';
import classes from '../styles/ProjectCard.module.css'


interface props{
  image: string
  title: string
  description: string
  content: string
  link: string
  tech: string[],
  icons: Icon[],
}

export function ProjectCard({project}: {project:props}) {
  if (!project.icons || !project.tech) return null;
  const features = project.icons.map((IconComponent, index) => (
    <Center key={index}>
      <IconComponent size={16} className={classes.icon} stroke={1.5} />
      <Text size="xs">{project.tech[index]}</Text>
    </Center>
  ));

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Image src={project.image} alt="Tesla Model S" />
      </Card.Section>

      <Group justify="space-between" mt="md">
        <div>
          <Text fw={500}>{project.title}</Text>
          <Text fz="xs" c="dimmed">
            {project.description}
          </Text>
        </div>
        <Badge variant="outline">{project.content}</Badge>
      </Group>

      <Card.Section className={classes.section} mt="md">
        <Text fz="sm" c="dimmed" className={classes.label}>
          Technology Used
        </Text>

        <Group gap={8} mb={-8}>
          {features}
        </Group>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Group gap={30}>
        

            <Button 
            radius="xl" 
            style={{ flex: 1 }} 
            onClick={() => window.open(project.link, '_blank')}
            >
            Source Code
            </Button>
        </Group>
      </Card.Section>
    </Card>
  );
}