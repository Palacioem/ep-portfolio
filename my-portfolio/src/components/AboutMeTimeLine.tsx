import { ThemeIcon, Text, Avatar, Timeline, Flex} from '@mantine/core';
import { IconBackhoe, IconBrandTeams } from '@tabler/icons-react';

export function AboutMeTimeLine() {
  return (
    <Timeline bulletSize={32} active={2} lineWidth={3} >
      <Timeline.Item 
        title="Houston Baptist University"
        bullet={
          <Avatar
            size={30}
            radius="xl"
            src="https://images.sidearmdev.com/convert?url=https%3a%2f%2fdxbhsrqyrr690.cloudfront.net%2fsidearm.nextgen.sites%2fhbu.sidearmsports.com%2fimages%2f2018%2f9%2f3%2fGeneral_HBU.jpg&type=webp"
          />
        }
        >
        <Flex
          direction="column"
          gap='xs'
        >
        <Text c = "dimmed">Aug 2014 - Dec 2017 </Text>
        <Text c="dimmed" size="sm">
          Started my academic journey pursuing a Biochemistry degree,<br />
          but discovered my real passion was in something else.
        </Text>
        </Flex>
      </Timeline.Item>
      <Timeline.Item
        title="Left to Join the Workforce"
        bullet={
          <ThemeIcon
            size={28}
            variant="gradient"
            gradient={{ from: 'blue', to: 'darkblue' }}
            radius="xl"
          >
            <IconBackhoe size={18} />
          </ThemeIcon>
        }
      >
        <Flex
          direction="column"
          gap='xs'
        >
        <Text c = "dimmed">Jan 2018-Present</Text>
        <Text c="dimmed" size="sm">
          Managed my families lawn care bussiness, where I handled<br />
          operations, scheduling and customer service.   Running a  <br />
          business taught me time management and self-discipline<br />
          skills that helped transition into software development.

        </Text>
        </Flex>
      </Timeline.Item>
      <Timeline.Item
        title="University Of Houston"
        bullet={
          <Avatar
            size={30}
            radius="xl"
            src="https://play-lh.googleusercontent.com/K587kCN_oTtBcCqw-iuZvbWMYGhFQr3Q_5EtrYoEhVSoAd_lq5ZGbo2lYe6JaEUjfg=w240-h480-rw"
          />
        }
      >
        <Flex
          direction="column"
          gap='xs'
        >
        <Text c = "dimmed">Aug 2021-Dec 2024</Text>
        <Text c="dimmed" size="sm">
          Decided to return to school to pursue my true passion for technology. <br />
          Through my CS degree, I developed knowledge in full-stack development, <br />
          AI and security, preparing me to build impactful software solutions
        </Text>
        </Flex>
      </Timeline.Item>
     
      <Timeline.Item
        title="Building, Learning & Job Searching"
        bullet={
          <ThemeIcon
            size={30}
            variant="gradient"
            gradient={{ from: 'blue', to: 'purple' }}
            radius="xl"
          >
            <IconBrandTeams size={20} />
          </ThemeIcon>
        }
      >
        <Flex
          direction="column"
          gap='xs'
        >
        <Text c = "dimmed">Present</Text>
        <Text c="dimmed" size="sm">
          Actively looking for opportunites as a software developer. In the meantime,  <br />
          Im working on personal projects and expanding my knowledge
        </Text>
        </Flex>
      </Timeline.Item>
    </Timeline>
  );
}

