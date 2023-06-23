import resume from './components/resume.json'
import Footer from 'components/footer/Footer'

import Provider from './components/Provider'
import {
  Center,
  Container,
  Group,
  BackgroundImage,
  Text,
  Accordion,
  Flex,
  Paper,
  Title,
  Badge,
  Space,
} from '@mantine/core'

const colors = [
  'rgba(80, 120, 183, 0.8)',
  'rgba(80, 120, 175)',
  'rgba(80, 120, 170, 0.3)',
  'rgba(80, 120, 175)',
  'rgba(80, 120, 183, 0.3)',
]

const Resume = () => {
  return (
    <>
      <Provider>
        <Container size="lg">
          <Paper shadow="xl" withBorder={true} radius={'lg'}>
            <BackgroundImage src="/effect.png" radius={'md'}>
              <Container size="lg">
                <Space h="lg" />
                <Space h="lg" />
                <Center>
                  <Title size="h1" weight={700} style={{ marginBottom: '1rem' }}>
                    {resume.name}
                  </Title>
                </Center>
                <Space h="lg" />
              </Container>
              <Space h="lg" />
              <Container size="md">
                <Space h="lg" />
                <Text size="lg" weight={700} style={{ marginBottom: '1rem' }}>
                  Employment:
                </Text>
                <Accordion
                  chevronPosition="right"
                  style={{ marginBottom: '1.5rem' }}
                  multiple={true}
                  radius="md"
                  transitionDuration={800}
                >
                  {resume.employment.map((job, index) => (
                    <Accordion.Item key={index} value={job.company}>
                      <Accordion.Control style={{ backgroundColor: 'transparent' }}>
                        <Group>
                          <Text size="md" weight={700}>
                            {job.company}
                          </Text>
                          <Text size="md" style={{ fontStyle: 'italic' }}>
                            {job.location}
                          </Text>
                          <Text size="md">
                            {job.duration.start} - {job.duration.end}
                          </Text>
                        </Group>
                      </Accordion.Control>
                      <Accordion.Panel>
                        <Group>
                          <Text size="md" weight={700}>
                            {job.position}
                          </Text>
                          {job.location && (
                            <Text size="md" style={{ fontStyle: 'italic' }}>
                              {job.location}
                            </Text>
                          )}
                          <Text size="md">
                            {job.duration.start} - {job.duration.end}
                          </Text>
                          <Text size="md">{job.description}</Text>
                        </Group>
                      </Accordion.Panel>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </Container>
              <Space h="lg" />
              <Container size="md">
                <Space h="lg" />
                <Text size="lg" weight={700} style={{ marginBottom: '1rem' }}>
                  {`Skills`}
                </Text>
                <Flex
                  direction="row"
                  justify={'space-between'}
                  wrap={'wrap'}
                  style={{ marginBottom: '1rem' }}
                >
                  {resume.skills.programmingSkills.map((skill, index) => {
                    return (
                      <Badge
                        variant={'gradient'}
                        gradient={{
                          from: colors[index % colors.length],
                          to: colors[(index + 1) % colors.length],
                        }}
                        key={index}
                        style={{ padding: '.5rem', margin: '.3rem' }}
                      >
                        {skill}
                      </Badge>
                    )
                  })}
                </Flex>
                <Space h="lg" />
              </Container>
              <Space h="lg" />
              <Container size="md">
                <Space h="lg" />
                <Text size="lg" weight={700} style={{ marginBottom: '1rem' }}>
                  Education:
                </Text>
                <Text size="lg" style={{ marginBottom: '1rem' }}>
                  {resume.education.university}
                </Text>
                <ul>
                  {resume.education.degrees.map((degree, index) => (
                    <Text size={'sm'} key={index}>
                      {degree}
                    </Text>
                  ))}
                </ul>
                <Space h="lg" />
              </Container>
              <Space h="lg" />
              <Footer />
            </BackgroundImage>
          </Paper>
        </Container>
      </Provider>
    </>
  )
}

export default Resume
